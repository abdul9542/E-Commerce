const INITIAL_STATE = {
    id:0
}

const idReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'ASKED':
            return{
                ...state,
                id:action.payload
            }
            default: return state
    }
}
export default idReducer;