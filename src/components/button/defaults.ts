import { ButtonSchema } from "./type";

export const defaultButton: ButtonSchema = {
    "id": "btn-1",
    "type": "Button",
    "status": {
        "value": "draft",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "Click Me",  
        "url": "/",
        "variant": {
            "value": "primary",
            "default": "primary",
            "variant": ["primary"]
        },
        "size": {
            "value": "md",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false
    },
    "style": {
        "backgroundColor": "#0070f3",
        "textColor": "#ffffff",
        "borderRadius": "8px",
        "padding": "12px 24px",
        "hoverColor": "#0056c1",
        "shadow": "small"
    },
    "config": {
        "layout": "inline",
        "responsive": true
    },
    "meta": {
        "createdAt": "2025-10-10T11:00:00Z",
        "updatedAt": "2025-10-10T12:30:00Z",
        "lastModified": "2025-10-10T12:30:00Z",
        "author": {
            "id": "user-001",
            "name": "John Doe"
        }
    }
}
