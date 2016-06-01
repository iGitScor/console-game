// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Logs collection and puts them on this.data.logs
  getMeteorData() {
    let query = {};

    return {
      logs: Logs.find(query, {}).fetch(),
    };
  },

  renderAction() {
    return <Action />;
  },

  renderLogs() {
    // Get logs from this.data.logs
    return this.data.logs.map(function (log) {
      return <Log key={log._id} log={log} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = ReactDOM.findDOMNode(this.refs.termInput).value.trim();

    Logs.insert({
      text: text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.termInput).value = '';
    ReactDOM.findDOMNode(this.refs.termInput).setAttribute('size', 0);
  },

  changeSize() {
    ReactDOM.findDOMNode(this.refs.termInput).setAttribute(
      'size',
      Math.max(ReactDOM.findDOMNode(this.refs.termInput).value.length, 0)
    );
  },

  focusInput() {
    if (this.refs.termForm) {
      ReactDOM.findDOMNode(this.refs.termForm).classList.add('terminal__cursor--blink');
    }
  },

  blurInput() {
    if (this.refs.termForm) {
      ReactDOM.findDOMNode(this.refs.termForm).classList.remove('terminal__cursor--blink');
    }
  },

  render() {
    return (
      <div className="container terminal">
        <header>
          <h1>{i18n.__('console')}</h1>
        </header>
        <ul className="list--unstyled">
          {this.renderLogs()}
          {this.renderAction()}
          <li className="terminal__input">
            <form
              className="form--inline terminal__cursor--blink"
              ref="termForm"
              onSubmit={this.handleSubmit}>
              <input
                type="text"
                size="0"
                className="terminal__input-field"
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
