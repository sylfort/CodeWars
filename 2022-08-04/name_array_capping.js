function capMe(names) {
  return names.map((s) => {
    let ss = s.toLowerCase();
    return `${ss[0].toUpperCase()}${ss.slice(1)}`;
  });
}
