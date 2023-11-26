import * as notificationData from '../../notifications.json';
// const notificationData = require('../../notifications.json');

function getAllNotificationsByUser(userId) {
  const result = notificationData
  .filter((data) => data.author.id === userId)
  .map((data) => data.context);
  return result;
}

export default getAllNotificationsByUser;

// const res = getAllNotificationsByUser('5debd764a7c57c7839d722e9');
// console.log(res);