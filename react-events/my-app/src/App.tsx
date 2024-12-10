import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import { useState } from 'react';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const captions = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const descriptions = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];

export function App() {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index >= srcs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <>
      <Header text="React Image Bank" />
      <Image onImageClick={handleClick} src={srcs[index]} />
      <Caption onCaptionClick={handleClick} caption={captions[index]} />
      <Description
        onDescriptionClick={handleClick}
        text={descriptions[index]}
      />
      <Button label="Click for Next Image" onClick={handleClick} />
    </>
  );
}
