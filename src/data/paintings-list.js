import Meules from '../assets/paintings/ClaudeMonet/Meules.jpg';
import LesDemoisellesdAvignon from '../assets/paintings/PabloPicasso/LesDemoisellesdAvignon.jpg';

export const paintingsList = [
  {
    name: 'Meules',
    img: Meules,
    artist: 'Claude Monet',
    date: '1890',
    description:
      'Meules is part of a series of paintings by Claude Monet that depict haystacks in the fields near his home in Giverny, France. The series is known for its thematic use of light and the changing seasons.',
    location: 'Private Collection',
    dimensions: '73 cm x 92.5cm',
    style: 'Impressionism',
  },
  {
    name: "Les Demoiselles d'Avignon",
    img: LesDemoisellesdAvignon,
    artist: 'Pablo Picasso',
    date: '1907',
    description:
      "Les Demoiselles d'Avignon is a groundbreaking work by Pablo Picasso that marks a radical break from traditional composition and perspective. This painting is seen as a precursor to Cubism and a pivotal work in the development of modern art.",
    location: 'Museum of Modern Art, New York City, USA',
    dimensions: '243.9 cm x 233.7 cm',
    style: 'Cubism',
  },
];
