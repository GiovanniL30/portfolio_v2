import { Children, useRef, useEffect, type ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  slowOnHover?: boolean;
  gap?: number;
};

const Carousel = ({
  children,
  speed = 1,
  direction = "left",
  slowOnHover = true,
  gap = 24,
}: CarouselProps) => {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const currentSpeedRef = useRef(speed);
  const targetSpeedRef = useRef(speed);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);
  const directionRef = useRef(direction);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    targetSpeedRef.current = speed;
    currentSpeedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    const step = (time: number) => {
      if (!trackRef.current) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      if (lastTimeRef.current) {
        const delta = time - lastTimeRef.current;

        currentSpeedRef.current +=
          (targetSpeedRef.current - currentSpeedRef.current) * 0.05;

        const pxPerMs = (currentSpeedRef.current * 60) / 1000;
        const dir = directionRef.current === "left" ? -1 : 1;
        offsetRef.current += pxPerMs * delta * dir;

        const halfWidth = trackRef.current.scrollWidth / 2;
        if (
          directionRef.current === "left" &&
          offsetRef.current <= -halfWidth
        ) {
          offsetRef.current += halfWidth;
        } else if (directionRef.current === "right" && offsetRef.current >= 0) {
          offsetRef.current -= halfWidth;
        }

        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseEnter = () => {
    if (slowOnHover) targetSpeedRef.current = speed * 0.2;
  };

  const handleMouseLeave = () => {
    if (slowOnHover) targetSpeedRef.current = speed;
  };

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ gap: `${gap}px` }}
      >
        {items.map((child, i) => (
          <div key={i} className="shrink-0">
            {child}
          </div>
        ))}
        {items.map((child, i) => (
          <div key={`dup-${i}`} className="shrink-0" aria-hidden>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
