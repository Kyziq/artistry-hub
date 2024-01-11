import FemmeAssise from '../../assets/images/cubism/PabloPicasso/FemmeAssise.jpg';
import LesDemoisellesdAvignon from '../../assets/images/cubism/PabloPicasso/LesDemoisellesdAvignon.jpg';
import { artists } from './artists-list';

export const cubismList = [
  {
    id: 5001,
    name: 'Femme Assise',
    img: FemmeAssise,
    date: '',
    description: '',
    location: '',
    countryCode: '',
    dimensions: '',
    style: '',
    artistInfo: artists['Pablo Picasso'],
    likes: 9,
  },
  {
    id: 5002,
    name: "Les Demoiselles d'Avignon",
    img: LesDemoisellesdAvignon,
    date: '1907',
    description:
      "Les Demoiselles d'Avignon is a groundbreaking work by Pablo Picasso that marks a radical break from traditional composition and perspective. This painting is seen as a precursor to Cubism and a pivotal work in the development of modern art.",
    location: 'Museum of Modern Art, New York City, USA',
    countryCode: 'US',
    dimensions: '243.9 cm x 233.7 cm',
    style: 'Cubism',
    artistInfo: artists['Pablo Picasso'],
    likes: 19,
  },
];
