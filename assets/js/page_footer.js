'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageFooter = function (_React$Component) {
  _inherits(PageFooter, _React$Component);

  function PageFooter(props) {
    _classCallCheck(this, PageFooter);

    var _this = _possibleConstructorReturn(this, (PageFooter.__proto__ || Object.getPrototypeOf(PageFooter)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(PageFooter, [{
    key: 'render',
    value: function render() {
      if (this.state.liked) {
        return 'You liked this.';
      }

      return React.createElement(
        'footer',
        { id: 'footer' },
        React.createElement(
          'div',
          { 'class': 'footer-top' },
          React.createElement(
            'div',
            { 'class': 'container' },
            React.createElement(
              'div',
              { 'class': 'row' },
              React.createElement(
                'div',
                { 'class': 'col-lg-3 col-md-6' },
                React.createElement(
                  'div',
                  { 'class': 'footer-info' },
                  React.createElement(
                    'h3',
                    null,
                    '\u682A\u5F0F\u4F1A\u793EMEMA'
                  ),
                  React.createElement(
                    'p',
                    null,
                    'A108 Adam Street ',
                    React.createElement('br', null),
                    'NY 535022, USA',
                    React.createElement('br', null),
                    React.createElement('br', null),
                    React.createElement(
                      'strong',
                      null,
                      'Phone:'
                    ),
                    ' +1 5589 55488 55',
                    React.createElement('br', null),
                    React.createElement(
                      'strong',
                      null,
                      'Email:'
                    ),
                    ' info@example.com',
                    React.createElement('br', null)
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          'div',
          { 'class': 'container' },
          React.createElement(
            'div',
            { 'class': 'copyright' },
            '\xA9 Copyright ',
            React.createElement(
              'strong',
              null,
              React.createElement(
                'span',
                null,
                '\u682A\u5F0F\u4F1A\u793EMEMA'
              )
            ),
            '. All Rights Reserved'
          )
        )
      );
    }
  }]);

  return PageFooter;
}(React.Component);

var domContainer = document.querySelector('#footer');
ReactDOM.render(React.createElement(PageFooter, null), domContainer);