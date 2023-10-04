import styled from 'styled-components'

const StyledMoveEntry = styled.p`
  padding: 8px;          /* Add padding */
  border: 2px solid red; /* Add a colored border */
  font-size: 16px;       /* Set the font size */
  /* You can add more styles here as needed */
`;

function MoveEntry({moveName}) {
    return <StyledMoveEntry>{moveName}</StyledMoveEntry>;
}

export function Move ({moves}) {
    const output = moves.map((move, index) => (
        <MoveEntry key ={index} moveName = {move["move"]["name"]}/>
    ))
    return <div>{output}</div>
}