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

export const brandlogo: CarouselSchema = {
  id: "carousel-brand-logo",
  type: "Carousel",
  status: {
    value: "draft",
    default: "draft",
    enum: ["published", "draft"]
  },
  variant: {
    value: "brand-logo",
    default: "brand-logo",
    enum: [
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
  props: {
    slides: [
      {
        id: "slide-1",
        title: "Brand One",
        subtitle: "Leading Tech Partner",
        description: "Innovating future technologies.",
        image: { src: "/logo1.png", alt: "Brand 1", aspectRatio: "1:1" },
        overlayPosition: {
          value: "center",
          default: "center",
          enum: [
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
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["Trusted"],
        tags: ["Technology"],
        button: { label: "Visit", action: "navigate", to: "/brand1" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand1/about" }
      },
      {
        id: "slide-2",
        title: "Brand Two",
        subtitle: "Your Growth Ally",
        description: "Empowering global business expansion.",
        image: { src: "/logo2.webp", alt: "Brand 2", aspectRatio: "1:1" },
        overlayPosition: { value: "center", default: "center", enum: [] },
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["Top Rated"],
        tags: ["Finance"],
        button: { label: "Visit", action: "navigate", to: "/brand2" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand2/about" }
      },
      {
        id: "slide-3",
        title: "Brand Three",
        subtitle: "Digital Experience",
        description: "Delivering outstanding UX solutions.",
        image: { src: "/logo3.webp", alt: "Brand 3", aspectRatio: "1:1" },
        overlayPosition: { value: "center", default: "center", enum: [] },
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["Innovator"],
        tags: ["Design"],
        button: { label: "Visit", action: "navigate", to: "/brand3" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand3/about" }
      },
      {
        id: "slide-4",
        title: "Brand Four",
        subtitle: "Cloud Smart",
        description: "Optimizing the cloud infrastructure.",
        image: { src: "/logo4.webp", alt: "Brand 4", aspectRatio: "1:1" },
        overlayPosition: { value: "center", default: "center", enum: [] },
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["Certified"],
        tags: ["Cloud"],
        button: { label: "Visit", action: "navigate", to: "/brand4" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand4/about" }
      },
      {
        id: "slide-5",
        title: "Brand Five",
        subtitle: "AI Driven",
        description: "Revolutionizing industries with AI.",
        image: { src: "/logo5.webp", alt: "Brand 5", aspectRatio: "1:1" },
        overlayPosition: { value: "center", default: "center", enum: [] },
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["AI Expert"],
        tags: ["Artificial Intelligence"],
        button: { label: "Visit", action: "navigate", to: "/brand5" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand5/about" }
      },
      {
        id: "slide-6",
        title: "Brand Six",
        subtitle: "Eco Solutions",
        description: "Sustainability powered by innovation.",
        image: { src: "/logo6.webp", alt: "Brand 6", aspectRatio: "1:1" },
        overlayPosition: { value: "center", default: "center", enum: [] },
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["Eco"],
        tags: ["Environment"],
        button: { label: "Visit", action: "navigate", to: "/brand6" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand6/about" }
      },
      {
        id: "slide-7",
        title: "Brand Seven",
        subtitle: "Smart Mobility",
        description: "Innovating smart automotive solutions.",
        image: { src: "/logo7.webp", alt: "Brand 7", aspectRatio: "1:1" },
        overlayPosition: { value: "center", default: "center", enum: [] },
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["Global"],
        tags: ["Automotive"],
        button: { label: "Visit", action: "navigate", to: "/brand7" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand7/about" }
      },
      {
        id: "slide-8",
        title: "Brand Eight",
        subtitle: "Health First",
        description: "Bringing innovation to healthcare.",
        image: { src: "/logo8.webp", alt: "Brand 8", aspectRatio: "1:1" },
        overlayPosition: { value: "center", default: "center", enum: [] },
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["Awarded"],
        tags: ["Healthcare"],
        button: { label: "Visit", action: "navigate", to: "/brand8" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand8/about" }
      },
      {
        id: "slide-9",
        title: "Brand Nine",
        subtitle: "Data Secure",
        description: "Securing your digital footprint.",
        image: { src: "/logo9.webp", alt: "Brand 9", aspectRatio: "1:1" },
        overlayPosition: { value: "center", default: "center", enum: [] },
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["Secure"],
        tags: ["Cybersecurity"],
        button: { label: "Visit", action: "navigate", to: "/brand9" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand9/about" }
      },
      {
        id: "slide-10",
        title: "Brand Ten",
        subtitle: "Global Impact",
        description: "Driving positive change worldwide.",
        image: { src: "/logo10.webp", alt: "Brand 10", aspectRatio: "1:1" },
        overlayPosition: { value: "center", default: "center", enum: [] },
        alignment: { value: "center", enum: ["left", "center", "right"] },
        badges: ["Global"],
        tags: ["Corporate"],
        button: { label: "Visit", action: "navigate", to: "/brand10" },
        secondaryButton: { label: "Learn More", action: "navigate", to: "/brand10/about" }
      }
    ]
  },
  config: {
    loop: true,
    autoplay: true,
    interval: 3000,
    showArrows: false,
    showDots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, slidesToShow: 3 },
      { breakpoint: 768, slidesToShow: 2 }
    ]
  },
  style: {
    height: "150px",
    width: "100%",
    padding: "16px 0",
    backgroundColor: "none",
    borderRadius: "0px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
  },
  meta: {
    createdAt: "2025-10-10T11:00:00Z",
    updatedAt: "2025-10-10T12:30:00Z",
    lastModified: "2025-10-15T09:45:00Z",
    author: { id: "author-001" }
  }
};


export const testimonial: CarouselSchema = {
  id: "carousel-testimonial",
  type: "Carousel",
  status: {
    value: "published",
    default: "draft",
    enum: ["published", "draft"],
  },
  variant: {
    value: "testimonial",
    default: "testimonial",
    enum: [
      "hero-slider",
      "image-gallery",
      "image-card",
      "feature-card",
      "user-profile",
      "article-card",
      "brand-logo",
      "testimonial",
      "property-card",
      "simple-text",
    ],
  },
  props: {
    slides: [
      {
        id: "slide-1",
        title: "John Doe",
        subtitle: "CEO, TechCorp",
        description: "Gofix transformed our service delivery process. Fast, reliable, and professional!",
        image: {
          src: "/avatars/img1.webp",
          alt: "John Doe avatar",
        },
        rating: 5,
        alignment: { value: "center", enum: ["left", "center", "right"] },
      },
      {
        id: "slide-2",
        title: "Sarah Lee",
        subtitle: "Marketing Head, BrightHomes",
        description: "Their app experience is seamless. Booked a service in seconds!",
        image: {
          src: "/avatars/mg2.webp",
          alt: "Sarah Lee avatar",
        },
        rating: 4,
        alignment: { value: "center", enum: ["left", "center", "right"] },
      },
      {
        id: "slide-3",
        title: "Aman Sharma",
        subtitle: "Freelancer",
        description: "Excellent support and great service professionals. Highly recommended!",
        image: {
          src: "/avatars/img3.webp",
          alt: "Aman Sharma avatar",
        },
        rating: 5,
        alignment: { value: "center", enum: ["left", "center", "right"] },
      },
      {
        id: "slide-4",
        title: "mohit Sharma",
        subtitle: "freelancer",
        description: "Excellent support and great service professionals. Highly recommended!",
        image: {
          src: "/avatars/img4.webp",
          alt: "Aman Sharma avatar",
        },
        rating: 5,
        alignment: { value: "center", enum: ["left", "center", "right"] },
      },
      {
        id: "slide-5",
        title: "ksuh Sharma",
        subtitle: "System Enginner",
        description: "Excellent support and great service professionals. Highly recommended!",
        image: {
          src: "/avatars/img5.webp",
          alt: "Aman Sharma avatar",
        },
        rating: 5,
        alignment: { value: "center", enum: ["left", "center", "right"] },
      },
    ],
  },
  config: {
    loop: true,
    autoplay: true,
    interval: 4000,
    showArrows: true,
    showDots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  },
  style: {
    height: "auto",
    width: "100%",
    padding: "32px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },
  meta: {
    createdAt: "2025-11-04T12:00:00Z",
    updatedAt: "2025-11-04T12:00:00Z",
    author: { id: "author-001" },
  },
};
