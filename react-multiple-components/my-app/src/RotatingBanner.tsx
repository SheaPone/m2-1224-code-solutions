type Props = {
  items: string[];
};

type CountProps = {
  count: number;
};

type BannerProps = {
  item: string;
};

export function RotatingBanner({ items }: Props) {
  return (
    <>
      <Banner item={items[1]} />
      <PrevButton />
      <Indicators count={items.length} />
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

function Indicators({ count }: CountProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<button>{i}</button>);
  }
  return <div>{buttons}</div>;
}
