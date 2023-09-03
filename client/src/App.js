// Styles
import { GlobalStyle } from './styles/Global.styles'
import { AppContainer } from './App.styles';
// Services
// Components
import TodoComp from './components/Todo/Todo.component'

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <TodoComp />
    </AppContainer>
  );
}

export default App;
