import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, keep it visible
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, []);

  const getTransformClasses = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-12';
      case 'down':
        return '-translate-y-12';
      case 'left':
        return 'translate-x-12';
      case 'right':
        return '-translate-x-12';
      default:
        return 'translate-y-8';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0'
          : `opacity-0 ${getTransformClasses()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
