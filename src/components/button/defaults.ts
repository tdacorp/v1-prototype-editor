import { ButtonSchema } from "@/types/type";

export const defaultButton: ButtonSchema = {
    "id": "btn-1",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "Defalut",
        "href": "/",
        "variant": {
            "value": "default",
            "default": "default",
            "variant": ["default"]
        },
        "size": {
            "value": "lg",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false,
        "target": "_blank",
    },
    style: {
    backgroundColor: "#18181B",
    textColor: "#FAFAFA",      
    borderRadius: "9999px",
    padding: "14px 40px",
    hoverColor: "#27272A", 
    shadow: "medium",
    border: "1px solid #5969a0ff"
  },
    "config": {
        "layout": "inline",
        "responsive": true,
        "fullWidth": false,
        "showIcon": true

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
        "label": "outline",
        "href": "/learn",
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
        "isDisabled": false,
         "target": "_blank",
    },
   style: {
    backgroundColor: "#171717ff",
    textColor: "#ffffffff",
    borderRadius: "9999px",
    padding: "12px 32px",
    hoverColor: "#FAFAFA",      
    shadow: "none",
    border: "1px solid #ffffffff"
  },
    "config": {
        "layout": "inline",
        "responsive": true,
        "fullWidth": false,
        "showIcon": true
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

export const secondaryButton: ButtonSchema = {
    "id": "btn-3",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "secondary",
        "href": "/start",
        "variant": {
            "value": "secondary",
            "default": "secondary",
            "variant": ["secondary"]
        },
        "size": {
            "value": "lg",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false,
         "target": "_blank",
    },
    style: {
    backgroundColor: "#F3F4F6",
    textColor: "#18181B",
    borderRadius: "12px",
    padding: "16px 48px",
    hoverColor: "#E5E7EB", 
    shadow: "large"
  },
    "config": {
        "layout": "inline",
        "responsive": true,
        "fullWidth": false,
        "showIcon": true
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
export const primaryButton: ButtonSchema = {
    "id": "btn-3",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "primary",
        "href": "/start",
        "variant": {
            "value": "secondary",
            "default": "secondary",
            "variant": ["secondary"]
        },
        "size": {
            "value": "lg",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false,
         "target": "_blank",
    },
    style: {
    backgroundColor: "#f3f4f6",
    textColor: "#18181B",
    borderRadius: "12px",
    padding: "16px 48px",
    hoverColor: "#E5E7EB", 
    shadow: "large",
    border:"2px  #000000"
  },
    "config": {
        "layout": "inline",
        "responsive": true,
        "fullWidth": false,
        "showIcon": true
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

export const ghostButton: ButtonSchema = {
    "id": "btn-4",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "ghost",
        "href": "/previous",
        "variant": {
            "value": "ghost",
            "default": "ghost",
            "variant": ["ghost"]
        },
        "size": {
            "value": "md",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false,
         "target": "_blank",
    },
    style: {
    backgroundColor: "transparent",
    textColor: "#4b3838ff",
    borderRadius: "8px",
    padding: "10px 24px",
    hoverColor: "#F3F4F6", 
    shadow: "small",
     border: "1px solid #ffffffff"
  },
    "config": {
        "layout": "inline",
        "responsive": true,
        "fullWidth": false,
        "showIcon": true
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

export const dangerbutton: ButtonSchema = {
    "id": "btn-4",
    "type": "Button",
    "status": {
        "value": "published",
        "default": "draft",
        "enum": ["published", "draft"]
    },
    "props": {
        "label": "danger",
        "href": "/previous",
        "variant": {
            "value": "ghost",
            "default": "ghost",
            "variant": ["ghost"]
        },
        "size": {
            "value": "md",
            "default": "md",
            "enum": ["sm", "md", "lg"]
        },
        "alignment": "center",
        "isDisabled": false,
         "target": "_blank",
    },
    style: {
    backgroundColor: "#ff0000",
    textColor: "#ffffffff",
    borderRadius: "8px",
    padding: "10px 24px",
    hoverColor: "#ab1710ff", 
    shadow: "small"
  },
    "config": {
        "layout": "inline",
        "responsive": true,
        "fullWidth": false,
        "showIcon": true
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
