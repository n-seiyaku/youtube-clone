const formatView = (num) => {
  const map = [
    { suffix: 'T', threshold: 1e12, precision: 0 },
    { suffix: 'B', threshold: 1e9, precision: 0 },
    { suffix: 'M', threshold: 1e6, precision: 1 },
    { suffix: 'K', threshold: 1e3, precision: 0 },
    { suffix: '', threshold: 1, precision: 0 },
  ]

  const found = map.find((x) => Math.abs(num) >= x.threshold)
  if (found) {
    const formatted = (num / found.threshold).toFixed(found.precision) + found.suffix
    return formatted
  }

  return num
}

export default formatView
