import React, { Component, PropTypes } from 'react';

const propTypes = {
  images: PropTypes.array.isRequired
};

const defaultProps = {
  images: []
};

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  prev() {
    this.setState((state, props) => ({
      index: state.index > 0 ? state.index - 1 : props.images.length - 1
    }));
  }

  next() {
    this.setState((state, props) => ({
      index: state.index < props.images.length - 1 ? state.index + 1 : 0
    }));
  }

  render() {
    console.debug(this);

    return (
      <div class="slider">
        <div class="slider-controls">
          <div
            class="prev"
            onClick={() => this.prev()}>
            <i class="entypo-left-open" />
          </div>
          <div
            class="next"
            onClick={() => this.next()}>
            <i class="entypo-right-open" />
          </div>
        </div>

        <ul
          class="slider-images"
          style={{
            width: this.props.images.length * 100 + '%',
            transform: `translateX(-${(this.state.index * 100) / this.props.images.length}%)`
          }}>
          {this.props.images.map(image =>
            <li class="slider-image">
              <img src={`/public/${image}`} role="presentation" />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;

export default Slider;
