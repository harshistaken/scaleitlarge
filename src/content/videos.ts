export type VideoThumb = { src: string; alt: string };

const F = (hash: string, ext: "jpg" | "png" = "jpg") =>
  `https://framerusercontent.com/images/${hash}.${ext}`;

export const VIDEO_ROW_1: VideoThumb[] = [
  { src: F("fXZfLsmvxlnvq0SaocydcFnlgo"), alt: "Thumbnail — dieuwkegorter" },
  { src: F("nJnsE5CH1ttKkmD21KKLL5U"), alt: "Thumbnail — rogeratwell" },
  { src: F("1qTVKYiQswr9PLzBG86T4aZ7XpI", "png"), alt: "Thumbnail — 005" },
  { src: F("e6iUVhqbay5d59ECEtENhhhUau0"), alt: "Thumbnail — kiguthadeus" },
  { src: F("bygRz0No3oUbTnDpoJgS7rUQE64"), alt: "Thumbnail — 01 (3)" },
  { src: F("PGIv6BBOlm4wO5L5xOrqlvV9Yg"), alt: "Thumbnail — 01 (4)" },
  { src: F("RuNzkSZB7XnAEtm4S2gMznkrrRw"), alt: "Thumbnail — 01 (2)" },
  { src: F("rGpDsI9HYxLULA6aayfcArgG4Q"), alt: "Thumbnail — 01" },
];

export const VIDEO_ROW_2: VideoThumb[] = [
  { src: F("z8qVd7kmkQeIh8QAfYpgrqTn4"), alt: "Thumbnail — Project 6" },
  { src: F("5dcNOk9qWCpJ7B0TSm8hgCim9e0"), alt: "Thumbnail — Project 7" },
  { src: F("HtxBDx7Hpcdb7of9RzQoRBFuIYI"), alt: "Thumbnail — Project 8" },
  { src: F("AXvK7bkpSqfZ9jQmQ9y0FAlhk"), alt: "Thumbnail — Project 12" },
  { src: F("XEzniDCQbtSX0TZQiDKjLmxDvfc"), alt: "Thumbnail — hugohogeFALL" },
  { src: F("tPaC4R9wRrPjYQJBSOyYMmOu4"), alt: "Thumbnail — realmckoy793" },
  { src: F("AEyIQqjFaoBNAm1aHghdRjMGv3c"), alt: "Thumbnail — wrestling90" },
  { src: F("OhGtfDjKKGD0PJdRb2wDPwRRdk"), alt: "Thumbnail — kingkaizen97" },
];
