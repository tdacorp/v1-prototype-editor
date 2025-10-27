import { ButtonSchema } from "./type";

export const defaultButton: ButtonSchema = {
    "id": "btn-1",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "Discover AI",
        "url": "/",
        "variant": {
            "value": "rounded-full",
            "default": "rounded-full",
            "variant": ["rounded-full"]
        },
        "size": {
            "value": "lg",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false
    },
    "style": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "borderRadius": "9999px",
        "padding": "14px 40px",
        "hoverColor": "#F3F4F6",
        "shadow": "medium"
    },
    "config": {
        "layout": "inline",
        "responsive": true
    },
    "meta": {
        "createdAt": "2025-10-25T19:46:00Z",
        "updatedAt": "2025-10-25T19:46:00Z",
        "lastModified": "2025-10-25T19:46:00Z",
        "author": {
            "id": "user-001",
            "name": "John Doe"
        }
    }
};

export const outlinedButton: ButtonSchema = {
    "id": "btn-2",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "Learn More",
        "url": "/learn",
        "variant": {
            "value": "outlined",
            "default": "outlined",
            "variant": ["outlined"]
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
        "backgroundColor": "transparent",
        "textColor": "#FFFFFF",
        "borderRadius": "9999px",
        "padding": "12px 32px",
        "hoverColor": "rgba(255, 255, 255, 0.1)",
        "shadow": "none"
    },
    "config": {
        "layout": "inline",
        "responsive": true
    },
    "meta": {
        "createdAt": "2025-10-25T19:46:00Z",
        "updatedAt": "2025-10-25T19:46:00Z",
        "lastModified": "2025-10-25T19:46:00Z",
        "author": {
            "id": "user-002",
            "name": "Jane Smith"
        }
    }
};

export const gradientButton: ButtonSchema = {
    "id": "btn-3",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "Get Started",
        "url": "/start",
        "variant": {
            "value": "gradient",
            "default": "gradient",
            "variant": ["gradient"]
        },
        "size": {
            "value": "lg",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false
    },
    "style": {
        "backgroundColor": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "textColor": "#FFFFFF",
        "borderRadius": "12px",
        "padding": "16px 48px",
        "hoverColor": "linear-gradient(135deg, #5568d3 0%, #6a4296 100%)",
        "shadow": "large"
    },
    "config": {
        "layout": "inline",
        "responsive": true
    },
    "meta": {
        "createdAt": "2025-10-25T19:46:00Z",
        "updatedAt": "2025-10-25T19:46:00Z",
        "lastModified": "2025-10-25T19:46:00Z",
        "author": {
            "id": "user-003",
            "name": "Mike Johnson"
        }
    }
};

export const iconLeftButton: ButtonSchema = {
    "id": "btn-4",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "Previous",
        "url": "/previous",
        "variant": {
            "value": "icon-left",
            "default": "icon-left",
            "variant": ["icon-left"]
        },
        "size": {
            "value": "md",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false,
        "icon": "←"  
    },
    "style": {
        "backgroundColor": "#3B82F6",
        "textColor": "#FFFFFF",
        "borderRadius": "8px",
        "padding": "10px 24px",
        "hoverColor": "#2563EB",
        "shadow": "small"
    },
    "config": {
        "layout": "inline",
        "responsive": true
    },
    "meta": {
        "createdAt": "2025-10-25T19:46:00Z",
        "updatedAt": "2025-10-25T19:46:00Z",
        "lastModified": "2025-10-25T19:46:00Z",
        "author": {
            "id": "user-004",
            "name": "Sarah Williams"
        }
    }
};


export const iconRightButton: ButtonSchema = {
    "id": "btn-5",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "Next Step",
        "url": "/next",
        "variant": {
            "value": "icon-right",
            "default": "icon-right",
            "variant": ["icon-right"]
        },
        "size": {
            "value": "md",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false,
        "icon": "→" 
    },
    "style": {
        "backgroundColor": "#10B981",
        "textColor": "#FFFFFF",
        "borderRadius": "8px",
        "padding": "10px 24px",
        "hoverColor": "#059669",
        "shadow": "small"
    },
    "config": {
        "layout": "inline",
        "responsive": true
    },
    "meta": {
        "createdAt": "2025-10-25T19:46:00Z",
        "updatedAt": "2025-10-25T19:46:00Z",
        "lastModified": "2025-10-25T19:46:00Z",
        "author": {
            "id": "user-005",
            "name": "David Brown"
        }
    }
};
