import React, { useEffect, useState } from 'react';
import { key } from 'localforage';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categoric, setCategoric] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/catagories')
        .then(res => res.json())
        .then(data => setCategoric(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <h3> All Category</h3>
            <div>
                {
                    categoric.map(category =>  <p key={category.id}><Link to={`category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;