
import './App.css';
//import { Route, Router, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Chat from './component/chat'
import Login from './component/Login'
import styled from 'styled-components';
import Header from './component/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>
              <Route path ="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
      
    </div>
  );
}

export default App;

const Container = styled.div`
width: 100%;
height: 100vh; 
background: orange;
`

const Main = styled.div`

background: blue;

`
