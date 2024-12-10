type Props = {
  text: string;
  onDescriptionClick: () => void;
};
export function Description({ text, onDescriptionClick }: Props) {
  return <p onClick={onDescriptionClick}>{text}</p>;
}
