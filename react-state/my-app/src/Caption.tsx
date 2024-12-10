import { useState } from 'react';

type Props = {
  captions: string[];
};
export function Caption({ captions }: Props) {
  const [currentCaption, setCurrentCaption] = useState(0);
  function handleClick() {
    if (currentCaption >= captions.length - 1) {
      setCurrentCaption(0);
    } else {
      setCurrentCaption(currentCaption + 1);
    }
  }
  return <h3 onClick={handleClick}>{captions[currentCaption]}</h3>;
}
