import React from "react";
import Header from "./Header";
import KegList from "./KegControl";
import "bootswatch/dist/darkly/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <KegList />
    </React.Fragment>
  );
}

export default App;
