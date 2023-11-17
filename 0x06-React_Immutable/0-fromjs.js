/*
 * This script converts object into an immutable Map 
 * using fromJS of the Immutable.js library
 */

import { fromJS } from 'immutable';

function getImmutableObject(object) {
  const map = fromJS(object);
  return map;
}


export default getImmutableObject;
