// This script returns the value of the object at the defined path


import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
  const nested = fromJS(object);
  const result = nested.getIn(array);
  return result;
}


export default accessImmutableObject;
