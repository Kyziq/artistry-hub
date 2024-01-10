import { paintingsList } from './list/paintings-list.js';
import { landscapesList } from './list/landscapes-list.js';
import { portraitsList } from './list/portraits-list.js';
import { abstractsList } from './list/abstracts-list.js';
import { cubismList } from './list/cubism-list.js';

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const randomPainting = getRandomItem(paintingsList);
const randomLandscape = getRandomItem(landscapesList);
const randomPortrait = getRandomItem(portraitsList);
const randomAbstract = getRandomItem(abstractsList);
const randomCubism = getRandomItem(cubismList);

export const categories = [
  {
    name: 'Paintings',
    imageUrl: randomPainting.img,
    tooltip: 'Discover Paintings',
  },
  {
    name: 'Landscapes',
    imageUrl: randomLandscape.img,
    tooltip: 'Discover Landscapes',
  },
  {
    name: 'Portraits',
    imageUrl: randomPortrait.img,
    tooltip: 'Discover Portraits',
  },
  {
    name: 'Abstracts',
    imageUrl: randomAbstract.img,
    tooltip: 'Discover Abstracts',
  },
  {
    name: 'Cubism',
    imageUrl: randomCubism.img,
    tooltip: 'Discover Cubism',
  },
];
