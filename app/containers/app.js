import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Main from '../containers/main';
import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';

import {
  View
} from 'react-native';

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
  const {setStr}=state;
  return{
    str:setStr.str,
  };
}

const mapDispatchToProps = (dispatch)=>{
  const actions = bindActionCreators(actionCreators,dispatch);
  return actions;
}

export default connect( mapStateToProps, mapDispatchToProps )(App)
