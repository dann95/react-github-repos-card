(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global.ghrepos = factory(global.React,global.ReactDOM));
}(this, (function (React$1,ReactDOM) { 'use strict';

  React$1 = React$1 && React$1.hasOwnProperty('default') ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var User = function (_React$Component) {
      inherits(User, _React$Component);

      function User(props) {
          classCallCheck(this, User);

          var _this = possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

          _this.state = {};
          return _this;
      }

      createClass(User, [{
          key: 'render',
          value: function render() {
              return React$1.createElement(
                  'div',
                  null,
                  'Name: ',
                  this.props.name,
                  ' ',
                  React$1.createElement('br', null),
                  'Bio: ',
                  this.props.bio,
                  ' ',
                  React$1.createElement('br', null),
                  'Location: ',
                  this.props.location,
                  ' ',
                  React$1.createElement('br', null),
                  'Photo: ',
                  React$1.createElement('img', { src: this.props.photo }),
                  ' ',
                  React$1.createElement('br', null),
                  'Repos: ',
                  JSON.stringify(this.props.repos)
              );
          }
      }]);
      return User;
  }(React$1.Component);

  var Repository = function (_React$Component) {
      inherits(Repository, _React$Component);

      function Repository(props) {
          classCallCheck(this, Repository);

          var _this = possibleConstructorReturn(this, (Repository.__proto__ || Object.getPrototypeOf(Repository)).call(this, props));

          _this.state = {};
          return _this;
      }

      createClass(Repository, [{
          key: 'render',
          value: function render() {
              return React$1.createElement(
                  'div',
                  null,
                  'Repository...',
                  React$1.createElement('br', null),
                  'name: ',
                  this.props.name,
                  React$1.createElement('hr', null)
              );
          }
      }]);
      return Repository;
  }(React$1.Component);

  var GithubCard = function (_React$Component) {
      inherits(GithubCard, _React$Component);

      function GithubCard(props) {
          classCallCheck(this, GithubCard);

          var _this = possibleConstructorReturn(this, (GithubCard.__proto__ || Object.getPrototypeOf(GithubCard)).call(this, props));

          _this.state = {
              name: '',
              user: '',
              location: '',
              bio: '',
              photo: '',
              repos: []
          };

          _this.fetchUserData(props.user);
          return _this;
      }

      createClass(GithubCard, [{
          key: 'fetchUserData',
          value: async function fetchUserData(ghuser) {

              var _ref = await Promise.all([fetch('https://api.github.com/users/' + ghuser).then(function (response) {
                  return response.json();
              }), fetch('https://api.github.com/users/' + ghuser + '/repos').then(function (response) {
                  return response.json();
              })]),
                  _ref2 = slicedToArray(_ref, 2),
                  user = _ref2[0],
                  repos = _ref2[1];

              this.setState(function (prev, props) {
                  return {
                      user: user.login,
                      name: user.name,
                      bio: user.bio,
                      photo: user.avatar_url,
                      location: user.location,
                      repos: repos
                  };
              });
          }
      }, {
          key: 'render',
          value: function render() {
              return React$1.createElement(
                  'div',
                  null,
                  React$1.createElement(
                      'h1',
                      null,
                      'GithubCard'
                  ),
                  React$1.createElement(User, { name: this.state.name, bio: this.state.bio, photo: this.state.photo, user: this.state.user, location: this.state.location }),
                  React$1.createElement('hr', null),
                  this.state.repos.map(function (i) {
                      return React$1.createElement(Repository, { name: i.name });
                  })
              );
          }
      }]);
      return GithubCard;
  }(React$1.Component);

  function index (el, user) {
      ReactDOM.render(React.createElement(GithubCard, { user: user }), el);
  }

  return index;

})));
