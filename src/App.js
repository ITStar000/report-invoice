import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './components/reports/Invoice'
import invoice from './data/invoice'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <Fragment>
            <PDFViewer style={{width: '90%', height : '100vh'}} className="app" >
                <Invoice invoice={invoice}/>
            </PDFViewer>
        </Fragment>
    );
  }
}

export default App;