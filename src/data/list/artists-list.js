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
    bio: "Johannes Vermeer, born in 1632 in Delft, Netherlands, was a Dutch Baroque painter who specialized in domestic interior scenes of middle-class life. Vermeer's works are renowned for their brilliant use of light and shadow, as well as their meticulous detail. He was a moderately successful provincial genre painter in his lifetime, but his fame grew posthumously, particularly in the 19th century. Today, he is recognized as one of the greatest painters of the Dutch Golden Age. His most famous works include 'Girl with a Pearl Earring' and 'The Milkmaid,' which exemplify his skill at rendering effects of light and color.",
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
    bio: "Miriam Omar, born in 1985 in Malaysia, is a contemporary Malaysian artist celebrated for her vibrant and expressive paintings. Omar's art is deeply influenced by her cultural heritage, blending traditional Malaysian motifs with modern artistic styles. Her work often features bright, bold colors and a playful yet thoughtful exploration of themes such as identity, nature, and femininity. Key works like 'Garden of Joy' and 'Gadis Picnic' showcase her unique ability to bring together elements of Malaysian folklore with contemporary art trends.",
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
    bio: "Thomas Gainsborough, born in 1727 in Sudbury, Suffolk, England, was a prominent English painter known for his portrait and landscape paintings. A founder of the British school of landscape painting, Gainsborough's style evokes a sense of romanticism and impressionism. His portraits are particularly celebrated for their elegance and grace. Notable works include 'The Blue Boy' and 'Mr and Mrs Andrews,' which combine his expertise in landscapes with portraiture, creating beautifully balanced compositions.",
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
    bio: "Gustav Klimt, born in 1862 in Baumgarten, near Vienna, was an Austrian Symbolist painter and a key figure of the Vienna Secession movement. His work is marked by a sensual and decorative style, often exploring themes of love, sexuality, and death. Klimt's paintings, murals, and sketches are distinguished by their use of gold leaf and elegant, ornate patterns. 'The Kiss,' 'Lady With A Fan,' and 'Portrait of Adele Bloch-Bauer I' are among his most famous works, showcasing his unique approach to form and composition.",
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
    bio: "Edward Hopper, born in 1882 in Nyack, New York, was an American realist painter and printmaker. Known for his depictions of solitude in contemporary American life, his art often captures the isolation of urban and rural scenes. Hopper's use of light is particularly notable, creating a cinematic quality in paintings like 'Nighthawks,' 'Automat,' and 'Morning Sun.' His work has become an iconic representation of mid-20th-century Americana.",
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
    bio: "Jan Van Eyck, born around 1390 in Maaseik, present-day Belgium, was a Flemish painter active during the Northern Renaissance. He is one of the early innovators of what became known as Early Netherlandish painting and one of the most significant representatives of Early Northern Renaissance art. Van Eyck's works are known for their intricate detail and masterful use of oil paint. His most famous works include 'The Arnolfini Portrait' and 'The Ghent Altarpiece,' which are revered for their remarkable detail and realism.",
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
    bio: "Born in 1774 in Greifswald, Germany, Caspar David Friedrich was a 19th-century German Romantic landscape painter, generally considered the most important German artist of his generation. His works are characterized by a contemplative portrayal of nature, often tinged with symbolism and melancholy. He is best known for paintings such as 'Wanderer Above the Sea of Fog' and 'The Abbey in the Oakwood,' which reflect his interest in the sublime and the spiritual quality of nature.",
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
    bio: "Jasper Johns, born in 1930 in Augusta, Georgia, is an American painter, sculptor, and printmaker associated with abstract expressionism, Neo-Dada, and Pop art. Johns' work is known for its depiction of familiar icons, such as flags, maps, and targets, and his innovative use of materials. His works like 'Flag' and 'Three Flags' play with themes of perception and the fluid nature of identity. Johns is a pivotal figure in contemporary art, bridging the gap between abstract expressionism and the various art movements that followed.",
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
    bio: "Willem de Kooning was a Dutch-American artist, a central figure in the Abstract Expressionist movement. Migrating to the U.S. in 1926, he developed a unique style blending figuration and abstraction, evident in his provocative 'Women' series and celebrated works like 'Woman I'. His dynamic brushstrokes and bold colors distinguished his work in 'Excavation' and 'Interchange', contributing significantly to the narrative of modern art. De Kooning's influence is seen in his exploration of form and the human figure, marking a defining moment in the transition to contemporary abstract painting.",
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
    bio: "Vincent Van Gogh, a Dutch post-impressionist painter, is famed for his profound influence on 20th-century art. His art, characterized by its vibrant color and emotional intensity, includes iconic pieces such as 'Starry Night', 'Sunflowers', and 'Café Terrace at Night'. His turbulent life, marked by mental illness and poverty, fueled his creative output of around 860 oil paintings, which posthumously earned him worldwide acclaim. Van Gogh's legacy lies in his pioneering approach to color and brushwork, which continues to inspire artists and art enthusiasts alike.",
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
