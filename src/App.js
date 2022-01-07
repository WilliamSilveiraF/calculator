import React, { useState } from "react";
import 
{ 
  Main, 
  Container,
  Screen,
  Keyboard
} from './styles'
import keys from "./data";
import { Button } from '@material-ui/core'

function App() {
  const [result, setResult] = useState('')
  
  const handleClick = (value, id) => {
    if (value) {
      setResult(result.concat(value))
    } else if (id === 'RESET') {
      setResult('')
    } else if (id === 'DEL') {
      setResult(result.slice(0, -1))
    } else if (id === 'RESULT') {
      try {
        setResult(eval(result).toString())
      } catch (err) {
        setResult('Error')
      }
    }
  }
  
  return (
    <Main>
      <Container>
        <Screen type='text' value={ result }>

        </Screen>
        <Keyboard>
          { keys.map((key) => {
            const { id, background, color, pad, value } = key
            return (
              <Button
                variant="contained"
                id={ id }
                onClick={() => handleClick(value, id)}
                style={{
                  background: `${background ? background : '#262834'}`,
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  color: `${color ? color : 'white'}`,
                }}
              >
                { pad }
              </Button>
            );
          })}
        </Keyboard>
      </Container>
    </Main>
  );
}

export default App;
