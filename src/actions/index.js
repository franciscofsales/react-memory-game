import axios from 'axios';
const URL = 'https://services.sapo.pt/Codebits/listbadges';

export function fetchBadges(){
    let request = axios.get(URL);
    return {
        type: 'FETCH_BADGES',
        payload: request
    };
}

export function flipTile(tileId, tileIndex){
    return dispatch => {
     dispatch(flip(tileId, tileIndex));
     setTimeout(()=>dispatch(checkFlip(tileId, tileIndex)), 750);
    }
}

function flip(tileId, tileIndex){
  return {
      type: 'TILE_FLIP',
      payload: {
        id:tileId,
        index: tileIndex
      }
  };
}

function checkFlip(tileId, tileIndex){
  return {
    type: 'CHECK_FLIP',
    payload: {
      id:tileId,
      index: tileIndex
    }
  }
}
