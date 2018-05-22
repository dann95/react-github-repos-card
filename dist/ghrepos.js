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
          key: "render",
          value: function render() {
              return React$1.createElement(
                  "div",
                  null,
                  React$1.createElement("img", { src: this.props.photo }),
                  React$1.createElement(
                      "aside",
                      { style: { color: this.props.text } },
                      React$1.createElement(
                          "h1",
                          null,
                          this.props.name
                      ),
                      React$1.createElement(
                          "p",
                          null,
                          React$1.createElement(
                              "svg",
                              { xmlns: "http://www.w3.org/2000/svg", style: { fill: this.props.icons }, width: "14", height: "14", viewBox: "0 0 24 24" },
                              React$1.createElement("path", { d: "M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" })
                          ),
                          this.props.location
                      ),
                      React$1.createElement(
                          "p",
                          null,
                          React$1.createElement(
                              "svg",
                              { xmlns: "http://www.w3.org/2000/svg", style: { fill: this.props.icons }, width: "14", height: "14", viewBox: "0 0 24 24" },
                              React$1.createElement("path", { d: "M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" })
                          ),
                          this.props.bio
                      )
                  )
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
                  'a',
                  { href: this.props.url, target: '_blank' },
                  React$1.createElement(
                      'div',
                      { className: 'content' },
                      React$1.createElement(
                          'h1',
                          null,
                          this.props.name
                      ),
                      React$1.createElement(
                          'span',
                          null,
                          'stargazers: ',
                          this.props.stargazers
                      )
                  ),
                  React$1.createElement(
                      'svg',
                      { className: 'arrow', xmlns: 'http://www.w3.org/2000/svg', width: '48', height: '48',
                          viewBox: '0 0 48 48' },
                      React$1.createElement(
                          'g',
                          { className: 'nc-icon-wrapper', fill: '#444444' },
                          React$1.createElement('path', { d: 'M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z' })
                      )
                  )
              );
          }
      }]);
      return Repository;
  }(React$1.Component);

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "*, *:before, *:after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.ghrepos-area {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n}\n.ghrepos {\n    position: relative;\n    max-width: 420px;\n    padding: 40px 20px;\n    overflow: hidden;\n    margin: 0 auto;\n}\n@media (min-width: 1024px) {\n    .ghrepos {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n        -moz-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        -o-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n    }\n}\n.ghrepos main {\n    float: left;\n    width: 100%;\n    position: relative;\n}\n.ghrepos main section {\n    border-radius: 5px;\n    float: left;\n    width: 100%;\n}\n.ghrepos main section .content {\n    float: left;\n    width: 100%;\n    padding: 20px 30px 50px 30px;\n    position: relative;\n    text-align: center;\n}\n@media (min-width: 414px) {\n    .ghrepos main section .content {\n        text-align: left;\n    }\n}\n.ghrepos main section .content img {\n    display: inline-block;\n    width: 140px;\n    border-radius: 50%;\n}\n@media (min-width: 414px) {\n    .ghrepos main section .content img {\n        float: left;\n        width: 30%;\n        margin-right: 10%;\n    }\n}\n.ghrepos main section .content aside {\n    float: left;\n    width: 100%;\n    margin-top: 10px;\n}\n@media (min-width: 414px) {\n    .ghrepos main section .content aside {\n        width: 60%;\n    }\n}\n.ghrepos main section .content aside h1 {\n    font-weight: 100;\n    font-size: 22px;\n    margin-bottom: 10px;\n}\n.ghrepos main section .content aside p {\n    font-size: 14px;\n    letter-spacing: 0.5px;\n    line-height: 160%;\n}\n.ghrepos main .title {\n    float: left;\n    width: 100%;\n    /*background-color: #c63535;*/\n    max-height: 0px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    overflow: hidden;\n    -webkit-transition: all 0.55s;\n    -moz-transition: all 0.55s;\n    -o-transition: all 0.55s;\n    transition: all 0.55s;\n}\n.ghrepos main .title.active {\n    max-height: 100px;\n    -webkit-transition: all 1.3s;\n    -moz-transition: all 1.3s;\n    -o-transition: all 1.3s;\n    transition: all 1.3s;\n}\n.ghrepos main .title.active p {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1);\n    transition-delay: 0.2s;\n}\n.ghrepos main .title p {\n    padding: 15px 30px;\n    color: #fff;\n    font-size: 16px;\n    display: inline-block;\n    font-weight: 500;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    transition: all 0.3s;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    -o-transform: scale(0);\n    transform: scale(0);\n}\n.ghrepos main button {\n    position: absolute;\n    bottom: 0;\n    right: 50%;\n    border: 0;\n    width: 200px;\n    height: 48px;\n    text-align: center;\n    border-radius: 30px;\n    font-size: 16px;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    margin-bottom: -24px;\n    margin-right: -100px;\n    -webkit-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    transition: all 0.4s;\n    transition-delay: 0.1s;\n    outline: none;\n    overflow: hidden;\n    z-index: 10;\n    font-family: inherit;\n}\n.ghrepos main button span {\n    opacity: 1;\n    -webkit-transition: opacity 0.2s;\n    -moz-transition: opacity 0.2s;\n    -o-transition: opacity 0.2s;\n    transition: opacity 0.2s;\n    transition-delay: 0.4s;\n    display: block;\n    width: 200px;\n    float: left;\n    padding: 15px 0px;\n}\n.ghrepos main button svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    opacity: 0;\n    -webkit-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    transition: all 0.4s;\n}\n.ghrepos main button.active {\n    margin-right: 0;\n    right: 20px;\n    width: 65px;\n    height: 65px;\n    margin-bottom: -32.5px;\n    text-indent: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    border-radius: 65px;\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n.ghrepos main button.active span {\n    opacity: 0;\n    transition-delay: 0s;\n    width: 200px;\n}\n.ghrepos main button.active svg {\n    opacity: 1;\n    transition-delay: 0.5s;\n}\n.ghrepos nav {\n    float: left;\n    width: 100%;\n    overflow: hidden;\n    overflow-y: scroll;\n    max-height: 0px;\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n    -o-transition: all 0.5s;\n    transition: all 0.5s;\n}\n.ghrepos nav.active {\n    max-height: 200px;\n    -webkit-transition: all 1s;\n    -moz-transition: all 1s;\n    -o-transition: all 1s;\n    transition: all 1s;\n}\n.ghrepos nav.active a {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    -moz-transform: translateY(0px);\n    -ms-transform: translateY(0px);\n    -o-transform: translateY(0px);\n    transform: translateY(0px);\n    -webkit-transition: all 0.7s;\n    -moz-transition: all 0.7s;\n    -o-transition: all 0.7s;\n    transition: all 0.7s;\n}\n.ghrepos nav.active a:nth-of-type(1) {\n    transition-delay: 0.5s;\n}\n.ghrepos nav.active a:nth-of-type(2) {\n    transition-delay: 0.7s;\n}\n.ghrepos nav.active a:nth-of-type(3) {\n    transition-delay: 0.9s;\n}\n.ghrepos nav a {\n    float: left;\n    width: 100%;\n    margin-top: 18px;\n    background-color: #fff;\n    padding: 18px 20px;\n    border-radius: 5px;\n    text-decoration: none;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    transition: all 0.3s;\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n    -moz-transform: translateY(-10px);\n    -ms-transform: translateY(-10px);\n    -o-transform: translateY(-10px);\n    transform: translateY(-10px);\n    position: relative;\n}\n@media (min-width: 414px) {\n    .ghrepos nav a {\n        padding: 18px 30px;\n    }\n}\n.ghrepos nav a .arrow {\n    position: absolute;\n    right: 15px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -o-transform: translateY(-50%);\n    transform: translateY(-50%);\n}\n\n.ghrepos nav a .arrow path {\n    fill: #e6e6e6;\n}\n\n.ghrepos nav a .icon {\n    float: left;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    overflow: hidden;\n    margin-right: 20px;\n}\n.ghrepos nav a .icon svg {\n    width: 100%;\n    height: 100%;\n    padding: 14px;\n}\n.ghrepos nav a .icon svg path {\n    fill: #fff;\n}\n.ghrepos nav a .content h1 {\n    font-size: 20px;\n    font-weight: 400;\n    line-height: 160%;\n    letter-spacing: 0.4px;\n}\n.ghrepos nav a .content span {\n    font-size: 14px;\n    color: #b3b3b3;\n    display: block;\n    letter-spacing: 0.4px;\n}";
  styleInject(css);

  var GithubCard = function (_React$Component) {
      inherits(GithubCard, _React$Component);

      function GithubCard(props) {
          classCallCheck(this, GithubCard);

          var _this = possibleConstructorReturn(this, (GithubCard.__proto__ || Object.getPrototypeOf(GithubCard)).call(this, props));

          _this.handleButtonClick = function () {
              _this.setState(function (prev, props) {
                  return {
                      showRepos: !prev.showRepos
                  };
              });
          };

          _this.presentableRepositories = function () {
              return _this.sortRepositories(_this.filterRepositories());
          };

          _this.sortRepositories = function (repos) {
              return repos.sort(function (a, b) {
                  return b.stargazers_count - a.stargazers_count;
              });
          };

          _this.filterRepositories = function () {
              return _this.state.repos.filter(function (r) {
                  if (!_this.props.forks && r.fork) return false;

                  return true;
              });
          };

          _this.state = {
              name: '',
              user: '',
              location: '',
              bio: '',
              photo: '',
              repos: [],
              showRepos: false
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
                  { className: 'ghrepos-area' },
                  React$1.createElement(
                      'div',
                      { className: 'ghrepos' },
                      React$1.createElement(
                          'main',
                          null,
                          React$1.createElement(
                              'section',
                              { style: { backgroundColor: this.props.container.color } },
                              React$1.createElement(
                                  'div',
                                  { className: 'content' },
                                  React$1.createElement(User, {
                                      name: this.state.name,
                                      photo: this.state.photo,
                                      bio: this.state.bio,
                                      location: this.state.location,
                                      icons: this.props.container.icons,
                                      text: this.props.container.text
                                  }),
                                  React$1.createElement(
                                      'button',
                                      { onClick: this.handleButtonClick, className: this.state.showRepos ? 'active' : '', style: { backgroundColor: this.props.button.color, color: this.props.button.textColor } },
                                      React$1.createElement(
                                          'span',
                                          null,
                                          this.props.button.text
                                      ),
                                      React$1.createElement(
                                          'svg',
                                          { xmlns: 'http://www.w3.org/2000/svg', width: '48', height: '48',
                                              viewBox: '0 0 48 48' },
                                          React$1.createElement(
                                              'g',
                                              { className: 'nc-icon-wrapper', fill: '#444444' },
                                              React$1.createElement('path', { style: { fill: this.props.button.textColor }, d: 'M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z' })
                                          )
                                      )
                                  )
                              ),
                              React$1.createElement(
                                  'div',
                                  { className: 'title' + (this.state.showRepos ? ' active' : ''), style: { backgroundColor: this.props.container.strip } },
                                  React$1.createElement(
                                      'p',
                                      null,
                                      this.props.button.text
                                  )
                              )
                          )
                      ),
                      React$1.createElement(
                          'nav',
                          { className: this.state.showRepos ? 'active' : '' },
                          this.presentableRepositories().map(function (i, _i) {
                              return React$1.createElement(Repository, { name: i.name, stargazers: i.stargazers_count, url: i.html_url, key: _i });
                          })
                      )
                  )
              );
          }
      }]);
      return GithubCard;
  }(React$1.Component);

  var defaultSettings = {
      forks: true,
      button: {
          color: '#2a4366',
          text: 'repositories',
          textColor: '#fff'
      },
      container: {
          color: '#725252',
          strip: '#AB6D7D',
          text: '#fff',
          icons: '#AB7C94'
      }
  };

  var isPojo = function isPojo(o) {
  	var proto = Object.getPrototypeOf(o);
  	return proto === null || Object.getPrototypeOf(proto) === null;
  };

  var merge = function merge(x, y) {
  	if (y === undefined) {
  		return x;
  	}
  	if (y === null || x == null) {
  		return y;
  	}
  	if ((isPojo(x) || Array.isArray(x)) && isPojo(y)) {
  		// merge recursively y into x
  		Object.keys(y).forEach(function (key) {
  			x[key] = merge(x[key], y[key]);
  		});
  		Object.getOwnPropertySymbols(y).forEach(function (key) {
  			if (Object.getOwnPropertyDescriptor(y, key).enumerable) {
  				x[key] = merge(x[key], y[key]);
  			}
  		});
  		return x;
  	}
  	if (Array.isArray(x) && Array.isArray(y)) {
  		// concat
  		return x.concat(y);
  	}
  	if (typeof x.add === 'function' && typeof y.add === 'function') {
  		// Set-like
  		y.forEach(function (value) {
  			x.add(value);
  		});
  		return x;
  	}
  	if (typeof x.set === 'function' && typeof y.set === 'function') {
  		// Map-like
  		y.forEach(function (value, key) {
  			x.set(key, merge(x.get(key), value));
  		});
  		return x;
  	}
  	// if x is a number, boolean, string, symbol, function or complex object instance, then just replace
  	return y;
  };

  var mergify = function mergify() {
  	for (var _len = arguments.length, o = Array(_len), _key = 0; _key < _len; _key++) {
  		o[_key] = arguments[_key];
  	}

  	return o.reduce(function (a, b) {
  		return merge(a, b);
  	});
  };

  var mergify_1 = mergify;
  mergify.default = mergify;
  mergify.merge = merge;
  mergify.isPojo = isPojo;

  function index (el, user) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var options = mergify_1(defaultSettings, o);
      ReactDOM.render(React.createElement(GithubCard, {
          user: user,
          forks: options.forks,
          button: options.button,
          container: options.container
      }), el);
  }

  return index;

})));
