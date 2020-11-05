export const getArrayItem = (arr, obj) => {
  for (var i = 0; i < arr.length; i++) {
    const matched = Object.keys(obj).filter( (key) => {
      return obj[key] === arr[i][key]
    })
    if(matched.length === Object.keys(obj).length) {
      return arr[i]
    }
  }
  return false
}

export const getArrayItemIndex = (arr, obj) => {
  for (var i = 0; i < arr.length; i++) {
    const matched = Object.keys(obj).filter( (key) => {
      return obj[key] === arr[i][key]
    })
    if(matched.length === Object.keys(obj).length) {
      return i
    }
  }
  return -1
}
