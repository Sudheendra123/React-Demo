const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Namaste React"
);
console.log("Heading", heading); //react element which is a Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
