export function map([head, ...tail], fn) {
  if(head === undefined && !tail.length) return [];
  return tail.length ? [fn(head), ...(map(tail, fn))] : [fn(head)];
}

export const another = 'another';
