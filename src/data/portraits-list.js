import MonaLisa from '../assets/portraits/LeonardoDaVinci/MonaLisa.jpg';
import WhistlersMother from '../assets/portraits/JamesAbbott/WhistlersMother.jpg';
import GirlWithAPearlEarring from '../assets/portraits/JohannesVermeer/GirlWithAPearlEarring.jpg';
import { artists } from './artists-list.js';

export const portraitsList = [
  {
    name: 'Mona Lisa',
    img: MonaLisa,
    artist: 'Leonardo Da Vinci',
    date: '1503 - 1506',
    description:
      'The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".',
    location: 'Louvre Museum, Paris, France',
    dimensions: '77 cm x 53 cm',
    style: 'Renaissance',
    artistInfo: artists['Leonardo Da Vinci'] || {},
  },
  {
    name: "Whistler's Mother",
    img: WhistlersMother,
    artist: 'James Abbott McNeill Whistler',
    date: '1871',
    description:
      "Arrangement in Grey and Black No.1, best known under its colloquial name Whistler's Mother, is a painting in oils on canvas created by the American-born painter James McNeill Whistler in 1871.",
    location: "Musée d'Orsay, Paris, France",
    dimensions: '144.3 cm x 162.5 cm',
    style: 'Realism',
    artistInfo: artists['James Abbott McNeill Whistler'] || {},
  },
  {
    name: 'Girl with a Pearl Earring',
    img: GirlWithAPearlEarring,
    artist: 'Johannes Vermeer',
    date: '1665',
    description: '',
    location: 'Mauritshuis, The Hague, Netherlands',
    dimensions: '44.5 cm x 39 cm',
    style: 'Baroque',
    artistInfo: artists['Johannes Vermeer'] || {},
  },
];
