const returnCursorVariant = (mousePosition) => {
  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // minus 25 cuz radius of cursor is 50
      backgroundColor: "rgba(239, 239, 239, 0.9)",
      mixBlendMode: "difference",
    },
    text: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      mixBlendMode: "difference",
      backgroundColor: "rgba(239, 239, 239, 0.9)",

    },
    logo: {
      height: 45,
      width: 45,

      x: mousePosition.x - 45 / 2,
      y: mousePosition.y - 45 / 2, // 75 cuz radius is 150
      mixBlendMode: "difference",
      borderRadius: "10%",
      backgroundColor: "rgba(239, 239, 239, 0.9)",

    },
    portrait: {
      height: 90,
      width: 90,

      x: mousePosition.x - 90 / 2,
      y: mousePosition.y - 90 / 2, 
      opacity: "30%",
      backgroundColor: "rgba(239, 239, 239, 0.9)",

    },
    hideCursor: {
      display: "none",
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // minus 25 cuz radius of cursor is 50
      cursor: "pointer",
    },
    cardEnter: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      backgroundColor: "rgba(239, 239, 239, 0.9)",
      zIndex: "15",
    },
    tourchEnter: {
      height: 150,
      width: 150,
      

      backgroundColor: "rgba(239, 239, 239, 0.9)",
      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      mixBlendMode: "difference",
    },
    modalEnter: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      // background: "transparent",
      backgroundColor: "rgba(239, 239, 239, 0.1)",
      
      border: "5px solid black",
      // mixBlendMode: "difference",
      // backgroundColor: "rgba(239, 239, 239, 0.9)",

    },
    crossEnter: {
      height: 70,
      width: 70,

      x: mousePosition.x - 35,
      y: mousePosition.y - 35, // 75 cuz radius is 150
      backgroundColor: "rgba(239, 239, 239, 0.9)",

      // background: "transparent",
      backgroundColor: "rgba(239, 239, 239, 0.1)",

      border: "5px solid red",
      // mixBlendMode: "difference",
    },
    hyperLinkEnter: {
      height: 70,
      width: 70,

      x: mousePosition.x - 35,
      y: mousePosition.y - 35, // 75 cuz radius is 150
      // background: "transparent",
      backgroundColor: "rgba(239, 239, 239, 0.1)",

      border: "5px solid blue",
      // mixBlendMode: "difference",
    },
    learnMore: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      // background: "transparent",
      backgroundColor: "rgba(239, 239, 239, 0.1)",

      border: "5px solid black",
      cursor: "pointer",
      // mixBlendMode: "difference",
    },
    learnMoreContrast: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      // background: "transparent",
      backgroundColor: "rgba(239, 239, 239, 0.1)",

      border: "5px solid white",
      cursor: "pointer",
      // mixBlendMode: "difference",
    },
  };
  return variants;
};

export default returnCursorVariant;
