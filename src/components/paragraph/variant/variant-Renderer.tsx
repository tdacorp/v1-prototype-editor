import { ParagraphSchema } from "../types";
import { CaptionParagraph } from "./caption-Paragraph";
import { HeadingParagraph } from "./heading-Paragraph";
import { ParagraphParagraph } from "./paragraph-Paragraph";
import { SubheadingParagraph } from "./subheading-Paragraph";

interface RendererProps {
  paragraph: ParagraphSchema;
}

export const ParagraphVariantRenderer = ({ paragraph }: RendererProps) => {
  const { type } = paragraph.props;

  switch (type.value) {
    case "heading":
      return <HeadingParagraph paragraph={paragraph} />;
    case "subheading":
      return <SubheadingParagraph paragraph={paragraph} />;
    case "caption":
      return <CaptionParagraph paragraph={paragraph} />;
    case "paragraph":
      return <ParagraphParagraph paragraph={paragraph} />;
    default:
      return null;
  }
};
