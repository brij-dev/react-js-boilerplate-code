'use-strict'

//Dependencies
import React, { Component } from "react";

import { connect } from 'react-redux'; //Redux support
import * as Actions from '../redux/actions'; //Redux support

import WebStorage from '../common/web_storage'; // local storage
import * as WebStorageKeys from '../common/web_storage_keys'; // local storage

import HttpBrowser from '../common/http_request'; // http request using jquery
import jquery from 'jquery' // For jquery http call
import Utils from '../common/utils' // For utility functions

import CONFIG from '../common/config' // Application level config

import { translate, Trans } from 'react-i18next';

var componentInstance;


class Home extends Component {

  constructor(props){

    super(props);

    this.state = {
      'api_data': []
    }

    componentInstance = this; // store component reference in a variable

  }

  // Before DOM Load
  componentWillMount(){

  }

  // After DOM Load
  componentDidMount(){

    this.getApiData()

  }

  // On DOM update
  componentDidUpdate(){

  }

  // On change of radio button selection change language
  changeLanguage(event){
    componentInstance.props.i18n.changeLanguage(event.target.value)
  }

  // An example of using http handler
  getApiData(){

    HttpBrowser.fetch(
      jquery,
      function(error, status, headers, data){

        // In case of error or invalid data response
        if(error || Utils.isNullOrUndefined(data)){

          console.log(CONFIG.SERVER_ERROR.MESSAGE);
          return;
        }

        componentInstance.setState({api_data:data});

      },
      CONFIG.BASE_URL + CONFIG.API_ENDPOINT_SAMPLE, // url construction
      CONFIG.GET_METHOD, // GET method
      {}, // Empty object in case of No Params
      CONFIG.JSON_REQUEST // for json request
    )

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
        <div>
          {
            this.state.api_data.map(
              (item) => (
                <div>
                  {
                    item['item_id']
                  }
                </div>
              )
            )
          }
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
