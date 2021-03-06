import styled from 'styled-components'
import {string, func} from 'prop-types'
import {Button} from '../../components'

export const Quotes = ({quote, speaker, onUpdate}) => {
  return (
    <Wrapper>
      <Quote>"{quote}"</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onClick={onUpdate}>Quote No Jutsu</Button>
    </Wrapper>
  )
}

// Quotes espera receber estas propriedades
Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdade: func
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`

const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 50px;
`
