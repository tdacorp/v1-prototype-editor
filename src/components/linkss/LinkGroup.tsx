import React from 'react';
import rawLinksData from './data.json';
import { LinkSchema } from './types';
import Link from './Link'; // Your Link component


const linksData = rawLinksData as LinkSchema[];

const LinkGroup: React.FC = () => {
  return (
    <div>
      {linksData
        .filter((link) => link.status.value === 'published')
        .map((link) => (
          <Link key={link.id} {...link} />
        ))}
    </div>
  );
};

export default LinkGroup;
