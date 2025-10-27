import { CardSchema } from "./type"

export const imagetop : CardSchema = {
    "id": "card-1",
    "type": "Card",
    variant: {
        value: "image-top",
        default: "image-top",
        variant: ["image-top"],
    },
    "status": {
        "value": "draft",
        "default": "draft",
        "enum": [
            "published",
            "draft"
        ]
    },
    "props": {
        "title": "Empowering Digital Solutions",
        "subtitle": "Building the future of web development services that help businesses go online with speed and scalability",
        "description": "We provide modern web development services that help businesses go online with speed and scalability.",
        "image": {
            "src": "https://www.branddiaries.in/wp-content/uploads/2024/08/Digital-Empowerment.webp",
            "alt": "Developer working on modern web solutions",
            aspectRatio: "16:9",
            position: {
                vertical: {
                    value: "top",
                    default: "top",
                    enum: ["top", "center", "bottom"],
                },
                horizontal: {
                    value: "center",
                    default: "center",
                    enum: ["left", "center", "right"],
                },
            },
        },
        tags: ["web", "react", "nextjs"],
        "button": {
            "label": "Learn More",
            "action": "navigate",
            "to": "/about"
        }
    },
    "config": {
        "layout": "standard",
        "orientation": "vertical",
        "responsive": true,
        "clickable": true
    },
    "style": {
        "variant": "outlined",
        "backgroundColor": "#ffffff",
        "textColor": "#000000",
        "borderRadius": "12px",
        "shadow": "medium",
        "padding": "16px",
        "hoverEffect": "lift"
    },
    "meta": {
        "createdAt": "2025-10-10T11:00:00Z",
        "updatedAt": "2025-10-10T12:30:00Z",
        "lastModified": "2025-10-15T09:45:00Z",
        "author": {
            "id": "author-001"
        }
    }
}