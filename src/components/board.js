import React from 'react';
import '../styles/board.css';
import Tile from './tile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Board extends React.Component {

  constructor(props){
    super(props);
    this.renderTiles = this.renderTiles.bind(this);
  }

  render() {
    return (
      <div className="boardContainer">
        {this.renderTiles()}
      </div>
    );
  }

  onTileClick(tile_id, tileIndex){
    if(!this.props.tiles.currentFlip){
      this.props.flipTile(tile_id, tileIndex);
    }
  }

  renderTiles(){
    let tiles = [];
    for(let k = 0; k < this.props.tiles.tiles.length; k++)
      tiles.push(
        <Tile
          key={k} width={Math.floor(100/6)+'%'} tile={this.props.tiles.tiles[k]}
          handleClick={this.onTileClick.bind(this)} tileIndex={k}/>
      );
    if(!tiles.length)
      return (<p>Loading..</p>);
    return tiles;
  }
}

function mapStateToProps(state){
  return{
    tiles: state.tiles
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
