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
      "False Start, a remarkable creation by Jasper Johns, is renowned for its dynamic and vibrant splashes of color that dance across the canvas. This masterpiece serves as a testament to Johns' groundbreaking innovations in the realms of Abstract Expressionism and Neo-Dada. With a captivating interplay of shapes and colors, 'False Start' challenges conventional artistic boundaries, inviting viewers to explore the depths of abstract representation and emotional expression. Housed in a Private Collection, it remains a symbol of artistic evolution and creativity.",
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
      "Interchange, a seminal masterpiece of abstract expressionist art by the talented Willem de Kooning, is a vibrant celebration of energetic brushwork and a bold color palette. This painting, an embodiment of the dynamic spirit of abstract art in the post-war period, captivates viewers with its vivid and gestural strokes. 'Interchange' invites us into the mesmerizing world of abstract expressionism, where spontaneity and emotion intertwine on canvas. Currently held in a Private Collection, it continues to inspire and resonate with art enthusiasts worldwide.",
    location: 'Private Collection',
    countryCode: '',
    dimensions: '200.7 cm x 175.3 cm',
    style: 'Abstract Expressionism',
    artistInfo: artists['Willem de Kooning'],
    likes: 3,
  },
];
