import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './App.css';
import Board from './components/board';
import * as actions from './actions'
class App extends Component {

  componentWillMount(){
      //fetch and configure tiles
      this.props.fetchBadges();
  }
  render() {
    return (
      <div className="App">
        <Board tiles={this.props.tiles}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tiles: state.tiles
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
