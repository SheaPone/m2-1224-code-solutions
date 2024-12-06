import { useState } from 'react';

type Props = {
  text: string[];
};
export function Description({ text }: Props) {
  const [currentDescription, setCurrentDescription] = useState(0);
  function handleClick() {
    if (currentDescription >= text.length - 1) {
      setCurrentDescription(0);
    } else {
      setCurrentDescription(currentDescription + 1);
    }
  }
  return <p onClick={handleClick}>{text[currentDescription]}</p>;
}
