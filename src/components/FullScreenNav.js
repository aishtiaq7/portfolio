import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect , useState} from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./FullScreenNav.css";

const googleDriveResumeLink =
  "https://drive.google.com/file/d/1kdT6ksc8Snk4nSEbHnbEg42-OF9ij2jd/view";

const FullScreenNav = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const closeBtnRef = useRef(null);
  const ulRef = useRef(null); // Ref for the list items
  const tl = useRef(null); // Ref for the timeline

  // const handleNavLinkClick = (e) => {
  //   e.preventDefault();
  //   gsap.registerPlugin(ScrollToPlugin);

  //   const currentUrl = location.pathname;
  //   const targetElement = e.target.innerText.toString().toLowerCase();
  //   const element = document.getElementById(targetElement);

  //   // console.log("currentUrl => :", currentUrl);
  //   // console.log("targetElement => :", targetElement);
  //   // console.log("element => :", element);

  //   const handleNavigation = (path, state = null) => {
  //     handleCloseButtonClick();
  //     setTimeout(() => {
  //       navigate(path, { state });
  //     }, 750);
  //   };

  //   const scrollToElement = () => {
  //     handleCloseButtonClick();

  //     /*
  //       Higher offset value means go more down the page.
  //       Lower (or negative) offset value means scroll up the page.
  //   */
  //     const isPhone = window.innerWidth <= 768;
  //     const offsets = {
  //       home: 0,
  //       about: isPhone ? 100 : -54,
  //       default: isPhone ? 80 : 80, // Default offset for other sections
  //     };

  //     let offsetYValue;

  //     switch (targetElement) {
  //       case "home":
  //         offsetYValue = offsets.home;
  //         break;
  //       case "about":
  //         offsetYValue = offsets.about;
  //         break;
  //       default:
  //         offsetYValue = offsets.default;
  //         break;
  //     }

  //     gsap.to(window, {
  //       duration: targetElement === "contact" ? 2.1 : 1.25,
  //       scrollTo: {
  //         y: element,
  //         offsetY: offsetYValue,
  //         autoKill: true,
  //       },
  //       ease: "expoScale",
  //     });
  //   };

  //   if (currentUrl === "/" && targetElement === "contact") {
  //     console.log("from @home && contact 1st");
  //     scrollToElement();
  //   } else if (currentUrl === "/" || element !== null) {
  //     console.log("from @home2 ,targetElement:=>", targetElement);

  //     if (targetElement === "contact") {
  //       handleNavigation("/", { targetId: "contact" });
  //     } else if (targetElement === "learn more") {
  //       handleNavigation("/learnmore");
  //     } else {
  //       scrollToElement();
  //     }
  //   } else if (currentUrl === "/learnmore") {
  //     console.log("from @learnmore", `target:',${targetElement}`);
  //     switch (targetElement) {
  //       case "home":
  //         handleNavigation("/", { targetId: "home" });
  //         break;
  //       case "about":
  //         handleNavigation("/", { targetId: "about" });
  //         break;
  //       case "learn more":
  //         console.log("inside here");
  //         handleCloseButtonClick();
  //         handleNavigation("/", { targetId: "contact" });
  //         break;
  //       case "contact":
  //         handleNavigation("/", { targetId: "contact" });
  //         break;
  //       default:
  //         handleNavigation("/");
  //         break;
  //     }
  //   }
  // };


  const [fsAnimationStates,setFsAnimationStates ] = useState({
    forwardDone: false, 
    reverseDone: true, 
  })
  console.log('initial', fsAnimationStates)


  const handleNavLinkClick = (e) => {
    e.preventDefault();
    gsap.registerPlugin(ScrollToPlugin);

    const currentUrl = location.pathname;
    const targetElement = e.target.innerText.toString().toLowerCase();
    const element = document.getElementById(targetElement);

    const handleNavigation = (path, state = null) => {
      handleCloseButtonClick();
      setTimeout(() => {
        navigate(path, { state });
      }, 1000);
    };

    const scrollToElement = () => {
      handleCloseButtonClick();

      const isPhone = window.innerWidth <= 768;
      const offsets = {
        home: 0,
        about: isPhone ? 100 : -54,
        default: isPhone ? 80 : 80,
      };

      const offsetYValue = offsets[targetElement] || offsets.default;

      gsap.to(window, {
        duration: targetElement === "contact" ? 2.1 : 1.25,
        scrollTo: {
          y: element,
          offsetY: offsetYValue,
          autoKill: true,
        },
        ease: "expoScale",
      });
    };

    const navigationActions = {
      "/": {
        contact: () => {
          scrollToElement();
        },
        default: () => {
          if (targetElement === "learn more") {
            handleNavigation("/learnmore");
          } else {
            scrollToElement();
          }
        },
      },
      "/learnmore": {
        home: () => handleNavigation("/", { targetId: "home" }),
        about: () => handleNavigation("/", { targetId: "about" }),
        contact: () => handleNavigation("/", { targetId: "contact" }),
        default: () => handleNavigation("/"),
      },
    };

    const executeNavigation = () => {
      const action =
        navigationActions[currentUrl]?.[targetElement] ||
        navigationActions[currentUrl]?.default;

      if (action) {
        action();
      } else {
        console.error("No navigation action defined for this route.");
      }
    };

    executeNavigation();
  };

  const handleCloseButtonClick = () => {
    tl.current
      .timeScale(1.65)
      .reverse()
      .then(() => {
        props.setShowFullScreenNav(false);
      });
  };

  // GSAP main time line
  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        console.log("forward complete");
        setFsAnimationStates({
          forwardDone: true, 
          reverseDone: false,
        });
        console.log('f.done', fsAnimationStates)

      },
      onReverseComplete: () => {
        console.log("reverse complete");
        setFsAnimationStates({
          forwardDone: false, 
          reverseDone: true,
        });
        console.log('r.done', fsAnimationStates)
      }
    });
  
    tl.current
      .fromTo(
        closeBtnRef.current,
        { rotation: -360, scale: 0, opacity: 0 },
        { rotation: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.inOut" }
      )
      .fromTo(
        ulRef.current.children,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.6"
      );
  
    if (props.showFullScreenNav) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [props.showFullScreenNav]);
  

  return (
    <div className={props.showFullScreenNav ? "fs-menu" : "displayNone"}>
      <div
        className="closeBtn"
        onClick={handleCloseButtonClick}
        ref={closeBtnRef}
      >
        <IconContext.Provider value={{ className: "crossStyles" }}>
          <RxCross1 />
        </IconContext.Provider>
      </div>

      <ul ref={ulRef}>
        <li>
          <button className="linkButtons" onClick={handleNavLinkClick}>
            Home
          </button>
        </li>
        <li>
          <button className="linkButtons" onClick={handleNavLinkClick}>
            About
          </button>
        </li>
        <li>
          <button className="linkButtons" onClick={handleNavLinkClick}>
            Learn More
          </button>
        </li>
        <li>
          <button
            className="linkButtons"
            onClick={() => {
              handleCloseButtonClick();
              setTimeout(() => {
                window.open(googleDriveResumeLink, "_blank");
              }, 850); // Adjust the delay as needed
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button className="linkButtons" onClick={handleNavLinkClick}>
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FullScreenNav;
