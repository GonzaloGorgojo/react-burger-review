import Email from "../../imgs/email.png";

var style = {
  backgroundColor: "#1abc96",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

export function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}
        <div className="container">
          <small>
            Made by Gonzalo Gorgojo, Contact me .
            <a href="mailto:gongorgojo@gmail.com">
              <img src={Email} alt="EMAIL"></img>
            </a>
          </small>
        </div>
        <div className="container">
          <small>Copyright © Gonzalo Gorgojo 2021</small>
        </div>
      </div>
    </div>
  );
}
