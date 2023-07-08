export const reducer = (state,action)=>{
    switch(action){
        case "cusine_data":{
            return {...state, showData : [...action.payload]}
        }

        default :{
            return state;
        }
    }
}