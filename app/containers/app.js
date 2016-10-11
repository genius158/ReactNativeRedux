import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Main from '../containers/main';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';

import {
  View
} from 'react-native';

let strOut;

class App extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <View>
      <Main {...this.props} />
      </View>
    )
  }
}


const mapStateToProps =(state)=>{
  alert('mapStateToProps'+state+" "+state.str);
  const { str } = state;
  return{
    state
  };
}

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators(actionCreators,dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps )(App)
