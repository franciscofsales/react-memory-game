
const INITIAL_STATE = {loading:true};


export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'LOADING_COMPLETE':
          return {...state, loading:false};
        case 'LOADING_START':
          return {...state, loading:true};
        default:
            return state;
    }
}
