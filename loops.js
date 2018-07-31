function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      array + ['I am 1 strange loop.']
    } else {
      array + [`I am ${i} strange loops.`]
    }
  }
  return array
}
