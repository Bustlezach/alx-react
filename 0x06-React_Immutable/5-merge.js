import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
  const list = List(page1);
  const list1 = List(page2);
  const list2 = list.concat(list1);
  return list2;
}

export function mergeElements(page1, page2) {
  const map = Map(page1);
  const map1 = Map(page2);
  const map2 = map.merge(map1);
  return map2;
}
