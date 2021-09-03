import {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import narutoImg from '../../images/naruto.png'
import {Quotes} from '../../components'
import {getQuote} from '../../services/quotesServices'
import jutsoSound from '../../sounds/jutso.mp3'

const audio = new Audio(jutsoSound)

export function App() {
  const isMounted = useRef(true)
  console.log(isMounted)

  const [quoteState, setQuoteState] = useState({
    quote: 'loading quote...',
    speaker: 'loading speaker...'
  })

  const onUpdate = async () => {
    const quote  = await getQuote()

    if (isMounted.current) {
      audio.play()
      setQuoteState(quote)
    }
  }

  // use effect é executado quando o componente é montado e se você retornar uma função ela é executada quando o componente é desmontado 
  useEffect(() => {
    onUpdate()

    return () => {
      isMounted.current = false
    }
  }, [])

  return(
    <Content>
        <Quotes
        // mesma coisa
        // quote={quoteState.quote}
        // speaker={quoteState.speaker}
        {...quoteState}
        onUpdate={onUpdate}/>

        <NarutoImg
        src={narutoImg}
        alt="Naruto com uma Kunai"/>
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
`

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`
