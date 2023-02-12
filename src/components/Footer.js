const Footer = (props) => {
  return (
    <footer onMouseEnter={props.footerEnter} onMouseLeave={props.footerLeave}>
      <div className="contactMe">
        <h2>Say "hi" to me:</h2>
        <br></br>
        <h3>awshaf@gmail.com</h3>
      </div>

      <div className="horizontalLine"></div>
      <ul>
        <li>linkedIn</li>
        <li>instagram</li>
        <li>github</li>
      </ul>
    </footer>
  );
};

export default Footer;
