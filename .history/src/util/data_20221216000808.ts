import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
register('ko', koLocale);

export function formatAgo(date: Date, lang: string = 'en_US') {
  return format('ko', lang);
}
