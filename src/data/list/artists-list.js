import JohannesVermeer from '../../assets/images/artists/JohannesVermeer.jpeg';
import MiriamOmar from '../../assets/images/artists/MiriamOmar.png';
import ThomasGainsborough from '../../assets/images/artists/ThomasGainsborough.jpg';
import GustavKlimt from '../../assets/images/artists/GustavKlimt.jpg';
import EdwardHopper from '../../assets/images/artists/EdwardHopper.jpg';
import JanVanEyck from '../../assets/images/artists/JanVanEyck.jpg';
import CasparDavidFriedrich from '../../assets/images/artists/CasparDavidFriedrich.jpg';

export const artists = {
  'Johannes Vermeer': {
    id: 1,
    name: 'Johannes Vermeer',
    bio: 'Johannes Vermeer was a Dutch Baroque Period painter known for his masterly treatment and use of light in his work.',
    birthYear: 1632,
    deathYear: 1675,
    nationality: 'Dutch',
    countryCode: 'NL', // Netherlands
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
    countryCode: 'MY', // Malaysia
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
    countryCode: 'GB', // United Kingdom (Great Britain)
    notableWorks: ['The Blue Boy', 'Mr and Mrs Andrews'],
    imageUrl: ThomasGainsborough,
  },
  'Gustav Klimt': {
    id: 4,
    name: 'Gustav Klimt',
    bio: "Gustav Klimt was an Austrian Symbolist painter and one of the most prominent members of the Vienna Secession movement. Klimt is noted for his paintings, murals, sketches, and other objets d'art.",
    birthYear: 1862,
    deathYear: 1918,
    nationality: 'Austrian',
    countryCode: 'AT', // Austria
    notableWorks: [
      'The Kiss',
      'Lady With A Fan',
      'Portrait of Adele Bloch-Bauer I',
    ],
    imageUrl: GustavKlimt,
  },
  'Edward Hopper': {
    id: 5,
    name: 'Edward Hopper',
    bio: 'Edward Hopper was an American realist painter and printmaker known for his melancholy depictions of American modern life. His work is widely known and recognizable for its cinematic quality and isolated scenes.',
    birthYear: 1882,
    deathYear: 1967,
    nationality: 'American',
    countryCode: 'US', // United States
    notableWorks: ['Nighthawks', 'Automat', 'Morning Sun'],
    imageUrl: EdwardHopper,
  },
  'Jan Van Eyck': {
    id: 6,
    name: 'Jan Van Eyck',
    bio: 'Jan Van Eyck was a Flemish painter active during the Northern Renaissance. He was one of the most significant and influential artists of the 15th century, known for his mastery of oil painting and meticulous attention to detail.',
    birthYear: 1390,
    deathYear: 1441,
    nationality: 'Flemish',
    countryCode: 'BE', // Belgium (Flanders is a region in Belgium)
    notableWorks: ['The Arnolfini Portrait', 'The Ghent Altarpiece'],
    imageUrl: JanVanEyck,
  },
  'Caspar David Friedrich': {
    id: 7,
    name: 'Caspar David Friedrich',
    bio: 'Caspar David Friedrich was a German Romantic landscape painter, considered one of the most important figures in the movement. His works often feature contemplative and allegorical scenes, emphasizing the beauty and grandeur of nature.',
    birthYear: 1774,
    deathYear: 1840,
    nationality: 'German',
    countryCode: 'DE', // Germany
    notableWorks: [
      'Wanderer Above the Sea of Fog',
      'The Abbey in the Oakwood',
      'The Sea of Ice',
    ],
    imageUrl: CasparDavidFriedrich,
  },
};
