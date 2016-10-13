import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MView from '../components/m-view';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';

import {
  View
} from 'react-native';

let strOut;

class Main extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <View>
      <MView
      str={this.props.str}
      handleSetStr={this.handleSetStr}
      />
      </View>
    )
  }

  handleSetStr=()=>{
    // this.props.actionSetStr('sdfasdfasdfasdfafsdfsd');
    this.props.goForBaidu();
  }
}

export default Main;
