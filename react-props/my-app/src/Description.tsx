type Props = {
  text: string;
};

export function Description(props: Props) {
  return <p>{props.text}</p>;
}
