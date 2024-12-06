import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/Nasa.jpeg', '/Seyfert.jpeg'];
const captions = [
  'A Beautiful Image of Space',
  'A Beautiful Galaxy',
  'A Beautiful Seyfert Galaxy',
];
const descriptions = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus,
  commodi placeat eveniet, quam voluptates facere et magnam architecto quaerat velit voluptas
  rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat,
  error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit aspernatur
  labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum,
  dicta sunt laborum similique repellat?`,
  `A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity. `,
  `Seyfert galaxies are one of the two largest groups of active galaxies, along with quasar host galaxies. They have quasar-like nuclei (very luminous sources of electromagnetic radiation that are outside of our own galaxy) with very high surface brightnesses whose spectra reveal strong, high-ionisation emission lines,[1] but unlike quasars, their host galaxies are clearly detectable.`,
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description text={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
