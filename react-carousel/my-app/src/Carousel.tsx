import { PrevArrow } from './PrevArrow';
import { useState, useEffect } from 'react';
import { NextArrow } from './NextArrow';
import { ImageCard } from './ImageCard';
import { Dots } from './Dots';
import type { Image } from './App';
import './carousel.css';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  function nextClick(): void {
    const currentIndex = index;
    setIndex((currentIndex + 1) % images.length);
  }

  function prevClick(): void {
    const currentIndex = index;
    setIndex((currentIndex - 1 + images.length) % images.length);
  }

  function handleDotClick(dotIndex: number): void {
    setIndex(dotIndex);
  }

  return (
    <>
      <PrevArrow onClick={prevClick} />
      <ImageCard image={images[index]} />
      <NextArrow onClick={nextClick} />
      <Dots onDotClick={handleDotClick} current={index} count={images.length} />
    </>
  );
}
