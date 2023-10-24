export function getFullYear() {
  let year = new Date().getFullYear();
  return year;
}

export function getFooterCopy(isIndex) {
  const school = isIndex ? `Holberton School` : `Holberton School main dashboard`;
  return school;
}