import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import { useState } from 'react';
import './App.css';

const imageInfo = [
  {
    src: '/starry-sky.jpeg',
    caption: 'A Beautiful Image of Space',
    description: 'This is a wonderful sky full of stars!',
  },
  {
    src: '/cool-kitty.jpg',
    caption: 'A Cool Cat',
    description: 'This is a picture of a very cool cat!',
  },
  {
    src: '/cool-car.jpg',
    caption: 'A Cool Car',
    description: 'This is a picture of a very cool car!',
  },
];

export function App() {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index >= imageInfo.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={imageInfo[index].src} />
      <Caption caption={imageInfo[index].caption} />
      <Description text={imageInfo[index].description} />
      <Button label="Click for Next Image" onButtonClick={handleClick} />
    </>
  );
}
