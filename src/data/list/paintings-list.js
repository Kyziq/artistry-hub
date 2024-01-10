import Meules from '../../assets/images/paintings/ClaudeMonet/Meules.jpg';
import GadisPicnic from '../../assets/images/paintings/MiriamOmar/GadisPicnic.png';
import GardenOfJoy from '../../assets/images/paintings/MiriamOmar/GardenOfJoy.png';
import LadyWithAFan from '../../assets/images/paintings/GustavKlimt/LadyWithAFan.jpg';
import Nighthawks from '../../assets/images/paintings/EdwardHopper/Nighthawks.jpg';
import Automat from '../../assets/images/paintings/EdwardHopper/Automat.jpg';
import MorningSun from '../../assets/images/paintings/EdwardHopper/MorningSun.jpg';
import TheGhentAltarpiece from '../../assets/images/paintings/JanVanEyck/GhentAltarpiece.jpg';
import { artists } from './artists-list.js';

export const paintingsList = [
  {
    id: 3001,
    name: 'Meules',
    img: Meules,
    artist: 'Claude Monet',
    date: '1890',
    description:
      'Meules is part of a series of paintings by Claude Monet that depict haystacks in the fields near his home in Giverny, France. The series is known for its thematic use of light and the changing seasons.',
    location: 'Private Collection',
    countryCode: '',
    dimensions: '73 cm x 92.5cm',
    style: 'Impressionism',
    artistInfo: artists['Claude Monet'] || {},
    likes: 13,
  },
  {
    id: 3002,
    name: 'Garden Of Joy',
    img: GardenOfJoy,
    artist: 'Mariam Omar',
    date: '2022',
    description:
      "Garden of Joy is part of a series of paintings by Miriam Omar that explore a flora theme, showcasing the beauty and diversity of botanical elements. The artwork captures the essence of nature through Miriam Omar's unique artistic perspective.",
    location: 'Zhan Art Space',
    countryCode: 'MY', // Zhan Art Space is in Malaysia
    dimensions: '20.1 cm x 20.1cm',
    style: 'Floral',
    artistInfo: artists['Mariam Omar'] || {},
    likes: 8,
  },
  {
    id: 3003,
    name: 'Gadis Picnic',
    img: GadisPicnic,
    artist: 'Mariam Omar',
    date: '2022',
    description:
      'Gadis Picnic is part of a series of paintings by Miriam Omar that explore a flora theme, showcasing two Malaysian girls dressed in baju kurung as they enjoy a picnic under a tree. The artwork beautifully captures the cultural and natural elements, creating a serene and picturesque scene.',
    location: 'Zhan Art Space',
    countryCode: 'MY', // Zhan Art Space is in Malaysia
    dimensions: '15.1 cm x 20.1cm',
    style: 'Floral',
    artistInfo: artists['Mariam Omar'] || {},
    likes: 11,
  },
  {
    id: 3004,
    name: 'Lady with A Fan',
    img: LadyWithAFan,
    artist: 'Gustav Klimt',
    date: '1917-1918',
    description:
      "Lady with A Fan is a captivating painting by the Austrian Symbolist painter Gustav Klimt. Created between 1917 and 1918, this artwork features a woman adorned with intricate patterns and a fan, showcasing Klimt signature style. The use of gold leaf and decorative elements adds a luxurious and enchanting quality to the painting. Lady with A Fan is a testament to Klimt's ability to capture the essence of beauty and elegance through his unique artistic vision.",
    location: 'Private Collection',
    countryCode: '',
    dimensions: '78 cm x 78 cm',
    style: 'Symbolism, Art Nouveau',
    artistInfo: artists['Gustav Klimt'] || {},
    likes: 18,
  },
  {
    id: 3005,
    name: 'Nighthawks',
    img: Nighthawks,
    artist: 'Edward Hopper',
    date: '1942',
    description:
      "Nighthawks is an iconic painting by the American realist artist Edward Hopper. Created in 1942, the artwork depicts a diner scene late at night, illuminated by the interior lights. The solitary figures within the diner and the empty streets outside contribute to the painting's sense of isolation and urban alienation. Hopper's use of light and shadow adds a cinematic quality to the scene, making Nighthawks one of his most recognized and celebrated works. The painting is a poignant portrayal of the quietude and solitude often associated with urban life.",
    location: 'Art Institute of Chicago, Chicago, USA',
    countryCode: 'US',
    dimensions: '84.1 cm x 152.4 cm',
    style: 'American Realism',
    artistInfo: artists['Edward Hopper'] || {},
    likes: 6,
  },
  {
    id: 3006,
    name: 'Automat',
    img: Automat,
    artist: 'Edward Hopper',
    date: '1927',
    description:
      "Automat is a poignant painting by the American realist artist Edward Hopper. Created in 1927, the artwork depicts a lone woman sitting at a table in an automat, a type of self-service restaurant popular in the early 20th century. The woman's contemplative expression and the stark, artificial lighting contribute to the painting's sense of solitude and modern urban life. Hopper's masterful use of light and composition adds a cinematic quality to the scene, highlighting the isolation of the individual in a bustling city. Automat is a classic example of Hopper's ability to capture the mood and atmosphere of his time.",
    location: 'Des Moines Art Center, Des Moines, USA',
    countryCode: 'US',
    dimensions: '71.4 cm x 91.4 cm',
    style: 'American Realism',
    artistInfo: artists['Edward Hopper'] || {},
    likes: 2,
  },
  {
    id: 3007,
    name: 'Morning Sun',
    img: MorningSun,
    artist: 'Edward Hopper',
    date: '1952',
    description:
      "Morning Sun is a compelling painting by the American realist artist Edward Hopper. Completed in 1952, the artwork features a woman seated on the edge of a rumpled bed, bathed in the warm morning light that fills the room. The contemplative atmosphere and the woman's introspective gaze contribute to the painting's sense of solitude and quiet reflection. Hopper's meticulous attention to detail and use of light and shadow create a poignant narrative within the scene. Morning Sun is a testament to Hopper's ability to capture the nuances of human emotion and the play of light in domestic spaces.",
    location: 'Columbus Museum of Art, Columbus, USA',
    countryCode: 'US',
    dimensions: '71.4 cm x 102.2 cm',
    style: 'American Realism',
    artistInfo: artists['Edward Hopper'] || {},
    likes: 1,
  },
  {
    id: 3008,
    name: 'The Ghent Altarpiece',
    img: TheGhentAltarpiece,
    artist: 'Jan Van Eyck',
    date: '1432',
    description:
      'The Ghent Altarpiece, also known as the Adoration of the Mystic Lamb, is a monumental polyptych panel painting by the Flemish artist Jan Van Eyck. Created in 1432, it is considered one of the most important and influential artworks of the Northern Renaissance. The altarpiece consists of multiple panels depicting various scenes, including the Adoration of the Lamb, the Annunciation, and other religious motifs. Known for its intricate detail, vibrant colors, and masterful use of oil painting techniques, The Ghent Altarpiece is celebrated for its artistic and religious significance.',
    location: "Saint Bavo's Cathedral, Ghent, Belgium",
    countryCode: 'BE',
    dimensions: '365 cm x 260 cm (when opened)',
    style: 'Northern Renaissance',
    artistInfo: artists['Jan Van Eyck'] || {},
    likes: 0,
  },
];
