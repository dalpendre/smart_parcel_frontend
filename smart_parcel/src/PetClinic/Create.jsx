import React from 'react';
import { Link } from 'react-router-dom';
import { API_ENDPOINT } from '../env';

class Create extends React.Component 
{
    render() 
    {
        return (
            <div>
                <Link to="/PetClinic/Index">
                    <button>Go back</button>
                </Link>
                <h2>New owner</h2>
                
            </div>
        );
    }
}

export default Create;