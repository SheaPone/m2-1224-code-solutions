import { useState } from 'react';

type Props = {
  items: string[];
};

type CountProps = {
  count: number;
  current: number;
};

type BannerProps = {
  item: string;
};

export function RotatingBanner({ items }: Props) {
  const [index /* setIndex */] = useState(0);
  return (
    <>
      <Banner item={items[index]} />
      <PrevButton />
      <Indicators count={items.length} current={index} />
      <NextButton />
    </>
  );
}

function Banner({ item }: BannerProps) {
  return <div>{item}</div>;
}

function NextButton() {
  return (
    <>
      <button>Next</button>
    </>
  );
}

function PrevButton() {
  return (
    <>
      <button>Prev</button>
    </>
  );
}

function Indicators({ count, current }: CountProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        style={{ backgroundColor: i === current ? 'lightblue' : 'white' }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
