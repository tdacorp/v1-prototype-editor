import React from 'react';
import { LinkSchema } from './types';

const Link: React.FC<LinkSchema> = ({ label, href, target, style }) => (
  <a
    href={href}
    target={target}
    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    style={{
      color: style?.color,
      textDecoration: style?.underline ? 'underline' : 'none',
      fontWeight: style?.fontWeight,
      fontSize: style?.fontSize,
      margin: style?.margin,
    }}
  >
    {label}
  </a>
);

export default Link;
