export const Section = (props) => {
  return (
    <article ref={props.innerRef ? props.innerRef : ''} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
      <div className="second-section">
        <div className="largeText">
          <h3>
            <span className="greetingsTitle">"helloo" </span>
            <br></br>
            Its a pleasure to have you here on my page. <br></br>
            <br></br>
            As I grow my skills to become a competent Software Developer
            (alongside being a better person ofcourse),
            <br></br>I want to use this platform to showcase some of my work,
            interests and hopefully give you an impression of me. :p
          </h3>
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
            I will continue to actively update this page and hopefully give you
            a better experience soon.
            <br></br>
            Untill then, take care.
          </h3>
        </div>
      </section>
  );
};