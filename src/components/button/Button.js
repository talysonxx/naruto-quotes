import styled from 'styled-components'
// import {string} from 'prop-types'

// export const Button = ({children}) => {
//     return(
//         <button>{children}</button>
//     )
// }

// espera que Button receba estas propriedades
// Button.propTypes = {
//     children: string
// }

export const Button = styled.button`
    background: #DC872C;
    color: #fff;
    border-radius: 0;
    border: none;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;

    &:hover{
        background: #a40000;
    }
`
