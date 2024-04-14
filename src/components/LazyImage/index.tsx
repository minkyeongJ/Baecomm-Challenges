import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => (props.height ? "cover" : "auto")};
`;
const ImagePlaceHolder = styled(Image)`
  background-color: lightgrey;
`;

interface Props {
  src: string;
  alt: string;
  height?: string;
}

const LazyImage = ({ src, alt, height }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (imgRef.current !== null && entry.isIntersecting) {
            imgRef.current.src = src;
            imgRef.current.onload = () => {
              setIsLoaded(true);
              observer.disconnect();
            };
          }
        });
      },
      {
        rootMargin: "100px",
      }
    );

    if (imgRef?.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return isLoaded ? (
    <Image alt={alt} id={src} src={src} height={`${height}`} />
  ) : (
    <ImagePlaceHolder ref={imgRef} id={src} alt={alt} />
  );
};

export default LazyImage;
