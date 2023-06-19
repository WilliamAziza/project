import Calculator from "./components/Calculator";
import TaskManager from "./components/taskManager";
import styles from './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

function App() {
  return (
    
    <Container >
      <TaskManager/>

    </Container>
  );
}

export default App;
