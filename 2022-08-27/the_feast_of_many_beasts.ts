// The Feast of Many Beasts
export function feast(beast: string, dish: string): boolean {
  if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1])
    return true;
  return false;
}
