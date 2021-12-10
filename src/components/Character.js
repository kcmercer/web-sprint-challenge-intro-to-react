// Write your Character component here
import styled from 'styled-components';

const CharacterH2 = styled.h2`
font-size: 3rem;
color: #2A9D8F;
text-shadow: 2px 2px black;
text-align: left;
margin-left: 5%;
`

function NewCharacters(props) {
  return (
    <div>
      <CharacterH2>{props.name}</CharacterH2>
    </div>
  );
}

export {NewCharacters}