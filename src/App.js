import React from "react";
import { render } from "react-dom";
/* import Pet from "./Pet"; */
import SearchParams from "./SearchParams";

const App = () => {
  /* return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "Dog",
      breed: "Pug",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]); */

  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
        {/*       <Pet name="luna" animal="Dog" breed="Pug" />
      <Pet name="Pepper" animal="Bird" breed="Labrador" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
