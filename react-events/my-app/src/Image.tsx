import './Image.css';

type Props = {
  src: string;
  onImageClick: () => void;
};

export function Image({ src, onImageClick }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={onImageClick}
          src={src}
          className="image-fill"
          alt="space-image"
        />
      </div>
    </div>
  );
}
