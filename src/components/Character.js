// Write your Character component here
import styled from 'styled-components';

const CharacterH2 = styled.h2`
font-size: 3rem;
color: #2A9D8F;
text-shadow: 2px 2px black;
text-align: left;
margin-top: 1%;
margin-bottom: 2%;
margin-left: 5%;
`
const CharacterP = styled.p`
font-size: 1rem;
color: 'black';
text-align: left;
margin-top: 1%;
margin-left: 10%;
`

function NewCharacters(props) {
  return (
    <div>
      <CharacterH2>{props.name}</CharacterH2>
      <CharacterP>Birth Year - {props.birth_year}</CharacterP>
      <CharacterP>Gender - {props.gender}</CharacterP>
      <CharacterP> Height - {props.height}</CharacterP>
    </div>
  );
}

export {NewCharacters}