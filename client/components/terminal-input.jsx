// Log component - represents a single log item
Log = React.createClass({
  render() {
    return (
      <li className={'terminal__input'}>
        <small>{i18n.__(this.props.log.action)}</small><br />
        <span className={'text'}>{this.props.log.text}</span>
      </li>
    );
  },
});

Action = React.createClass({
  render() {
    return (
      <li className={'terminal__output output--action'}>
        <span className="is-console">{this.props.text}</span>
      </li>
    );
  },
});
