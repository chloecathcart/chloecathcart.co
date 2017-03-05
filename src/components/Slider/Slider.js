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
    return (
      <div class="slider">
        <div class="slider-controls">
          <div
            class="prev"
            onClick={() => this.prev()}>
            <i class="icon-chevron-left" />
          </div>
          <div
            class="next"
            onClick={() => this.next()}>
            <i class="icon-chevron-right" />
          </div>
        </div>

        <ul
          class="slider-images"
          style={{
            width: this.props.images.length * 100 + '%',
            transform: `translateX(-${(this.state.index * 100) / this.props.images.length}%)`
          }}>
          {this.props.images.map(image =>
            <li key={image} class="slider-image">
              <img src={image} role="presentation" />
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







/*import React, { Component, PropTypes } from 'react';

const propTypes = {
  images: PropTypes.array.isRequired
};

const defaultProps = {
  images: [],
  infinite: true
};

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    this.setState({
      images: this.props.images
    });
  }

  prev() {

    const { index, images } = this.state;
    const clonedImages = images.slice(0);

    this.setState({
      index: state.index > 0 ? state.index - 1 : props.images.length - 1
    }));
  }

  next() {
    this.setState((state, props) => ({
      index: state.index < props.images.length - 1 ? state.index + 1 : 0
    }));
  }

  render() {

    const images = this.state.images || this.props.images;

    return (
      <div class="slider">
        <div class="slider-controls">
          <div
            class="prev"
            onClick={() => this.prev()}>
            <i class="icon-chevron-left" />
          </div>
          <div
            class="next"
            onClick={() => this.next()}>
            <i class="icon-chevron-right" />
          </div>
        </div>

        <ul
          class="slider-images"
          style={{
            width: images.length * 100 + '%',
            transform: `translateX(-${(this.state.index * 100) / this.props.images.length}%)`
          }}>
          {images.map(image =>
            <li class="slider-image">
              <img src={image} role="presentation" />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

Slider.defaultProps = defaultProps;
Slider.propTypes = propTypes;

export default Slider */
