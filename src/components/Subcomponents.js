import "../App.css";
import "../components/Subcomponent.css";
export const Section = (props) => {
  return (
    <article ref={props.innerRef ? props.innerRef : ""}>
      <div
        className="second-section"
        onMouseEnter={props.textEnter}
        onMouseLeave={props.textLeave}
      >
        <div className="section-banner">
          <h4 className="about-title">About</h4>
          <div className="vertical-line"></div>
        </div>


        <div className="container">
          <div className="largeText">
            <div className="greetingsTitle">
              <h3>"helloo"</h3>
            </div>

            <div className="des">
              <h3>
                Its a pleasure to have you here on my page. <br></br>
                As I grow my skills to become a competent Software Developer
                (alongside being a better person ofcourse), I want to use this
                platform to showcase some of my work, interests and hopefully
                give you an impression of me. :p
              </h3>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const DarkSection = (props) => {
  return (
    <section className="dark-section">
      <div
        onMouseEnter={props.textEnter}
        onMouseLeave={props.textLeave}
        className="largeText"
        style={{ color: "white" }}
      >
        <h3>
          I will continue to actively update this page and hopefully give you a
          better experience soon.
          <br></br>
          Untill then, take care.
        </h3>
      </div>
    </section>
  );
};
