export function media(numeros: number[]) {
  let media, r = 0;
  numeros.forEach(function (item) {
      r += item;
  })
  media = parseFloat((r / numeros.length).toFixed(2))
  return media;
}

