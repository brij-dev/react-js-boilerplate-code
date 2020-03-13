'use-strict'

//Dependencies
import React, { Component } from "react";

import { connect } from 'react-redux'; //Redux support
import * as Actions from './redux/actions'; //Redux support

import WebStorage from './common/web_storage'; // local storage
import  * as WebStorageKeys from './common/web_storage_keys'; // local storage

// Navigation
import RootNavigator from "./navigation/root_navigator";
import {withRouter} from 'react-router-dom';

const APP_DATA = require('./resources/data/app_data.json');


class App extends Component {


  // Before DOM Load
  componentWillMount(){

    // Updating app data in RAM (redux memory)
    this.props.updateAppData(APP_DATA);

    WebStorage.saveDataInWebStorage(WebStorageKeys.APP_DATA_KEY, JSON.stringify(APP_DATA));

  }

  // After DOM Load
  componentDidMount(){

  }

  // On DOM update
  componentDidUpdate(){

  }

  // On Props Change
  componentWillReceiveProps(nextProps){

  }

  // Renders UI
  render() {

    return(

      <div className="main-container">
        <RootNavigator/>
      </div>

    )

  }

}


function mapStateToProps(state){
  return {
    AppData: state.AppDataReducer
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateAppData: (AppData) => dispatch({type: Actions.UPDATE_APP_DATA, payload: AppData}),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
