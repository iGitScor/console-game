Login = React.createClass({
  getInitialState() {
    return {
      name: null,
      location: null,
    };
  },

  handleChange(e) {
    var state = {};
    state[e.target.id] = e.target.value;

    this.setState(state);
    this.refs.loginError.classList.add('hide');
  },

  login(event) {
    event.preventDefault();

    this.refs.loginForm.classList.add('loading');
    this.refs.loginButton.innerHTML = i18n.__('state.loading') + '...';

    var state = this.state;
    var refs = this.refs;
    Accounts.createUser(
      {
        username: state.name,
        password: state.location,
      },
      function callback(creationError) {
        if (creationError) {
          Meteor.loginWithPassword(
            state.name,
            state.location,
            function (loginError) {
              if (loginError) {
                refs.loginForm.classList.remove('loading');
                refs.loginButton.innerHTML = i18n.__('login.connect');
                refs.loginError.classList.remove('hide');
              }
            }
          );
        }
      }
    );
  },

  render() {
    return (
      <form className="login" ref="loginForm" onSubmit={this.login}>
        <p className="title">{i18n.__('login.title')}</p>
        <input
          type="text"
          id="name"
          placeholder={i18n.__('login.inputs.name')}
          autofocus
          value={this.state.name}
          onChange={this.handleChange} />
        <i className="fa fa-user"></i>
        <input
          type="text"
          id="location"
          placeholder={i18n.__('login.inputs.location')}
          value={this.state.location}
          onChange={this.handleChange} />
        <i className="fa fa-globe"></i>
        <small className="error hide" ref="loginError">{i18n.__('login.error')}</small>
        <button disabled={!(this.state.name && this.state.location)}>
          <i className="spinner"></i>
          <span className="state" ref="loginButton">{i18n.__('login.connect')}</span>
        </button>
      </form>
    );
  },
});
