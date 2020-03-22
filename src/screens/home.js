'use-strict'

//Dependencies
import React, { Component } from "react";

import { connect } from 'react-redux'; //Redux support
import * as Actions from '../redux/actions'; //Redux support

import WebStorage from '../common/web_storage'; // local storage
import * as WebStorageKeys from '../common/web_storage_keys'; // local storage

import { translate, Trans } from 'react-i18next';

var componentInstance;

class Home extends Component {

  constructor(props){

    super(props);
    componentInstance = this; // store component reference in a variable

  }

  // Before DOM Load
  componentWillMount(){

  }

  // After DOM Load
  componentDidMount(){

  }

  // On DOM update
  componentDidUpdate(){

  }

  // On change of radio button selection change language
  changeLanguage(event){
    componentInstance.props.i18n.changeLanguage(event.target.value)
  }

  // On Props Change
  componentWillReceiveProps(nextProps){

  }

  // Renders UI
  render() {

    return(

      <div className="main-container">
          { this.props.t('welcome_react') + ' ' + this.props.AppData['app_name'] + JSON.parse(WebStorage.getDataFromWebStorage(WebStorageKeys.APP_DATA_KEY))['app_version']}
        <div onChange={this.changeLanguage}>
          <input type="radio" value="en" name="language" defaultChecked /> English
          <input type="radio" value="hi" name="language"/> Hindi
        </div>
      </div>

    )

  }

}

// Converting states(globel states) to props
function mapStateToProps(state){
  return {
    AppData: state.AppDataReducer
  }
}

// Converting dispatch functions to props
const mapDispatchToProps = (dispatch) => ({
  updateAppData: (AppData) => dispatch({type: Actions.UPDATE_APP_DATA, payload: AppData}),
});


export default connect(mapStateToProps, mapDispatchToProps)(translate('translation')(Home));
