import  React from 'react';
import AllPuppies from './AllPuppies';
import SinglePuppy from './SinglePuppy';

const puppies = [{
    "id": 13,
    "name": "Daphne",
    "breed": "German Shepherd",
    "status": "field",
    "imageUrl": "http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg",
    "createdAt": "2021-09-11T20:08:02.539Z",
    "updatedAt": "2021-09-11T20:08:02.539Z",
    "teamId": 1,
    "cohortId": 1
  },
  {
    "id": 15,
    "name": "Duncan",
    "breed": "Collie",
    "status": "field",
    "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_49/cw_1012/ch_1518/APL/uploads/2020/01/Duncan-PBXVI-v2.jpg",
    "createdAt": "2021-09-11T20:08:02.539Z",
    "updatedAt": "2021-09-11T20:08:02.539Z",
    "teamId": 1,
    "cohortId": 1
  },
  {
    "id": 16,
    "name": "Filbert",
    "breed": "Shetland Sheepdog / Border Collie",
    "status": "field",
    "imageUrl": "http://r.ddmcdn.com/w_942/s_f/o_1/cx_35/cy_0/cw_942/ch_1413/APL/uploads/2019/12/Filbert-PBXVI.jpg",
    "createdAt": "2021-09-11T20:08:02.539Z",
    "updatedAt": "2021-09-11T20:08:02.539Z",
    "teamId": 1,
    "cohortId": 1
  },
  {
    "id": 19,
    "name": "Jack",
    "breed": "Chihuahua / Miniature Poodle",
    "status": "bench",
    "imageUrl": "http://r.ddmcdn.com/w_926/s_f/o_1/cx_42/cy_0/cw_926/ch_1389/APL/uploads/2019/12/Jack-PBXVI.jpg",
    "createdAt": "2021-09-11T20:08:02.539Z",
    "updatedAt": "2021-09-11T20:08:02.539Z",
    "teamId": 1,
    "cohortId": 1
   }];

const Main = () => {
    return (
        <div>
         <h1>Welcome To Puppy Bowl!!</h1>
            <AllPuppies puppy={puppies}/> 
            <SinglePuppy pup={puppies[1]}/>
    </div>
        
    );
};


export default Main;