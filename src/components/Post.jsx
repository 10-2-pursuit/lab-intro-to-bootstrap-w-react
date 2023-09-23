import React from 'react';

const Post = ({postInfo}) => {
    const imgMap = {
        "Burano": "burano",
        "Chicago": "chicago",
        "Sevilla": "sevilla",
        "Dubai": "dubai",
        "London": "london",
        "Porto": "porto",
        "San Diego": "san-diego",
        "San Francisco": "san-francisco",
        "Seattle": "seattle",
        "Sevilla": "sevilla",
        "Shibuya": "shibuya"
    }

    return (
        <div 
            key={postInfo.id} 
            className='card'>
            <img 
                className='post-image-height'
                src={`/src/images/${imgMap[postInfo.location]}.jpg`} 
                alt="" />
            <div className='card-body d-flexbox'>
                <h5>{postInfo.title}</h5>
                <h6>{postInfo.location}</h6>
                <p className='Post'>{postInfo.content}</p>
                <div className="d-flex justify-content-end">
                <   button href="" className='btn backgroundOrange'>{`Go to post >`}</button>
                </div>
            </div>
        </div>
    );
}

export default Post;
