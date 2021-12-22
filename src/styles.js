import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  keypad: {
    background: '#262834',
    color: 'white',
    margin: '5px',
    fontSize: '1.2rem',
    fontWeight: '500'
  }
})


export const Main = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`

export const Container = styled.div`
  margin: auto;
  width: 300px;
  height: 400px;
  border: 12px solid black;
  border-radius: 8px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`

export const Screen = styled.input`
  grid-row: 1/2;
  background: black;
  color: white;
  outline: none;
  border: none;
`
export const Keyboard = styled.div`
  background: black;
  grid-row: 2/6;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`