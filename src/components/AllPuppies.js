import React from 'react';

const AllPuppies = (props) => {
     console.log(props)
    return (
    <div>
        <h1>All the Puppies</h1>
        <h2>This Puppy is {props.puppy.name} </h2>
    </div>    
    );
};
    

        
   export default AllPuppies;

