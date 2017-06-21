import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  
  renderTitle() {
    if (this.props.title) {
      return <h1 className='title-bar'>{this.props.title}</h1>;
    }
  }

  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className='title-bar__subtitle'>{this.props.subtitle}</h2>;
    }
  }

  render () {
    return (
      <div className="title-bar">
        <div className="wrapper">
          {this.renderTitle()}
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};