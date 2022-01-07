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
  const [result, setResult] = useState('teste')

  return (
    <Main>
      <Container>
        <Screen type='text' value={ result }>

        </Screen>
        <Keyboard>
          { keys.map((key, index) => {
            const { id, background, color, pad } = key
            return (
              <Button
                variant="contained"
                id={ id }
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
