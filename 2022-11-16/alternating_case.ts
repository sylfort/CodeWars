// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

export function toAlternatingCase(s: string): string {
  return s
    .split("")
    .map((letter) => {
      if (letter.toUpperCase() === letter) {
        return letter.toLowerCase();
      }
      return letter.toUpperCase();
    })
    .join("");
}

console.log(toAlternatingCase("LeH"));
