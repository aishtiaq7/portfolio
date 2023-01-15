import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <div className="name-logo">
          <h4>AWSHAF ___</h4>
          <h4 className="ishtiaque">ISHTIAQUE</h4>
        </div>
        <div className="menu">
          <h4>MENU</h4>
        </div>
      </nav>

      <section>
        <div className="landingSection">
          <div className="landingTitle">
            <h3>
              strategic design
              <br />
              or the brands
              <br />
              of tomorrow
            </h3>
          </div>

          <div className="portraitImg">
            <img
              className="selfportrait"
              src={require("./resources/test_portrait_img.png")}
              alt="A beautiful image"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="second-section">
          <div className="largeText">
            <h3>
              markus is a german designer specialized in strategy-led branding. He helps <br></br>
              starts-ups and medium-sized brands to stand out by combinig creative strategy and thoughful desing. <br></br>

              <br></br>

              Proident consectetur anim cillum Lorem consectetur irure cupidatat esse.
              Veniam voluptate culpa duis laboris eiusmod labore eu consequat officia officia.
            </h3>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <h3>Beginning of 3rd section</h3>
      </section>
    </div>
  );
}

export default App;
