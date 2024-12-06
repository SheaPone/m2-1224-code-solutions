type Props = {
  text: string;
};

export function Caption(props: Props) {
  return <h3>{props.text}</h3>;
}
