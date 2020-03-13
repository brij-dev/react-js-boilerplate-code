'use-strict'

import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
  Route
} from 'react-router-dom';

import { connect } from 'react-redux'; //Redux support
import * as Actions from '../redux/actions'; //Redux support

// all-screens
import Home from "../screens/home";


class RootNavigator extends Component {

  render() {

    return (

      <Switch>
        <Route path='/' component={Home} {...this.props} />
      </Switch>

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


export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
