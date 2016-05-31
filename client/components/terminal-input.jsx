// Log component - represents a single todo item
Log = React.createClass({
  render() {
    return (
      <li className={'terminal--input'}>
        <span className="text">{this.props.log.text}</span>
      </li>
    );
  },
});

Action = React.createClass({
  render() {
    return (
      <li className={'terminal--output'}>
        <span className="is-console">Go fuck yourself ?</span>
      </li>
    );
  },
});
