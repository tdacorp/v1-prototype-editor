import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { heroslider } from "../default";

export const HeroSliders = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        borderRadius: heroslider.style?.borderRadius,
        boxShadow: heroslider.style?.boxShadow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Carousel
        opts={{
          loop: heroslider.config.loop,
          align: "center",
        }}
        plugins={[
          Autoplay({ delay: heroslider.config.interval }),
        ]}
        style={{ width: "80vw" }}
      >
        <CarouselContent>
          {heroslider.props.slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              style={{
                position: "relative",
                width: "80vw",
                height: "80vh",
                margin: "0 2vw",
                borderRadius: heroslider.style?.borderRadius,
                overflow: "hidden",
                boxShadow: heroslider.style?.boxShadow,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {slide.image && (
                <img
                  src={slide.image.src}
                  alt={slide.image.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "inherit",
                  }}
                />
              )}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#24292F", // dark text
                  textAlign: slide.alignment?.value || "center",
                  zIndex: 2,
                  padding: "8px 0",
                  maxWidth: "60vw",
                  boxShadow: "none",
                  background: "none", // Glassy effect removed
                }}
              >
                <h2 style={{
                  marginBottom: 12,
                  fontWeight: 700,
                  fontSize: "2.4rem",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}>
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <h4 style={{
                    fontWeight: 400,
                    fontSize: "1.25rem",
                    marginBottom: 18,
                    color: "#374151",
                  }}>
                    {slide.subtitle}
                  </h4>
                )}
                {slide.button && (
                  <a
                    href={slide.button.to}
                    style={{
                      display: "inline-block",
                      padding: "12px 28px",
                      background: "#fff",
                      color: "#3641d9",
                      borderRadius: "10px",
                      marginTop: "6px",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      textDecoration: "none",
                      border: "1.5px solid #e1e4ea"
                    }}
                  >
                    {slide.button.label}
                  </a>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
