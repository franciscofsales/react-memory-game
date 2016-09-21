
const INITIAL_STATE = {tiles:[], lastFlip:null, currentFlip: null};


export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'TILE_FLIP':
            let newTile = state.tiles[action.payload.index];
            newTile.flipped = !newTile.flipped;


            return {
              ...state,
              tiles: [
                ...state.tiles.slice(0, action.payload.index),
                newTile,
                ...state.tiles.slice(action.payload.index+1)
              ],
              currentFlip: action.payload
            };

        case 'CHECK_FLIP':
          let flipped = 0;
          state.tiles.forEach((tile)=>{
            if(tile.flipped)
              flipped++;
          })

          if(flipped % 2 === 0) //look for match
          {
            let foundMatch = false;
            state.tiles.forEach((tile)=>{
               if(tile.flipped && tile.id === action.payload.id && state.tiles.indexOf(tile) !== action.payload.index)
               {
                 foundMatch = true;
               }
            });
            if(foundMatch){
              return {
                ...state,
                lastFlip: null,
                currentFlip: null
              };
            }
            else{
              let cTiles = [];
              for(let j = 0; j < state.tiles.length; j++){
                if(j === state.currentFlip.index || j === state.lastFlip.index){
                  let tempTile = state.tiles[j];
                  tempTile.flipped = false;
                  cTiles.push(tempTile);
                }
                else {
                  cTiles.push(state.tiles[j]);
                }
              }
              return {
                tiles: cTiles,
                lastFlip: null,
                currentFlip: null
              }

            }

          }
          return {
            ...state,
            lastFlip: state.currentFlip,
            currentFlip: null
          };
        case 'FETCH_BADGES':
          if(action.payload.status !== 200)
          {
            alert('Can\'t reach Codebits server.');
            return state;
          }
          const pickedData = action.payload.data.splice(0, 9);
          let newTiles = pickedData.concat(pickedData);
          let j, x, i;
          for (i = newTiles.length; i; i--) {
              j = Math.floor(Math.random() * i);
              x = newTiles[i - 1];
              newTiles[i - 1] = newTiles[j];
              newTiles[j] = x;
          }
          let cleanTiles = newTiles.map((tile) => {
            return {
              id: tile.id,
              img: tile.img,
              flipped: false
            }
          });
          let newState = {
            ...state,
            tiles: cleanTiles
          };
          return newState;
        default:
            return state;
    }
}
