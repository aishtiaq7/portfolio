import { RxCross1 } from "react-icons/rx";
import { IconContext } from "react-icons";

const FullScreenNav = (props) => {
  return (
    <div className={props.showFullScreenNav ? "fs-menu" : "displayNone"}>
      <div
        className="closeBtn"
        onClick={() => {
          props.setShowFullScreenNav(false);
        }}
      >
        <IconContext.Provider value={{ className: "crossStyles" }}>
          <RxCross1 />
        </IconContext.Provider>
      </div>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Resume</a>
        </li>
        <li>
          <a>Contact me</a>
        </li>
      </ul>
    </div>
  );
};

export default FullScreenNav;
