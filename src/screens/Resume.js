import "./Resume.css";
import { useNavigate } from "react-router-dom";

const Resume = (props) => {
    const navigate = useNavigate();
    const redirectHome = () => { 
        navigate('/')
    }
  return (
    <div className="bg container" >
      <h5>This is the resume page</h5>
      <div className="">
        <button onClick={redirectHome}>go back to home page</button>
        <h5>
          AWSHAF ISHTIAQUE ALL
          RIGHTS RESERVED.
        </h5>
      </div>
    </div>
  );
};

export default Resume;
