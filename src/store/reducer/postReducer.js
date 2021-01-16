import * as Types from '../action/Types'

const postReducer = (state = [], action) =>{
    switch(action.type){
       case Types.LOAD_POST:{
           return action.palyload.posts
       }
       default: return state
    }
}

export default postReducer