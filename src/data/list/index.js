export * from './abstracts-list';
export * from './landscapes-list';
export * from './portraits-list';
export * from './paintings-list';
export * from './artists-list';
export * from './cubism-list';

import { abstractsList } from './abstracts-list';
import { portraitsList } from './portraits-list';
import { paintingsList } from './paintings-list';
import { landscapesList } from './landscapes-list';
import { cubismList } from './cubism-list';

export const allLists = {
  abstractsList,
  portraitsList,
  paintingsList,
  landscapesList,
  cubismList,
};
