// 8 kyu Will there be enough space?

function enough(cap, on, wait) {
  let free = cap - on;

  if (free >= wait) {
    return 0;
  }

  return wait - free;
}
