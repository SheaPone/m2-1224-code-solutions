import { IoIosArrowBack } from 'react-icons/io';

type Props = {
  onClick: () => void;
};

export function PrevArrow({ onClick }: Props) {
  return (
    <>
      <IoIosArrowBack size={50} onClick={onClick} className="arrow" />
    </>
  );
}
