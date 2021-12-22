import React, { useState } from "react";
import 
{ 
  Main, 
  Container,
  Screen,
  Keyboard,
  useStyles
} from './styles'
import keys from "./data";
import { Button } from '@material-ui/core'

function App() {
  const [result, setResult] = useState('teste')
  const classes = useStyles()
  return (
    <Main>
      <Container>
        <Screen type='text' value={ result }>

        </Screen>
        <Keyboard>
          { keys.map((key, index) => {
            console.log(key.id)
            return (
              <Button
                variant="contained"
                id={ key.id }
                className={classes.keypad}
              >
                { key.pad }
              </Button>
            );
          })}
        </Keyboard>
      </Container>
    </Main>
  );
}

export default App;
