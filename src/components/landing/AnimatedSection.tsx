"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  initialClassName?: string;
  animateClassName?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
  delay?: string; // e.g., 'delay-100', 'delay-200'
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  initialClassName = "opacity-0 translate-y-10",
  animateClassName = "opacity-100 translate-y-0",
  threshold = 0.1,
  as: Tag = 'div',
  delay = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <Tag
      ref={sectionRef}
      className={cn(
        "transition-all duration-700 ease-out",
        delay,
        isVisible ? animateClassName : initialClassName,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
