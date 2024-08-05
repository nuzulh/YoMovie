export function parseRating(rating: number, decimal = 1) {
  return (Math.floor(rating * 10 ** decimal) / 10 ** decimal).toFixed(decimal);
}

export function parseUrlSearchParams(searchParams: Record<string, string>) {
  return '?' + Object.keys(searchParams)
    .map(key => `${key}=${searchParams[key]}`)
    .join('&');
}

export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    dateStyle: 'long',
  },
) {
  return new Intl.DateTimeFormat('en-EN', options).format(date);
}
