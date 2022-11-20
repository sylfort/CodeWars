//Square Every Digit

export class Kata {
  static squareDigits(num: number): number {
    let str = num
      .toString()
      .split("")
      .map((e) => parseInt(e) * parseInt(e))
      .join("");

    return +str;
  }
}
