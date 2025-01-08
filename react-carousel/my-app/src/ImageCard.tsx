import { Image } from './App';

type Props = {
  image: Image;
};

export function ImageCard({ image }: Props) {
  return (
    <>
      <img src={image.src} alt={image.alt} />
    </>
  );
}
