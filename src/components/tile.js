import React from 'react';
import '../styles/tile.css';

export default class Tile extends React.Component {
  constructor(props){
    super(props);
    this.renderContent = this.renderContent.bind(this);

  }

  render() {

    return (
      <div
        style={{width: this.props.width, height:100, marginBottom: 20, marginTop:20}}
        className="tile"
        onClick={this.handleOnClick.bind(this)}>
          {this.renderContent()}
      </div>
      );
  }
  handleOnClick(){
    this.props.handleClick(this.props.tile.id, this.props.tileIndex);
  }

  renderContent(){
    let content = null;
    if(!this.props.tile)
      return (<p>Loading..</p>);

    if(this.props.tile.flipped){
      // content = <p>{this.props.tile.id}</p>;
      content = <img role="presentation" src={this.props.tile.img} className="imgTile"/>;
    }
    else
      content = <div className="backgroundTile" />
    return content;
  }
}
