import "../App.css";
import "../components/Subcomponent.css";

export const Section = (props) => {
  return (
    <article
      id='about'
      className="about-section"
      ref={props.innerRef ? props.innerRef : ""}
    >
      <div className="second-section">
        <SectionBanner section={"About"} isLightTheme={false} />

        <div
          className="container"
          onMouseEnter={props.textEnter}
          onMouseLeave={props.textLeave}
        >
          <div className="largeText">
            <div className="greetingsTitle">
              <h3>"helloo"</h3>
            </div>

            <div className="des">
              <h3>
                Its a pleasure to have you here on my page. <br></br> <br></br>
                As I grow my skills to become a competent Software Developer
                (alongside being a better person of course), I want to use this
                platform to showcase some of my work, interests and hopefully
                give you an impression of me. :p
              </h3>

              <br></br>
              <h3>
                Alongside completing my last semester in SFU, i will be spending
                some time updating my portfolio page and seek software
                development opportunites
              </h3>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const DarkSection = (props) => {
  const data = props.projectsData;
  const listItems = data.map((item) => {
    return (
      <Card
        key={item.id}
        mouseEnterEvent={props.textEnter}
        mouseLeaveEvent={props.textLeave}
        id={item.projecID}
        projectName={item.projectName}
        hyperlink={item.hyperlink}
        des={item.des}
      ></Card>
    );
  });

  return (
    <section id="projects"  className="dark-section"> 
      <div className="largeText">
        <SectionBanner section={"Projects"} isLightTheme={true} />
        <div className="container">
          <div>
            <h1 className="greetingsTitle">
              I will be updating this projects section soon...
            </h1>

            <div className="cardsContainer">{listItems}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Card = (props) => {
  return (
    <div
      key={props.id}
      className="card"
      onMouseEnter={props.mouseEnterEvent}
      onMouseLeave={props.mouseLeaveEvent}
      onClick={() => {
        window.open(props.hyperlink, '_blank');
      }}
    >
      <p>{props.projectName}</p>
      <br></br>
      <p>{props.des}</p>
      <br></br>
    </div>
  );
};

export const SectionBanner = (props) => {
  const isLightTheme = props.isLightTheme;
  const sectionTitle = props.section;
  return (
    <div className={`section-banner `}>
      <div className={`${isLightTheme ? "ribbon-light" : "ribbon-dark"}`}>
        <h4 className="about-title">{sectionTitle}</h4>
      </div>
    </div>
  );
};

export const InterestSection = (props) => {
  return (
    <section ref={props.innerRef}>
      <div className="interestSection">
        <SectionBanner section={"Interests"} isLightTheme={false} />
        <div className="largeText">
          <div
            className="container"
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
          >
            <h1 className="greetingsTitle">My interests</h1>
            <h1 className="greetingsTitle">My interests</h1>
            <h1 className="greetingsTitle">My interests</h1>
            <h1 className="greetingsTitle">My interests</h1>
            <h1 className="greetingsTitle">My interests</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
