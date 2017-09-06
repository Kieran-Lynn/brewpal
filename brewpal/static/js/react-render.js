var React = require('react');
var ReactDOM = require('react-dom')


var TestApp = React.createClass({
  render: function() {
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

console.log("test");