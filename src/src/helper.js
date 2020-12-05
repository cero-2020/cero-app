/**
 * @param data
 * @returns {boolean}
 */
export function isEmpty(data) {
  if (typeof data === 'undefined' || data === null) return true;

  if (typeof data === 'string' && data.length === 0) return true;

  if (Array.isArray(data)) {
    if (data.length > 0) return false;
  }

  if (typeof data === 'object' && data !== null) {
    if (Object.entries(data).length === 0) return true;
    for (let prop in data) {
      if (Object.prototype.hasOwnProperty.call(data, prop)) {
        return false;
      }
    }
  }

  return false;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
