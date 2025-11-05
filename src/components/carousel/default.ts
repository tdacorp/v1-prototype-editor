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


export const userProfileCarousel: CarouselSchema = {
  id: "carousel-user-profile",
  type: "Carousel",
  status: {
    value: "published",
    default: "draft",
    enum: ["published", "draft"],
  },
  variant: {
    value: "user-profile",
    default: "user-profile",
    enum: [
      "hero-slider",
      "image-gallery",
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
        id: "user-1",
        title: "Team Member 1",
        user: {
          avatar: "/user.jpg",
          name: "Aarav Sharma",
          position: "Frontend Developer",
          followers: "12.3K",
          following: "980",
        },
        rating: 4.8,
        description: "Aarav is an expert in React and UI design with 5+ years of experience.",
      },
      {
        id: "user-2",
        title: "Team Member 2",
        user: {
         avatar: "/user.jpg",
          name: "Priya Mehta",
          position: "Backend Engineer",
          followers: "9.5K",
          following: "820",
        },
        rating: 4.9,
        description: "Priya specializes in Node.js and API architecture.",
      },
      {
        id: "user-3",
        title: "Team Member 3",
        user: {
          avatar: "/user.jpg",
          name: "Rohan Singh",
          position: "Full Stack Developer",
          followers: "10.7K",
          following: "700",
        },
        rating: 4.7,
        description: "Rohan loves solving problems with modern web technologies.",
      },
      {
        id: "user-4",
        title: "Team Member 4",
        user: {
         avatar: "/user.jpg",
          name: "Kavya Patel",
          position: "UI/UX Designer",
          followers: "8.1K",
          following: "560",
        },
        rating: 4.6,
        description: "Kavya creates intuitive and engaging interfaces for users.",
      },
      {
        id: "user-5",
        title: "Team Member 5",
        user: {
          avatar: "/user.jpg",
          name: "Vikram Desai",
          position: "DevOps Engineer",
          followers: "7.9K",
          following: "640",
        },
        rating: 4.8,
        description: "Vikram ensures smooth deployment and system reliability.",
      },
    ],
  },
  config: {
    loop: true,
    autoplay: true,
    interval: 3000,
    showArrows: true,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1024, slidesToShow: 2 },
      { breakpoint: 768, slidesToShow: 1 },
    ],
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

export const featureCarousel: CarouselSchema = {
  id: "carousel-feature",
  type: "Carousel",
  status: {
    value: "published",
    default: "draft",
    enum: ["published", "draft"],
  },
  variant: {
    value: "feature-card",
    default: "feature-card",
    enum: [
      "hero-slider",
      "image-gallery",
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
        id: "feature-1",
        title: "Fast Performance",
        subtitle: "Experience lightning-fast load times and smooth navigation.",
        icon: {
          src: "home.svg",
          alt: "Performance Icon",
          size: "large",
        },
      },
      {
        id: "feature-2",
        title: "Secure Platform",
        subtitle: "Your data is encrypted and protected with top-grade security.",
        icon: {
          src: "home.svg",
          alt: "Security Icon",
          size: "large",
        },
      },
      {
        id: "feature-3",
        title: "Easy Customization",
        subtitle: "Easily personalize your dashboard to fit your workflow.",
        icon: {
          src: "home.svg",
          alt: "Customization Icon",
          size: "large",
        },
      },
      {
        id: "feature-4",
        title: "Cloud Integration",
        subtitle: "Seamlessly sync with cloud services and apps.",
        icon: {
          src: "home.svg",
          alt: "Cloud Icon",
          size: "large",
        },
      },
      {
        id: "feature-5",
        title: "24/7 Support",
        subtitle: "We’re always here to help — anytime, anywhere.",
        icon: {
          src: "home.svg",
          alt: "Support Icon",
          size: "large",
        },
      },
    ],
  },
  config: {
    loop: true,
    autoplay: true,
    interval: 3000,
    showArrows: true,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1024, slidesToShow: 2 },
      { breakpoint: 768, slidesToShow: 1 },
    ],
  },
  style: {
    height: "auto",
    width: "100%",
    padding: "32px",
    backgroundColor: "#0D1117",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
  },
  meta: {
    createdAt: "2025-11-04T12:00:00Z",
    updatedAt: "2025-11-04T12:00:00Z",
    author: { id: "author-001" },
  },
};

export const imageGalleryCarousel: CarouselSchema = {
  id: "carousel-image-gallery",
  type: "Carousel",
  status: {
    value: "published",
    default: "draft",
    enum: ["published", "draft"],
  },
  variant: {
    value: "image-gallery",
    default: "image-gallery",
    enum: [
      "hero-slider",
      "image-gallery",
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
        id: "gallery-1",
        title: "Modern Office",
        image: { src: "/gallery/office1.png", alt: "Modern Office" },
      },
      {
        id: "gallery-2",
        title: "Creative Workspace",
        image: { src: "/gallery/office1.png", alt: "Creative Workspace" },
      },
      {
        id: "gallery-3",
        title: "Minimal Desk Setup",
        image: { src: "/gallery/office1.png", alt: "Minimal Desk Setup" },
      },
      {
        id: "gallery-4",
        title: "Team Collaboration",
        image: { src: "/gallery/office1.png", alt: "Team Collaboration" },
      },
      {
        id: "gallery-5",
        title: "Cozy Home Office",
        image: { src: "/gallery/office1.png", alt: "Cozy Home Office" },
      },
    ],
  },
  config: {
    loop: true,
    autoplay: true,
    interval: 3000,
    showArrows: true,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1024, slidesToShow: 2 },
      { breakpoint: 768, slidesToShow: 1 },
    ],
  },
  style: {
    height: "auto",
    width: "100%",
    padding: "32px",
    backgroundColor: "#0D1117",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
  },
  meta: {
    createdAt: "2025-11-04T12:00:00Z",
    updatedAt: "2025-11-04T12:00:00Z",
    author: { id: "author-001" },
  },
};

