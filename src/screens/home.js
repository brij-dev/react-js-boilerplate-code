'use-strict'

//Dependencies
import React, { Component } from "react";

import { connect } from 'react-redux'; //Redux support
import * as Actions from '../redux/actions'; //Redux support

import WebStorage from '../common/web_storage'; // local storage
import * as WebStorageKeys from '../common/web_storage_keys'; // local storage


class Home extends Component {


  // Before DOM Load
  componentWillMount(){

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
        console.log(this.props);
    return(

      <div className="main-container">
        Welcome to Landing Screen {this.props.AppData['app_name']} {JSON.parse(WebStorage.getDataFromWebStorage(WebStorageKeys.APP_DATA_KEY))['app_version']}
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


export default connect(mapStateToProps, mapDispatchToProps)(Home);
