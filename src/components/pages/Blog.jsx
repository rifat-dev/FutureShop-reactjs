import {useEffect} from 'react'

import {connect} from 'react-redux'
import {getPostsAction} from '../../store/action/postAction'
import PostModel from '../models/PostModel'

const Blog = (props) => {

    useEffect(()=>{
       props.getPostsAction()
    },[])


    return (
        <div className="row p-4" >
            <h3 className="my-2" >Posts</h3>
            {props.posts.map((post => (
                <div key={post._id} className="col-md-4 my-2">
                    <PostModel
                       post={post}
                    />
                </div>
            )))}
        </div>
    );
}

const mapToStateFromProps = state =>({
    posts:state.posts
})

export default connect(mapToStateFromProps,{getPostsAction})(Blog);
