import './Image.css';
import { useState } from 'react';

type Props = {
  srcs: string[];
};
export function Image({ srcs }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  function handleClick() {
    if (currentImage >= srcs.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={srcs[currentImage]}
          alt="space-image"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
