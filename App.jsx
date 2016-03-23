// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    let query = {};

    return {
      tasks: Tasks.find(query, {}).fetch(),
    };
  },

  renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.termInput).value.trim();

    Tasks.insert({
      text: text,
      createdAt: new Date(), // current time
    });

    // Clear form
    React.findDOMNode(this.refs.termInput).value = '';
    React.findDOMNode(this.refs.termInput).setAttribute('size', 0);
  },

  changeSize() {
    React.findDOMNode(this.refs.termInput).setAttribute(
      'size',
      Math.max(React.findDOMNode(this.refs.termInput).value.length, 0)
    );
  },

  focusInput() {
    React.findDOMNode(this.refs.termForm).classList.add('terminal--cursor-blink');
  },

  blurInput() {
    React.findDOMNode(this.refs.termForm).classList.remove('terminal--cursor-blink');
  },

  render() {
    return (
      <div className="container terminal">
        <header>
          <h1>Console</h1>
        </header>
        <ul className="list-unstyled">
          {this.renderTasks()}
          <li className="terminal--input">
            <form
              className="new-task form-inline terminal--cursor-blink"
              ref="termForm"
              onSubmit={this.handleSubmit}>
              <input
                type="text"
                size="0"
                className="terminal--input-field"
                autoFocus={'true'}
                ref="termInput"
                onFocus={this.focusInput}
                onBlur={this.blurInput}
                onChange={this.changeSize} />
            </form>
          </li>
        </ul>
      </div>
    );
  },
});
