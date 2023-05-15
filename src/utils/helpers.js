export const formatPrice = (num) => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(num / 100)
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  //console.log(unique)
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
