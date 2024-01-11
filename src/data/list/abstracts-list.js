import FalseStart from '../../assets/images/abstracts/JasperJohns/FalseStart.jpg';
import Interchange from '../../assets/images/abstracts/WillemDeKooming/Interchange.jpg';
import { artists } from './artists-list';

export const abstractsList = [
  {
    id: 1001,
    name: 'False Start',
    img: FalseStart,
    date: '1959',
    description:
      "False Start is a notable work by Jasper Johns, known for its vibrant splashes of color and abstract representation. It exemplifies the artist's innovative use of Abstract Expressionism and Neo-Dada elements.",
    location: 'Private Collection',
    countryCode: '',
    dimensions: '170.2 cm x 137.2 cm',
    style: 'Abstract Expressionism',
    artistInfo: artists['Jasper Johns'],
    likes: 1,
  },
  {
    id: 1002,
    name: 'Interchange',
    img: Interchange,
    date: '1955',
    description:
      'Interchange is a seminal piece of abstract expressionist art by Willem de Kooning. The painting is celebrated for its energetic brushwork and bold color palette, reflecting the dynamic nature of abstract art in the post-war period.',
    location: 'Private Collection',
    countryCode: '',
    dimensions: '200.7 cm x 175.3 cm',
    style: 'Abstract Expressionism',
    artistInfo: artists['Willem de Kooning'],
    likes: 3,
  },
];
