import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  console.log(props);
  return <h1>{props.name}</h1>;
};

const Content = props => {
  return (
    <>
      <Part name={props.lista[0].name} ex={props.lista[0].exercises} />
      <Part name={props.lista[1].name} ex={props.lista[1].exercises} />
      <Part name={props.lista[2].name} ex={props.lista[2].exercises} />
    </>
  );
};

const Part = props => {
  return (
    <p>
      {props.name} {props.ex}
    </p>
  );
};

const Total = props => {
  return (
    <p>
      Number of exercises{" "}
      {props.lista[0].exercises +
        props.lista[1].exercises +
        props.lista[2].exercises}
    </p>
  );
};

const App = () => {

  
  const course = {
    name: "Half Stack application development",
   parts:[
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 }
  ]}

  return (
    <div>
      <Header name={course.name} />

      <Content lista={course.parts} />

      <Total lista={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
// name2={part2} name3={part3}
