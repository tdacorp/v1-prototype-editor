import { ParagraphSchema } from "./types";

export const subheadingParagraph: ParagraphSchema = {
   id: "text-1",
  name: "text",
  displayName: "Paragraph Block",
  type: "text",
  status: {
    value: "published",
    default: "draft",
    enum: ["published", "draft"]
  },
  props: {
    content: "This is a default paragraph.",
    type: {
      value: "paragraph",
      default: "paragraph",
      enum: ["heading", "subheading", "paragraph", "caption"]
    },
    alignment: {
      value: "left",
      default: "left",
      enum: ["left", "center", "right", "justify"]
    },
    size: {
      value: "md",
      default: "md",
      enum: ["sm", "md", "lg", "xl"]
    },
    weight: {
      value: "normal",
      default: "normal",
      enum: ["light", "normal", "medium", "semibold", "bold"]
    },
    isTruncated: false,
    maxLines: 0
  },
  style: {
    backgroundColor: "#fff",
    textColor: "#1c2029ff",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "0.5px",
    margin: "12px 4px",
    padding: "0px"
  },
  config: {
    layout: "inline",
    responsive: true,
    allowRichText: true
  },
  meta: {
    createdAt: "2025-10-10T10:00:00Z",
    updatedAt: "2025-10-10T12:00:00Z",
    lastModified: "2025-10-25T19:46:00Z",
    author: {
      id: "user-002",
      name: "Jane Smith"
    }
  }
}