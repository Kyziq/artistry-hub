import MonaLisa from '../../assets/images/portraits/LeonardoDaVinci/MonaLisa.jpg';
import WhistlersMother from '../../assets/images/portraits/JamesAbbott/WhistlersMother.jpg';
import GirlWithAPearlEarring from '../../assets/images/portraits/JohannesVermeer/GirlWithAPearlEarring.jpg';
import TheKiss from '../../assets/images/portraits/GustavKlimt/TheKiss.jpg';
import AdeleBlochBauer from '../../assets/images/portraits/GustavKlimt/AdeleBlochBauer.jpg';
import TheArnolfiniPortrait from '../../assets/images/portraits/JanVanEyck/TheArnolfiniPortrait.jpg';
import WandererAboveTheSeaOfFog from '../../assets/images/portraits/CasparDavidFriedrich/WandererAboveTheSeaOfFog.jpeg';
import { artists } from './artists-list.js';

export const portraitsList = [
  {
    id: 4001,
    name: 'Mona Lisa',
    img: MonaLisa,
    date: '1503 - 1506',
    description:
      "The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'.",
    location: 'Louvre Museum, Paris, France',
    countryCode: 'FR',
    dimensions: '77 cm x 53 cm',
    style: 'Renaissance',
    artistInfo: artists['Leonardo da Vinci'],
    likes: 36,
  },
  {
    id: 4002,
    name: "Whistler's Mother",
    img: WhistlersMother,
    date: '1871',
    description:
      "Arrangement in Grey and Black No.1, best known under its colloquial name Whistler's Mother, is a painting in oils on canvas created by the American-born painter James McNeill Whistler in 1871.",
    location: "Musée d'Orsay, Paris, France",
    countryCode: 'FR',
    dimensions: '144.3 cm x 162.5 cm',
    style: 'Realism',
    artistInfo: artists['James Abbott McNeill Whistler'],
    likes: 24,
  },
  {
    id: 4003,
    name: 'Girl with a Pearl Earring',
    img: GirlWithAPearlEarring,
    date: '1665',
    description:
      'Girl with a Pearl Earring, also known as the "Dutch Mona Lisa", is a 17th-century masterpiece by Johannes Vermeer. This exquisite work is renowned for its subtle use of light and shadow, which masterfully captures the enigmatic expression and beauty of the young woman depicted. The artwork is celebrated for its vivid portrayal and meticulous attention to detail, making it a standout example of the Baroque style. Its intriguing subject and Vermeer\'s renowned technique have made it a beloved and highly revered work in art history.',
    location: 'Mauritshuis, The Hague, Netherlands',
    countryCode: 'NL',
    dimensions: '44.5 cm x 39 cm',
    style: 'Baroque',
    artistInfo: artists['Johannes Vermeer'],
    likes: 19,
  },
  {
    id: 4004,
    name: 'The Kiss',
    img: TheKiss,
    date: '1908-1909',
    description:
      'The Kiss is a famous oil painting created by the Austrian Symbolist painter Gustav Klimt. Completed between 1908 and 1909, this masterpiece is renowned for its intricate patterns, gold leaf details, and symbolic representation of love and intimacy. The artwork features a couple locked in an embrace against a backdrop of vibrant patterns and symbols. Klimt use of gold leaf and decorative elements contributes to the opulent and luxurious feel of the painting. The Kiss is considered one of Klimts most iconic works and a symbol of the Art Nouveau movement.',
    location: 'Belvedere Palace, Vienna, Austria',
    countryCode: 'AT',
    dimensions: '180 cm x 180 cm',
    style: 'Symbolism, Art Nouveau',
    artistInfo: artists['Gustav Klimt'],
    likes: 2,
  },
  {
    id: 4005,
    name: 'Portrait of Adele Bloch-Bauer I',
    img: AdeleBlochBauer,
    date: '1907',
    description:
      'Portrait of Adele Bloch-Bauer I is a renowned painting by the Austrian Symbolist painter Gustav Klimt. Created in 1907, this portrait is a stunning example of Klimts signature style, characterized by the use of gold leaf, decorative elements, and intricate patterns. The subject of the painting, Adele Bloch-Bauer, was a prominent Viennese art patron and the only woman to be painted twice by Klimt. The artwork is celebrated for its opulence, symbolism, and the ethereal beauty of Adele depicted in a shimmering golden aura. Portrait of Adele Bloch-Bauer I is considered a masterpiece of Art Nouveau and Symbolism.',
    location: 'Neue Galerie, New York City, USA',
    countryCode: 'US',
    dimensions: '138 cm x 138 cm',
    style: 'Symbolism, Art Nouveau',
    artistInfo: artists['Gustav Klimt'],
    likes: 13,
  },
  {
    id: 4006,
    name: 'The Arnolfini Portrait',
    img: TheArnolfiniPortrait,
    date: '1434',
    description:
      'The Arnolfini Portrait is a masterpiece by the Flemish painter Jan Van Eyck, created in 1434. The painting is also known as The Arnolfini Wedding or The Arnolfini Marriage. It is considered one of the most famous and complex paintings in Western art. The portrait depicts Giovanni Arnolfini and his wife in a meticulously detailed interior, surrounded by symbolic elements. The mirror in the background reflects two additional figures, and various objects carry rich symbolic meaning. The Arnolfini Portrait is celebrated for its technical skill, use of light, and intricate symbolism, making it an enduring work of art.',
    location: 'National Gallery, London, United Kingdom',
    countryCode: 'GB', // United Kingdom (Great Britain)
    dimensions: '82.2 cm x 60 cm',
    style: 'Northern Renaissance',
    artistInfo: artists['Jan Van Eyck'],
    likes: 11,
  },
  {
    id: 4007,
    name: 'Wanderer Above the Sea of Fog',
    img: WandererAboveTheSeaOfFog,
    date: '1818',
    description:
      "Wanderer Above the Sea of Fog is a famous painting by the German Romantic artist Caspar David Friedrich. Completed in 1818, the artwork depicts a man standing on a rocky precipice, gazing out over a sea of fog-covered mountains. The solitary figure, with his back turned to the viewer, adds a sense of mystery and introspection to the painting. The vast landscape and swirling fog create an atmospheric and contemplative scene, reflecting the themes of Romanticism. Wanderer Above the Sea of Fog is considered one of Friedrich's masterpieces and an iconic work of 19th-century German Romantic art.",
    location: 'Kunsthalle Hamburg, Hamburg, Germany',
    countryCode: 'DE', // Germany
    dimensions: '98.4 cm x 74.8 cm',
    style: 'Romanticism',
    artistInfo: artists['Caspar David Friedrich'],
    likes: 10,
  },
];
