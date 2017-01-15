import React from 'react';
import './App.css';
import Table from './Table';
import Navigation from './Navigation';
import Search from './Search';
import TableButtons from './TableButtons';
const APIurl = "https://gist.githubusercontent.com/espinet/922527b7ea1606127f7dba413a911937/raw/245370f480934a50eb3fa68891fc9476cce894e2/secondary-levels.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount() {
  fetch(APIurl, {
      method: 'get'
    }).then(response => response.json()
    ).then(resp =>
      this.setState({data:resp.secondaryLevels})
    ).catch(err => console.log(err));
  }

  render() {
    //Only display the app once the data is fetched, or else we will get an empty array upon load
    var displayApp;
    if (this.state.data.length > 0) {
      displayApp = <Table data={this.state.data} />
    }
    return (
      <div className="app__container">
        <header>
          <h1>Market</h1>
        </header>
        <Navigation/>
        <Search/>
        <div className="App table__container">
         {displayApp}
        </div>
        <TableButtons/>
      </div>
    );
  }
}

export default App;