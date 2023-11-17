/*
 * This script converts an object into an immutable Map
 * using the fromJS method of the Immutable.js library.
 */

import { fromJS } from 'immutable';

function getImmutableObject(object) {
  const map = fromJS(object);
  return map;
}

export default getImmutableObject;
