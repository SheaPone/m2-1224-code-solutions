import './Image.css';

type Props = {
  src: string;
};

export function Image(props: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={props.src} alt="space-image" />
      </div>
    </div>
  );
}
