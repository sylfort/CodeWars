// 5 kyu Human Readable Time

function singleToDoubleDigit(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

function humanReadable(seconds) {
  if (seconds < 60) {
    let s = singleToDoubleDigit(seconds);
    return `00:00:${s}`;
  } else if (seconds < 3600) {
    let remainder = seconds % 60;
    let minutes = (seconds - remainder) / 60;

    let s = singleToDoubleDigit(remainder);
    let m = singleToDoubleDigit(minutes);

    return `00:${m}:${s}`;
  } else {
    let remainder = seconds % 60;
    let minutes = (seconds - remainder) / 60;
    let minutes_remainder = minutes % 60;
    let hours = (minutes - minutes_remainder) / 60;

    let s = singleToDoubleDigit(remainder);
    let m = singleToDoubleDigit(minutes_remainder);
    let h = singleToDoubleDigit(hours);

    return `${h}:${m}:${s}`;
  }
}
