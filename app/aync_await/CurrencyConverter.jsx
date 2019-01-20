import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import DisplayCurrency from './DisplayCurrency.jsx';

/**
 * Example of Async and Await
 */
class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeRate: null,
      countryName: null,
    }
    this.convert = this.convert.bind(this);
    this.getExchangeRate = this.getExchangeRate.bind(this);
    this.currencyCode = this.currencyCode.bind(this);
  }
  
  async getExchangeRate(fromCurrency) {
    const response = await axios.get('http://www.apilayer.net/api/live?access_key=3d8d218d738631cd82a394a36218a749&format=1')
    const rates = response.data.quotes;
    const euro = 1 / rates[fromCurrency];

    return euro;
  }

  async currencyCode(currencyCode) {
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return response.data.map(country => country.name);
  }

  async convert(fromCurrency, toCurrency, amount) {
    const exchangeRate = await this.getExchangeRate(fromCurrency);
    const countryName  = await this.currencyCode(toCurrency);
    this.setState({
      exchangeRate,
      countryName
    });
  }

  render() {
    return(
    <div> 
    <div>
     <Button color="primary" onClick={() => this.convert('USDAED', 'HRK', 20)}>Convert Currency</Button>
    </div>
    <DisplayCurrency exchangeRate={this.state.exchangeRate} countryName={this.state.countryName} />
    </div>
      );
  }
}

export default CurrencyConverter;
