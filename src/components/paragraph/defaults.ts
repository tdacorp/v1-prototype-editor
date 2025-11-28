import { ParagraphSchema } from "@/types/type"; 

export const headingParagraph: ParagraphSchema = {
    id: "text-2",
    name: "heading",
    displayName: "Heading Block",
    type: "text",
    status: {
        value: "published",
        default: "draft",
        enum: ["published", "draft"]
    },
    props: {
        content: "This is a heading.",
        type: {
            value: "heading",
            default: "paragraph",
            enum: ["heading", "subheading", "paragraph", "caption"]
        },
        alignment: {
            value: "left",
            default: "left",
            enum: ["left", "center", "right", "justify"]
        },
        size: {
            value: "xl",
            default: "md",
            enum: ["sm", "md", "lg", "xl"]
        },
        weight: {
            value: "bold",
            default: "normal",
            enum: ["light", "normal", "medium", "semibold", "bold"]
        },
        isTruncated: false,
        maxLines: 0
    },
    style: {
       backgroundColor: "transparent",
        textColor: "#1b1bc5ff",
        fontFamily: "Inter, sans-serif",
        fontStyle: "normal",
        lineHeight: "1.3",
        letterSpacing: "1px",
        margin: "16px 0px",
        padding: "2px 0px",
        fontsize:"40px",
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
};


export const subheadingParagraph: ParagraphSchema = {
    id: "text-3",
    name: "subheading",
    displayName: "Subheading Block",
    type: "text",
    status: {
        value: "published",
        default: "draft",
        enum: ["published", "draft"]
    },
    props: {
        content: "This is a subheading.",
        type: {
            value: "subheading",
            default: "paragraph",
            enum: ["heading", "subheading", "paragraph", "caption"]
        },
        alignment: {
            value: "left",
            default: "left",
            enum: ["left", "center", "right", "justify"]
        },
        size: {
            value: "xl",
            default: "md",
            enum: ["sm", "md", "lg", "xl"]
        },
        weight: {
            value: "bold",
            default: "normal",
            enum: ["light", "normal", "medium", "semibold", "bold"]
        },
        isTruncated: false,
        maxLines: 0
    },
    style: {
       backgroundColor: "transparent",
        textColor: "#ff0000ff",
        fontFamily: "Inter, sans-serif",
        fontStyle: "normal",
        lineHeight: "1.4",
        letterSpacing: "0.7px",
        margin: "12px 0px",
        padding: "1px 0px"
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
};

export const paraParagraph: ParagraphSchema = {
    id: "text-1",
    name: "paragraph",
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
       backgroundColor: "transparent",
        textColor: "#b300ffff",
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
};

export const captionParagraph: ParagraphSchema = {
    id: "text-4",
    name: "caption",
    displayName: "Caption Block",
    type: "text",
    status: {
        value: "published",
        default: "draft",
        enum: ["published", "draft"]
    },
    props: {
        content: "This is a caption.",
        type: {
            value: "caption",
            default: "paragraph",
            enum: ["heading", "subheading", "paragraph", "caption"]
        },
        alignment: {
            value: "left",
            default: "left",
            enum: ["left", "center", "right", "justify"]
        },
        size: {
            value: "sm",
            default: "md",
            enum: ["sm", "md", "lg", "xl"]
        },
        weight: {
            value: "light",
            default: "normal",
            enum: ["light", "normal", "medium", "semibold", "bold"]
        },
        isTruncated: false,
        maxLines: 1
    },
    style: {
        backgroundColor: "transparent",
        textColor: "#00ff00ff",
        fontFamily: "Inter, sans-serif",
        fontStyle: "italic",
        lineHeight: "1.2",
        letterSpacing: "0.2px",
        margin: "4px 0px",
        padding: "0px"
    },
    config: {
        layout: "inline",
        responsive: true,
        allowRichText: false
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
};