export const simpleText : CarouselSchema = {
  id: "carousel-simple-text-1",
  type: "Carousel",
  status: {
    value: "published",
    default: "draft",
    enum: ["published", "draft"],
  },
  variant: {
    value: "simple-text",
    default: "simple-text",
    enum: [
      "hero-slider",
      "image-gallery",
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
      { id: "s1", title: "Welcome to our platform!" },
      { id: "s2", title: "Empowering creativity through design." },
      { id: "s3", title: "Build your own custom UI easily." },
      { id: "s4", title: "Schema-driven components for scalability." },
    ],
  },
  config: {
    loop: true,
    autoplay: true,
    interval: 2500,
    showArrows: false,
    showDots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  },
  style: {
    height: "100px",
    width: "100%",
    padding: "24px",
    backgroundColor: "#111827",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
   meta: {
    createdAt: "2025-11-04T12:00:00Z",
    updatedAt: "2025-11-04T12:00:00Z",
    author: { id: "author-001" },
  },
};


export const articleCardCarousel: CarouselSchema = {
  id: "carousel-article-1",
  type: "Carousel",
  status: {
    value: "published",
    default: "draft",
    enum: ["published", "draft"],
  },
  variant: {
    value: "article-card",
    default: "article-card",
    enum: [
      "hero-slider",
      "image-gallery",
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
        id: "a1",
        title: "How AI is Reshaping Design Tools",
        subtitle: "Explore how AI is empowering designers to create faster, smarter, and better.",
        articleCard: {
          image: { src: "/topimage.jpeg", alt: "Tech workspace" },
          title: "How AI is Reshaping Design Tools",
          subtitle: "Explore how AI is empowering designers to create faster, smarter, and better.",
          badge: ["AI", "Design"],
          author: {
            name: "John Doe",
            avatar: "/avatars/img1.webp",
            date: "Nov 4, 2025",
          },
          bookmark: true,
        },
      },
      {
        id: "a2",
        title: "Top 10 React UI Trends for 2025",
        subtitle: "From animations to micro-interactions — see what's shaping the next wave of frontend design.",
        articleCard: {
          image: { src: "/topimage.jpeg", alt: "Frontend development" },
          title: "Top 10 React UI Trends for 2025",
          subtitle: "From animations to micro-interactions — see what's shaping the next wave of frontend design.",
          badge: ["React", "UI"],
          author: {
            name: "Sarah Lee",
            avatar: "/avatars/mg2.webp",
            date: "Nov 2, 2025",
          },
          bookmark: false,
        },
      },
      {
        id: "a3",
        title: "Building Schema-Driven UI Systems",
        subtitle: "Learn how schema-based layouts can revolutionize component reusability.",
        articleCard: {
          image: { src: "/topimage.jpeg", alt: "Design thinking" },
          title: "Building Schema-Driven UI Systems",
          subtitle: "Learn how schema-based layouts can revolutionize component reusability.",
          badge: ["Architecture", "System Design"],
          author: {
            name: "Alex Smith",
            avatar: "/avatars/img3.webp",
            date: "Oct 31, 2025",
          },
          bookmark: true,
        },
      },
       {
        id: "a4",
        title: "Building Schema-Driven UI Systems",
        subtitle: "Learn how schema-based layouts can revolutionize component reusability.",
        articleCard: {
          image: { src: "/topimage.jpeg", alt: "Design thinking" },
          title: "Building Schema-Driven UI Systems",
          subtitle: "Learn how schema-based layouts can revolutionize component reusability.",
          badge: ["Architecture", "System Design"],
          author: {
            name: "Alex Smith",
            avatar: "/avatars/img3.webp",
            date: "Oct 31, 2025",
          },
          bookmark: true,
        },
      },
       {
        id: "a5",
        title: "Top 10 React UI Trends for 2025",
        subtitle: "From animations to micro-interactions — see what's shaping the next wave of frontend design.",
        articleCard: {
          image: { src: "/topimage.jpeg", alt: "Frontend development" },
          title: "Top 10 React UI Trends for 2025",
          subtitle: "From animations to micro-interactions — see what's shaping the next wave of frontend design.",
          badge: ["React", "UI"],
          author: {
            name: "Sarah Lee",
            avatar: "/avatars/mg2.webp",
            date: "Nov 2, 2025",
          },
          bookmark: false,
        },
      },
    ],
  },
  config: {
    loop: true,
    autoplay: true,
    interval: 4000,
    showArrows: true,
    showDots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, slidesToShow: 2 },
      { breakpoint: 768, slidesToShow: 1 },
    ],
  },
  style: {
    height: "auto",
    width: "100%",
    padding: "20px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
  },
  meta: {
    createdAt: "2025-11-04T12:00:00Z",
    updatedAt: "2025-11-04T12:00:00Z",
    author: { id: "author-001" },
  },
};






