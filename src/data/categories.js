import { paintingsList } from './paintings-list.js';
import { landscapesList } from './landscapes-list.js';
import { portraitsList } from './portraits-list.js';
import { abstractsList } from './abstracts-list.js';

function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const randomPainting = getRandomItem(paintingsList);
const randomLandscape = getRandomItem(landscapesList);
const randomPortrait = getRandomItem(portraitsList);
const randomAbstract = getRandomItem(abstractsList);

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
];
