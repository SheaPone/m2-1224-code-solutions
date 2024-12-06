type Props = {
  text: string;
};

export function Header(props: Props) {
  return <h1>{props.text}</h1>;
}
