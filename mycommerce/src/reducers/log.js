const INITIAL_STATE = {
    islogged:true
}

const loggedReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'LOGGED':
            return{
                ...state,
                islogged:action.payload
            }
            default: return state
    }
}
export default loggedReducer;