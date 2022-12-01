// String array duplicates

export default function dup(s: String[]) {
  return s.map((e) => {
    return e
      .split("")
      .filter((letter, i) => letter !== e[i + 1])
      .join("");
  });
}
