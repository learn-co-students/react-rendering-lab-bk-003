const React = require('react');

class Rating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    let increasing = false;
    let decreasing = false;
    if (this.props.rating > nextProps.rating) {
      decreasing = true
    } else if(this.props.rating < nextProps.rating) {
      increasing = true
    }
    this.setState({increasing: increasing, decreasing: decreasing})
  } 

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

module.exports = Rating;
