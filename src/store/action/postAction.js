import * as Types from './Types'
import posts from '../../utils/posts'

export const getPostsAction = () => dispatch =>{
    dispatch({
        type: Types.LOAD_POST,
        palyload:{
            posts: posts
        }
    })
}

