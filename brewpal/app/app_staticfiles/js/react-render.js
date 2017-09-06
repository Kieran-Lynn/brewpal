import ReactDOM from "react-dom";
import React from "react";

var TestApp = React.createClass({
  render: () => {
    return (
      <div>
        <h1>Oh shit! React works!</h1>
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(TestApp, null),
  document.getElementById('ReactContainer')
);
