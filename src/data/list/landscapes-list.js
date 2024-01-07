import StarryNight from '../assets/images/landscapes/VincentVanGogh/StarryNight.jpg';
import MrAndMrsAndrews from '../assets/images/landscapes/ThomasGainsborough/MrAndMrsAndrews.jpg';
import TheBlueBoy from '../assets/images/landscapes/ThomasGainsborough/TheBlueBoy.jpg';
import { artists } from './artists-list.js';

export const landscapesList = [
  {
    id: 1,
    name: 'Starry Night',
    img: StarryNight,
    artist: 'Vincent Van Gogh',
    date: '1889',
    description:
      "Starry Night is one of Vincent Van Gogh's most famous paintings, renowned for its vibrant colors and emotional impact. Painted from memory during his stay at the asylum in Saint-Rémy-de-Provence, it depicts a swirling night sky over a small town.",
    location: 'Museum of Modern Art, New York City, USA',
    dimensions: '73.7 cm x 92.1 cm',
    style: 'Post-Impressionism',
    artistInfo: artists['Vincent Van Gogh'] || {},
  },
  {
    id: 2,
    name: 'Mr and Mrs Andrews',
    img: MrAndMrsAndrews,
    artist: 'Thomas Gainsborough',
    date: 'c. 1750',
    description:
      'Mr and Mrs Andrews is a captivating landscape painting by Thomas Gainsborough, created around 1750. The artwork features a portrait of a newlywed couple, Mr. Robert Andrews and his wife Frances, set against the backdrop of the English countryside. Gainsborough skillfully combines portraiture with landscape elements, showcasing his talent in capturing both the human subject and the beauty of the natural environment. The painting is celebrated for its romantic and idyllic portrayal of the English rural landscape during the Rococo period.',
    location: 'Private Collection',
    dimensions: '69.8 cm x 119.4 cm',
    style: 'Rococo',
  },
  {
    id: 3,
    name: 'The Blue Boy',
    img: TheBlueBoy,
    artist: 'Thomas Gainsborough',
    date: 'c. 1770',
    description:
      "The Blue Boy is a renowned portrait painting by Thomas Gainsborough, created around 1770. The artwork features a young boy dressed in a striking blue satin costume, standing against a lush, green landscape. The painting is celebrated for its vibrant use of color, particularly the intense blue of the boy's attire, and Gainsborough's masterful portrayal of texture and light. The Blue Boy is considered an iconic example of Rococo portraiture during the 18th century.",
    location:
      'Huntington Library, Art Museum, and Botanical Gardens, California',
    dimensions: '178 cm x 122 cm',
    style: 'Rococo',
  },
];
