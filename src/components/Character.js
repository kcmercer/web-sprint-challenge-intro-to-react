// Write your Character component here
// import axios from 'axios';
// import {useEffect, useState} from 'react';

// // const [characters, setCharacters] = useState([])

// useEffect(() => {
//   axios.get(`https://swapi.dev/api/people`)
//   .then(res => {
//     console.log(res.data);
//     setCharacters(res.data.results)
//    })
//   }, [])

function NewCharacters(props) {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

export {NewCharacters}