import * as notificationData from '../../notifications.json';
import { normalize, schema } from 'normalizr';
// const notificationData = require('../../notifications.json');
// const { normalize, schema } = require('normalizr');

function getAllNotificationsByUser(userId) {
  const result = notificationData
  .filter((data) => data.author.id === userId)
  .map((data) => data.context);
  return result;
}

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

export const normalizedData = normalize(getAllNotificationsByUser, [notification]);

export default getAllNotificationsByUser;
