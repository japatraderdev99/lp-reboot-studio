import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  embedCode: string;
  className?: string;
}

const LazyVideo = ({ embedCode, className = "" }: LazyVideoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      ) : (
        <div className="w-full aspect-[9/16] bg-muted/30 rounded-xl animate-pulse flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Carregando vídeo...</span>
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
