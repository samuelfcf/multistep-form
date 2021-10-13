import styled from "styled-components"

const Container = styled.div`
  background-color: #02044A;
  color: #FFFFFF;
  min-height: 100vh;
`

const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Steps = styled.div`
  flex: 1;
  display: flex;

`

const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #16195C;
`

const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`

export {
  Container,
  Area,
  Sidebar,
  Steps,
  Page
}