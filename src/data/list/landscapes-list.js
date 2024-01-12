import StarryNight from '../../assets/images/landscapes/VincentVanGogh/StarryNight.jpg';
import MrAndMrsAndrews from '../../assets/images/landscapes/ThomasGainsborough/MrAndMrsAndrews.jpg';
import TheBlueBoy from '../../assets/images/landscapes/ThomasGainsborough/TheBlueBoy.jpg';
import { artists } from './artists-list.js';

export const landscapesList = [
  {
    id: 2001,
    name: 'Starry Night',
    img: StarryNight,
    date: '1889',
    description:
      "In creating this image of the night sky—dominated by the bright moon at right and Venus at center left—van Gogh heralded modern painting's new embrace of mood, expression, symbol, and sentiment. Inspired by the view from his window at the Saint-Paul-de-Mausole asylum in Saint-Rémy, in southern France, where the artist spent twelve months in 1889-90 seeking reprieve from his mental illnesses, The Starry Night (made in mid-June) is both an exercise in observation and a clear departure from it. The vision took place at night, yet the painting, among hundreds of artworks van Gogh made that year, was created in several sessions during the day, under entirely different atmospheric conditions. The picturesque village nestled below the hills was based on other views—it could not be seen from his window—and the cypress at left appears much closer than it was. And although certain features of the sky have been reconstructed as observed, the artist altered celestial shapes and added a sense of glow. Van Gogh assigned an emotional language to night and nature that took them far from their actual appearances. Dominated by vivid blues and yellows applied with gestural verve and immediacy, The Starry Night also demonstrates how inseparable van Gogh's vision was from the new procedures of painting he had devised, in which color and paint describe a world outside the artwork even as they telegraph their own status as, merely, color and paint.",
    location: 'Museum of Modern Art, New York City, USA',
    countryCode: 'US',
    dimensions: '73.7 cm x 92.1 cm',
    style: 'Post-Impressionism',
    artistInfo: artists['Vincent Van Gogh'],
    likes: 6,
  },
  {
    id: 2002,
    name: 'Mr and Mrs Andrews',
    img: MrAndMrsAndrews,
    date: '1750',
    description:
      'Mr and Mrs Andrews is a captivating landscape painting by Thomas Gainsborough, created around 1750. The artwork features a portrait of a newlywed couple, Mr. Robert Andrews and his wife Frances, set against the backdrop of the English countryside. Gainsborough skillfully combines portraiture with landscape elements, showcasing his talent in capturing both the human subject and the beauty of the natural environment. The painting is celebrated for its romantic and idyllic portrayal of the English rural landscape during the Rococo period.',
    location: 'Private Collection',
    countryCode: '',
    dimensions: '69.8 cm x 119.4 cm',
    style: 'Rococo',
    artistInfo: artists['Thomas Gainsborough'],
    likes: 9,
  },
  {
    id: 2003,
    name: 'The Blue Boy',
    img: TheBlueBoy,
    date: '1770',
    description:
      "The Blue Boy is a renowned portrait painting by Thomas Gainsborough, created around 1770. The artwork features a young boy dressed in a striking blue satin costume, standing against a lush, green landscape. The painting is celebrated for its vibrant use of color, particularly the intense blue of the boy's attire, and Gainsborough's masterful portrayal of texture and light. The Blue Boy is considered an iconic example of Rococo portraiture during the 18th century.",
    location:
      'Huntington Library, Art Museum, and Botanical Gardens, California',
    countryCode: 'US',
    dimensions: '178 cm x 122 cm',
    style: 'Rococo',
    artistInfo: artists['Thomas Gainsborough'],
    likes: 5,
  },
];
