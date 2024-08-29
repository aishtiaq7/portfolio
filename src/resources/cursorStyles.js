const returnCursorVariant = (mousePosition) => {
  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // minus 25 cuz radius of cursor is 50
      backgroundColor: "rgba(239, 239, 239, 0.9)",
      mixBlendMode: "difference",
    },
    onNavbar: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // minus 25 cuz radius of cursor is 50
      backgroundColor: "grey",
      mixBlendMode: "difference",

      opacity: 0.35,
    },
    onNavbarLinks: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25, // minus 25 cuz radius of cursor is 50
      backgroundColor: "blue",
      mixBlendMode: "difference",

      opacity: 0.85,
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
      height: 70,
      width: 70,

      x: mousePosition.x - 35,
      y: mousePosition.y - 35, // 75 cuz radius is 150
      backgroundColor: "rgba(239, 239, 239, 0.1)",

      border: "3px solid white",
      opacity:0.6,
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
      height: 175,
      width: 175,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75, // 75 cuz radius is 150
      backgroundColor: "rgba(239, 239, 239, 0.9)",
      zIndex: "29 !important",
      mixBlendMode: "overlay",
      border: "2px solid black",
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
      backgroundColor: "rgba(239, 239, 239, 0.1)",
      border: "5px solid black",
    },
    crossEnter: {
      height: 70,
      width: 70,

      x: mousePosition.x - 35,
      y: mousePosition.y - 35, // 75 cuz radius is 150
      backgroundColor: "rgba(239, 239, 239, 0.1)",

      border: "5px solid red",
    },
    hyperLinkEnter: {
      height: 70,
      width: 70,

      x: mousePosition.x - 35,
      y: mousePosition.y - 35, // 75 cuz radius is 150
      backgroundColor: "rgba(239, 239, 239, 0.1)",

      border: "5px solid blue",
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
