import { IoIosArrowForward } from 'react-icons/io';

type Props = {
  onClick: () => void;
};

export function NextArrow({ onClick }: Props) {
  return (
    <>
      <IoIosArrowForward size={50} onClick={onClick} className="arrow" />
    </>
  );
}
