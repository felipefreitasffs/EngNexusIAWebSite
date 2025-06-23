"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState, forwardRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  initialClassName?: string;
  animateClassName?: string;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
  delay?: string; // e.g., 'delay-100', 'delay-200'
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(({
  children,
  className,
  initialClassName = "opacity-0 translate-y-10",
  animateClassName = "opacity-100 translate-y-0",
  threshold = 0.1,
  as: Tag = 'div',
  delay = "",
}, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLElement>(null);

  // Combina o ref interno (para o observer) e o ref encaminhado (para o pai)
  const setRefs = (node: HTMLElement | null) => {
    (nodeRef as React.MutableRefObject<HTMLElement | null>).current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLElement | null>).current = node;
    }
  };

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

    const currentRef = nodeRef.current;
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
      ref={setRefs}
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
});

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
