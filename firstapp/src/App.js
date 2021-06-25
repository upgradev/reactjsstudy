import "./App.css";

function App() {
  //   const styles = {
  //     outerDiv: { padding: "70px 0", backgroundColor: "blue" },
  //     innerDiv: {
  //       textAlign: "center",
  //       margin: "auto",
  //       width: "60%",
  //       border: "3px solid black",
  //       backgroundColor: "#73AD21",
  //       padding: "70px 0",
  //     },
  //   };

  //   const sometext = "sometext";
  //   const somediv = <div style={{ backgroundColor: "white" }}>somediv</div>;
  return (
    <div className="App">
      <div className="card">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
