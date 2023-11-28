import * as notificationData from '../../notifications.json';
import { normalize, schema } from 'normalizr';
// const notificationData = require('../../notifications.json');
// const { normalize, schema } = require('normalizr');

const user = new schema.Entity('users');

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity(
  "notifications",
  {
    author: user,
    context: message,
  }
);
const normalizedData = normalize(notificationData, [notification]);
export { normalizedData };

function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  const result = [];

  for(const property in notifications) {
    if(notifications[property].id === userId) {
      result.push(messages[notifications[property].context]);
    }
  }
  return result;
}

const messages = normalizedData.entities.messages;
const check = getAllNotificationsByUser('5debd7642e815cd350407777');
console.log(check);

export default getAllNotificationsByUser;
