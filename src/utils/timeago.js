import { format } from 'timeago.js';

export const timeago = (timestamp) => {
  return format(timestamp);
};
