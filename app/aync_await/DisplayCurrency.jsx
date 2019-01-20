import React from 'react';

class DisplayCurrency extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <p>{this.props.exchangeRate} {this.props.countryName} </p>
    </div>
      );
  }
}

export default DisplayCurrency;
