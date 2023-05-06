import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {

    let data = useLoaderData()


    return (
        <div>

            <h1>{data.length}</h1>

            {
                data.map(res => <p>{res.name}</p>)
            }

        </div>
    );
};

export default User;