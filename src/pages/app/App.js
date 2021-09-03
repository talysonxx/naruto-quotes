import styled from 'styled-components'
import narutoImg from '../../images/naruto.png'
import {Quotes} from '../../components'
import {getQuote} from '../../services/quotesServices'

export function App() {
  const onUpdate = async () => {
    const quote  = await getQuote()

    console.log(quote)
  }
  return(
    <Content>
        <Quotes quote={'sim'} onUpdate={onUpdate} speaker={'eu'}/>
        <NarutoImg src={narutoImg}/>
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
