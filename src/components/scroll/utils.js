export const getRect = (el) => {
  return {
    top: el.offsetTop,
    left: el.offsetLeft,
    right: el.offsetRight,
    height: el.offsetHeight
  }
}
