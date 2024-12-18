import { useState } from 'react';

type Props = {
  items: string[];
};

type CountProps = {
  count: number;
  current: number;
  onNumberClick: (index: number) => void;
};

type BannerProps = {
  item: string;
};

type ButtonClick = {
  onClick: () => void;
};

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);

  function handleIndicatorClick(indicatorIndex: number): void {
    setIndex(indicatorIndex);
  }

  function handleNextClick(): void {
    const currentIndex = index;
    setIndex((currentIndex + 1) % items.length);
  }

  function handlePrevClick(): void {
    const currentIndex = index;
    setIndex((currentIndex - 1 + items.length) % items.length);
  }
  return (
    <>
      <Banner item={items[index]} />
      <PrevButton onClick={handlePrevClick} />
      <Indicators
        count={items.length}
        current={index}
        onNumberClick={handleIndicatorClick}
      />
      <NextButton onClick={handleNextClick} />
    </>
  );
}

function Banner({ item }: BannerProps) {
  return <div>{item}</div>;
}

function NextButton({ onClick }: ButtonClick) {
  return (
    <>
      <button onClick={onClick}>Next</button>
    </>
  );
}

function PrevButton({ onClick }: ButtonClick) {
  return (
    <>
      <button onClick={onClick}>Prev</button>
    </>
  );
}

function Indicators({ count, current, onNumberClick }: CountProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        onClick={() => onNumberClick(i)}
        style={{ backgroundColor: i === current ? 'lightblue' : 'white' }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
