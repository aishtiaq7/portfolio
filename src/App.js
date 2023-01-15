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
          <h3>
            Aliquip dolor eiusmod sunt laborum minim et sunt laboris eiusmod
            sit. Laboris reprehenderit deserunt amet non. Aliqua ex pariatur
            nisi do non culpa ad enim elit enim ullamco ipsum laboris ullamco.
            Est aliquip velit enim sint exercitation nostrud consequat eiusmod
            irure nisi ut irure. Eu ea anim amet cupidatat minim ut Lorem
            pariatur non ullamco.
          </h3>
        </div>
      </section>

      <section>
        <h3>Beginning of 3rd section</h3>
      </section>
    </div>
  );
}

export default App;
