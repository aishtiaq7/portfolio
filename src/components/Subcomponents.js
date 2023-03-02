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
  // const data = props.projectsData;
  // console.log(data);

  return (
    <section className="dark-section">
      <div
        onMouseEnter={props.textEnter}
        onMouseLeave={props.textLeave}
        className="largeText"
        
      >
        <SectionBanner section={"Projects"} isLightTheme={true} />
        <div className="container">
           <div>
            <h1 className="greetingsTitle">Below are some of my projects</h1>

            {/* <ul>
              {data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul> */}

            {/* Attempt #2 */}
            <div className="cardsContainer">
              <Card
                id="123"
                projectName="ProjectName add"
                hyperlink="somelink"
              />
              <Card
                id="123"
                projectName="ProjectName add"
                hyperlink="somelink"
              />
              <Card
                id="123"
                projectName="ProjectName add"
                hyperlink="somelink"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Card = (props) => {
  return (
    <div className="card">
      <p>{props.id}</p>
      <p>{props.projectName}</p>
      <p>{props.hyperlink}</p>
      <br></br>
      <p>
        Voluptate incididunt sit cillum ex culpa aliqua amet consequat cillum
        culpa ipsum ad veniam. Eu ut nostrud incididunt nostrud amet excepteur
        veniam nisi est qui nostrud duis excepteur. Magna nulla non dolor aute
        voluptate adipisicing excepteur eu magna. Aliquip dolore minim amet quis
        quis occaecat deserunt ut mollit dolor veniam. Adipisicing duis
        excepteur incididunt id tempor duis ea esse sit ex. Et aute
        reprehenderit dolor dolor duis incididunt sit duis incididunt. Anim duis
        culpa amet est consectetur.
      </p>
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
