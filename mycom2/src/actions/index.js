export const submit = (payload)=>{
    return{
        type:'ON_SUBMIT',
        payload
    }    
}

export const cred = (payload)=>{
    return{
        type:'ACTUAL_VALUE',
        payload
    }    
}
export const logged = (payload)=>{
    return{
        type:'LOGGED',
        payload
    }    
}
export const carded = (payload) =>{
    return{
        type:'CARD_DATA',
        payload
    }
}