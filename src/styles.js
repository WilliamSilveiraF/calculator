import styled from "styled-components";

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
  background: black;
  width: 300px;
  height: 420px;
  border: 10px solid black;
  border-radius: 8px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`

export const Screen = styled.input`
  margin: auto;
  width: 280px;
  text-align: right;
  font-size: 1.5rem;
  font-weight: 700;
  grid-row: 1/2;
  background: black;
  color: white;
  outline: none;
  border: none;
`
export const Keyboard = styled.div`
  width: 100%;
  background: black;
  grid-row: 2/6;
  display: grid;
  grid-template-columns: repeat(4, 22.5%);
  justify-content: center;
  grid-gap: 2%;
`