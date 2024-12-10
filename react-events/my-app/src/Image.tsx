import './Image.css';

type Props = {
  src: string;
};

export function Image({ src }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img src={src} className="image-fill" alt="space-image" />
      </div>
    </div>
  );
}
