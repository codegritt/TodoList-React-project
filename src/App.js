import "./App.css";
import GeekScore from "./GeekScore";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <GeekScore score="100"></GeekScore>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
