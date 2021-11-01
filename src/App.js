import './App.css';
import { Header } from './Header';
import { Information } from './Info';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';
function App() {
  return (
    <div className="App">
      <Header/>
      <TodoProvider>

        <Information />
        <TodoList/>
      </TodoProvider>
    </div>
  );
}

export default App;
