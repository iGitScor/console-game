// Task component - represents a single todo item
Task = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired,
  },

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = this.props.task.checked ? 'checked' : '';

    return (
      <li className={taskClassName + ' terminal--input'}>
        <span className="text">{this.props.task.text}</span>
      </li>
    );
  },
});
