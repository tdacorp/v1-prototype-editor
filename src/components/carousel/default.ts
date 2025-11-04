import { CarouselSchema } from "./type";

export const heroslider: CarouselSchema = {
  "id": "carousel-1",
  "type": "Carousel",
  "status": {
    "value": "draft",
    "default": "draft",
    "enum": ["published", "draft"]
  },
  "variant": {
    "value": "hero-slider",
    "default": "hero-slider",
    "enum": [
      "hero-slider",
      "image-gallery",
      "image-card",
      "feature-card",
      "user-profile",
      "article-card",
      "brand-logo",
      "testimonial",
      "property-card",
      "simple-text"
    ]
  },
  "props": {
    "slides": [
      {
        "id": "slide-1",
        "title": "Welcome to Tda Editor",
        "subtitle": "Edit your page here",
        "description": "Add description",
        "image": {
          "src": "/herobg.jpeg",
          "alt": "hero bg image",
          "aspectRatio": "16:9"
        },
        "overlayPosition": {
          "value": "center",
          "default": "center",
          "enum": [
            "top-left",
            "top-center",
            "top-right",
            "center-left",
            "center",
            "center-right",
            "bottom-left",
            "bottom-center",
            "bottom-right"
          ]
        },
        "alignment": {
          "value": "center",
          "enum": ["left", "center", "right"]
        },
        "badges": ["New"],
        "tags": ["Technology"],
        "button": {
          "label": "Editor",
          "action": "navigate",
          "to": "/about"
        },
        "secondaryButton": {
          "label": "Read More",
          "action": "navigate",
          "to": "/blog"
        }
      },
      {
        "id": "slide-2",
        "title": "Discover TDA Studio Features",
        "subtitle": "Customize your workspace",
        "description": "Add description",
        "image": {
          "src": "/slide2.jpg",
          "alt": "hero bg image",
          "aspectRatio": "16:9"
        },
        "overlayPosition": {
          "value": "center",
          "default": "center",
          "enum": [
            "top-left",
            "top-center",
            "top-right",
            "center-left",
            "center",
            "center-right",
            "bottom-left",
            "bottom-center",
            "bottom-right"
          ]
        },
        "alignment": {
          "value": "center",
          "enum": ["left", "center", "right"]
        },
        "badges": ["New"],
        "tags": ["Technology"],
        "button": {
          "label": "Learn More",
          "action": "navigate",
          "to": "/about"
        },
        "secondaryButton": {
          "label": "Stduio",
          "action": "navigate",
          "to": "/blog"
        }
      },
       {
        "id": "slide-3",
        "title": "Discover TDA Studio Features",
        "subtitle": "Customize your workspace",
        "description": "Add description",
        "image": {
          "src": "/slide4.avif",
          "alt": "hero bg image",
          "aspectRatio": "16:9"
        },
        "overlayPosition": {
          "value": "center",
          "default": "center",
          "enum": [
            "top-left",
            "top-center",
            "top-right",
            "center-left",
            "center",
            "center-right",
            "bottom-left",
            "bottom-center",
            "bottom-right"
          ]
        },
        "alignment": {
          "value": "center",
          "enum": ["left", "center", "right"]
        },
        "badges": ["New"],
        "tags": ["Technology"],
        "button": {
          "label": "Learn More",
          "action": "navigate",
          "to": "/about"
        },
        "secondaryButton": {
          "label": "Read More",
          "action": "navigate",
          "to": "/blog"
        }
      },
    ]
  },
  "config": {
    "loop": true,
    "autoplay": true,
    "interval": 5000,
    "showArrows": true,
    "showDots": true,
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "pauseOnHover": true,
    "responsive": [
      { "breakpoint": 1024, "slidesToShow": 2 },
      { "breakpoint": 768, "slidesToShow": 1 }
    ]
  },
  "style": {
    "height": "350px",
    "width": "100%",
    "padding": "16px",
    "backgroundColor": "#f7f8fa",
    "borderRadius": "12px",
    "boxShadow": "0 4px 12px rgba(0,0,0,0.1)"
  },
  "meta": {
    "createdAt": "2025-10-10T11:00:00Z",
    "updatedAt": "2025-10-10T12:30:00Z",
    "lastModified": "2025-10-15T09:45:00Z",
    "author": { "id": "author-001" }
  }
}
