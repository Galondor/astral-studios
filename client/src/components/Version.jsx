import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Version = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/repos/Galondor/AstralOdyssey/releases/latest')
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <span className="version">{posts.tag_name}</span>
    );
}

export default Version;