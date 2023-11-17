import { Seq } from 'immutable';

function printBestStudents(object) {
  const seq = Seq(object);

  const screened = seq.filter((student) => {
    return student.score > 70;
  });

  function capFLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const JSObject = screened.toJS();

  Object.keys(JSObject).forEach((key) => {
    JSObject[key].firstName = capFLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFLetter(JSObject[key].lastName);
  });

  console.log(JSObject);
}

export default printBestStudents;
