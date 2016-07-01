Meteor.startup(function () {
  // Render the component after the page is ready
  ReactDOM.render(
    <App />,
    document.getElementById('render-target')
  );
});
