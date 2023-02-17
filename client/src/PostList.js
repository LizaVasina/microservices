import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CommentCreate } from './CommentCreate';
import { CommentList } from './CommentList';

export const PostList = () => {
    const [ posts, setPosts ] = useState({});
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts')
                                .catch(err => console.log('🚀 11: ', err.message));;
        console.log('🚀 11: ', res.data);
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(({ id, title, comments }) => {
        return (
            <div key={id} className="card" style={{ width: '30%', marginBottom: '20px' }}>
                <div className='card-body'>
                    <h3>{title}</h3>
                    <CommentList comments={comments} />
                    <CommentCreate postId={id} />
                </div>
            </div>
        )
    })

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedPosts}
        </div>
    )
}