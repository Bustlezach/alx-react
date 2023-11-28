import { normalize, schema } from 'normalizr';


const courses = new schema.Entity("course");
function coursesNormalizer(data) {
  const normaliseData = normalize(data, [courses]);
  return normaliseData.entities.courses;
}

export default coursesNormalizer;