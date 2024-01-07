import JohannesVermeer from '../assets/images/artists/JohannesVermeer.jpeg';
import MiriamOmar from '../assets/images/artists/MiriamOmar.png';
import ThomasGainsborough from '../assets/images/artists/ThomasGainsborough.jpg';

export const artists = {
  'Johannes Vermeer': {
    id: 1,
    name: 'Johannes Vermeer',
    bio: 'Johannes Vermeer was a Dutch Baroque Period painter known for his masterly treatment and use of light in his work.',
    birthYear: 1632,
    deathYear: 1675,
    nationality: 'Dutch',
    notableWorks: [
      'Girl with a Pearl Earring',
      'The Milkmaid',
      'View of Delft',
    ],
    imageUrl: JohannesVermeer,
  },
  'Miriam Omar': {
    id: 2,
    name: 'Miriam Omar',
    bio: 'Miriam Omar is a contemporary Malaysian artist known for her unique and expressive style.',
    birthYear: 1985,
    deathYear: null,
    nationality: 'Malaysian',
    notableWorks: ['Garden of Joy', 'Gadis Picnic'],
    imageUrl: MiriamOmar,
  },
  'Thomas Gainsborough': {
    id: 3,
    name: 'Thomas Gainsborough',
    bio: 'Thomas Gainsborough was an English portrait and landscape painter during the Rococo and early Romantic periods. He is known for his skillful use of color and innovative approach to portraiture.',
    birthYear: 1727,
    deathYear: 1788,
    nationality: 'English',
    notableWorks: ['The Blue Boy', 'Mr and Mrs Andrews'],
    imageUrl: ThomasGainsborough,
  },
};
