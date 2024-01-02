import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: ReactNode;
}

export default function Magnetic({ children }: MagneticProps): JSX.Element {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    if (magnetic.current) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        console.log(clientX, clientY);
        const { height, width, left, top } =
          magnetic.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.1);
        yTo(y * 0.1);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      magnetic.current.addEventListener("mousemove", handleMouseMove);
      magnetic.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        // Cleanup: Remove event listeners when the component unmounts
        magnetic.current!.removeEventListener("mousemove", handleMouseMove);
        magnetic.current!.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [children]);

  return (
    <div ref={magnetic}>
      {React.cloneElement(children as React.ReactElement, { ref: magnetic })}
    </div>
  );
}
