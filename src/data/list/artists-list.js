import JohannesVermeerImage from '../../assets/images/artists/JohannesVermeer.jpg';
import MiriamOmarImage from '../../assets/images/artists/MiriamOmar.jpg';
import ThomasGainsboroughImage from '../../assets/images/artists/ThomasGainsborough.jpg';
import GustavKlimtImage from '../../assets/images/artists/GustavKlimt.jpg';
import EdwardHopperImage from '../../assets/images/artists/EdwardHopper.jpg';
import JanVanEyckImage from '../../assets/images/artists/JanVanEyck.jpg';
import CasparDavidFriedrichImage from '../../assets/images/artists/CasparDavidFriedrich.jpg';
import JasperJohnsImage from '../../assets/images/artists/JasperJohns.jpg';
import WillemDeKooningImage from '../../assets/images/artists/WillemDeKooning.jpg';
import VincentVanGoghImage from '../../assets/images/artists/VincentVanGogh.jpg';
import PabloPicassoImage from '../../assets/images/artists/PabloPicasso.jpg';
import ClaudeMonetImage from '../../assets/images/artists/ClaudeMonet.jpg';
import LeonardoDaVinciImage from '../../assets/images/artists/LeonardoDaVinci.jpg';
import JamesAbbottMcNeillWhistlerImage from '../../assets/images/artists/JamesAbbottMcNeillWhistler.jpg';

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
    imageUrl: JohannesVermeerImage,
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
    imageUrl: MiriamOmarImage,
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
    imageUrl: ThomasGainsboroughImage,
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
    imageUrl: GustavKlimtImage,
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
    imageUrl: EdwardHopperImage,
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
    imageUrl: JanVanEyckImage,
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
    imageUrl: CasparDavidFriedrichImage,
  },
  'Jasper Johns': {
    id: 8,
    name: 'Jasper Johns',
    bio: 'Jasper Johns is an American painter, sculptor, and printmaker whose work is associated with abstract expressionism, Neo-Dada, and pop art. He is known for his depictions of the American flag and other familiar objects.',
    birthYear: 1930,
    deathYear: null,
    nationality: 'American',
    countryCode: 'US',
    notableWorks: ['Flag', 'Three Flags', 'Map'],
    imageUrl: JasperJohnsImage,
  },
  'Willem de Kooning': {
    id: 9,
    name: 'Willem de Kooning',
    bio: "Willem de Kooning was a Dutch-American abstract expressionist artist known for his unique style that blended figuration with abstraction. De Kooning's paintings are characterized by their aggressive brushstrokes and vibrant color palette.",
    birthYear: 1904,
    deathYear: 1997,
    nationality: 'Dutch-American',
    countryCode: 'US',
    notableWorks: ['Woman I', 'Excavation', 'Interchange'],
    imageUrl: WillemDeKooningImage,
  },
  'Vincent Van Gogh': {
    id: 10,
    name: 'Vincent Van Gogh',
    bio: 'Vincent Van Gogh was a Dutch post-impressionist painter whose work had a far-reaching influence on 20th-century art. His oeuvre includes portraits, self-portraits, landscapes, and still lifes characterized by bold colors and dramatic, impulsive brushwork.',
    birthYear: 1853,
    deathYear: 1890,
    nationality: 'Dutch',
    countryCode: 'NL',
    notableWorks: ['Starry Night', 'Sunflowers', 'Café Terrace at Night'],
    imageUrl: VincentVanGoghImage,
  },
  'Pablo Picasso': {
    id: 11,
    name: 'Pablo Picasso',
    bio: 'Pablo Picasso was a Spanish painter, sculptor, printmaker, ceramicist, and stage designer who spent most of his adult life in France. As one of the greatest and most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.',
    birthYear: 1881,
    deathYear: 1973,
    nationality: 'Spanish',
    countryCode: 'ES', // Spain
    notableWorks: [
      'Guernica',
      "Les Demoiselles d'Avignon",
      'The Weeping Woman',
    ],
    imageUrl: PabloPicassoImage,
  },
  'Claude Monet': {
    id: 12,
    name: 'Claude Monet',
    bio: 'Claude Monet was a French painter and a leading figure in the Impressionist movement that transformed French painting in the second half of the 19th century. His career was marked by a series of innovations that redefined the approach to painting light and color, focusing on the changing qualities of natural light as depicted in his series on haystacks, poplars, the Rouen Cathedral, and the water lilies and pond at his Giverny garden.',
    birthYear: 1840,
    deathYear: 1926,
    nationality: 'French',
    countryCode: 'FR', // France
    notableWorks: [
      'Impression, Sunrise',
      'Water Lilies',
      'Woman with a Parasol - Madame Monet and Her Son',
    ],
    imageUrl: ClaudeMonetImage,
  },
  'Leonardo da Vinci': {
    id: 13,
    name: 'Leonardo da Vinci',
    bio: 'Leonardo da Vinci was an Italian polymath of the High Renaissance who is widely considered one of the most diversely talented individuals ever to have lived. His areas of interest included invention, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography. He has been variously called the father of palaeontology, ichnology, and architecture, and is widely considered one of the greatest painters of all time. The Mona Lisa is the most famous of his works and the most popular portrait ever made.',
    birthYear: 1452,
    deathYear: 1519,
    nationality: 'Italian',
    countryCode: 'IT', // Italy
    notableWorks: ['Mona Lisa', 'The Last Supper', 'Vitruvian Man'],
    imageUrl: LeonardoDaVinciImage,
  },
  'James Abbott McNeill Whistler': {
    id: 14,
    name: 'James Abbott McNeill Whistler',
    bio: 'James Abbott McNeill Whistler was an American artist, active during the American Gilded Age and based primarily in the United Kingdom. He was averse to sentimentality and moral allusion in painting, and was a leading proponent of the credo "art for art\'s sake". His famous signature for his paintings was in the shape of a stylized butterfly possessing a long stinger for a tail. The symbol was apt, for it combined both aspects of his personality—his art was characterized by a subtle delicacy, while his public persona was combative.',
    birthYear: 1834,
    deathYear: 1903,
    nationality: 'American',
    countryCode: 'US', // United States
    notableWorks: [
      "Whistler's Mother",
      'Nocturne: Blue and Gold - Old Battersea Bridge',
      'Symphony in White, No. 1: The White Girl',
    ],
    imageUrl: JamesAbbottMcNeillWhistlerImage,
  },
};
