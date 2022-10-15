function domainName(url) {
  // replace http:// && https:// && www.
  let partsArr = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    // split using "." as separator
    .split(".");
  return partsArr[0];
}

// receive string url, return a string with just the domain name

console.log(domainName("http://github.com/carbonfive/raygun"), "github");
console.log(domainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(domainName("https://www.cnet.com"), "cnet");
