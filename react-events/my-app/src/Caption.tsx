type Props = {
  caption: string;
  onCaptionClick: () => void;
};
export function Caption({ caption, onCaptionClick }: Props) {
  return <h3 onClick={onCaptionClick}>{caption}</h3>;
}
