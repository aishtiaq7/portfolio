import "../App.css";
import "../components/Subcomponent.css";

export const Section = (props) => {
  return (
    <article ref={props.innerRef ? props.innerRef : ""}>
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
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const DarkSection = (props) => {
  const data = props.projectsData;
  console.log(data);

  return (
    <section className="dark-section">
      <div
        onMouseEnter={props.textEnter}
        onMouseLeave={props.textLeave}
        className="largeText"
        style={{ color: "white" }}
      >
        <SectionBanner section={"Projects"} isLightTheme={true} />
        <div className="container">
          {/* <h3>
            I will continue to actively update this page and hopefully give you
            a better experience soon.
            <br></br>
            Untill then, take care.
          </h3> */}

          <div>
            <h1>Projects</h1>

            {/* <ul>
              {data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul> */}

            {/* Attempt #2 */}
            <div className="cards">
              <Card
                img="https://picsum.photos/id/54/400/300"
                title="What I learned from my visit to The Upside Down"
                author="Nancy Wheeler"
              />
              <Card
                img="https://picsum.photos/id/54/400/300"
                title="What I learned from my visit to The Upside Down"
                author="Nancy Wheeler"
              />
            </div>

            {/* Attempt #2 */}
            


          </div>
        </div>
      </div>
    </section>
  );
};

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="souvenir"/>
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <h5>{props.author}</h5>
      </div>
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
