import { GoDot, GoDotFill } from 'react-icons/go';

type Props = {
  count: number;
  current: number;
  onDotClick: (index: number) => void;
};

export function Dots({ count, current, onDotClick }: Props) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(
      i === current ? (
        <GoDotFill key={i} onClick={() => onDotClick(i)} />
      ) : (
        <GoDot key={i} onClick={() => onDotClick(i)} />
      )
    );
  }
  return <div>{dots}</div>;
}
