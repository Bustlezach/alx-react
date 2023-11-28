

export function filterTypeSelected(state) {
  return state.get("filter");
}
export function getNotifications(state) {
  return state.get("notifications");
}
export function getUnreadNotifications(state) {
  const notifications = state.get("notifications");
  const filtered = notifications.filter(
    (value, key) => value.get("isRead") === true
  );
  return filtered;
}