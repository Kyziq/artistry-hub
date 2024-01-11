import FemmeAssise from '../../assets/images/cubism/PabloPicasso/FemmeAssise.jpg';
import LesDemoisellesdAvignon from '../../assets/images/cubism/PabloPicasso/LesDemoisellesdAvignon.jpg';
import { artists } from './artists-list';

export const cubismList = [
  {
    id: 5001,
    name: 'Femme Assise',
    img: FemmeAssise,
    date: '1909',
    description:
      "Femme Assise is a masterful work by Pablo Picasso, created during his pivotal Cubist period. This painting stands as a testament to Picasso's unparalleled ability to deconstruct and reconfigure the human form. With bold geometric shapes and fractured perspectives, Picasso's innovative approach to Cubism in \"Femme Assise\" defies conventional artistic boundaries. This masterpiece not only showcases Picasso's artistic prowess but also highlights his enduring impact on the art world, solidifying his legacy as a pioneer of modern art.",
    location: 'Private Collection',
    countryCode: '',
    dimensions: '100 cm x 73 cm',
    style: 'Cubism',
    artistInfo: artists['Pablo Picasso'],
    likes: 9,
  },
  {
    id: 5002,
    name: "Les Demoiselles d'Avignon",
    img: LesDemoisellesdAvignon,
    date: '1907',
    description:
      "Les Demoiselles d'Avignon is a groundbreaking work by Pablo Picasso that marks a radical break from traditional composition and perspective. This painting is seen as a precursor to Cubism and a pivotal work in the development of modern art. With its fragmented and angular forms, Picasso's portrayal of five nude figures from various cultures challenges both artistic conventions and societal norms, offering a provocative and multifaceted exploration of the human form and identity.",
    location: 'Museum of Modern Art, New York City, USA',
    countryCode: 'US',
    dimensions: '243.9 cm x 233.7 cm',
    style: 'Cubism',
    artistInfo: artists['Pablo Picasso'],
    likes: 19,
  },
];
