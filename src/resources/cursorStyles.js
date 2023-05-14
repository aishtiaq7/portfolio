const returnCursorVariant = (mousePosition) => {
  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      mixBlendMode: "difference"
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "difference"
    }
  }
  return variants
}


export default returnCursorVariant;