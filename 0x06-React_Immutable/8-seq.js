import { Seq } from 'immutable';

function printBestStudents(object) {
  const seq = Seq(object);


  const screened = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function capFLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const JSObject = screened.toJS();

  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capFLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFLetter(JSObject[key].lastName);
    return JSObject[key];
  });

  console.log(JSObject);
}

export default printBestStudents;
