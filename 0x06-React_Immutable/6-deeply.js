import { Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
  const map = Map(page1);
  const map1 = Map(page2);
  const mergeMap = map.mergeDeep(map1);
  
  return mergeMap;
}


export default mergeDeeplyElements;
