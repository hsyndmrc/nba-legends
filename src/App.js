import ContainerCard from "./components/ContainerCard";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="text-center mt-5">
        <Header />
        <ContainerCard />
      </Container>
    </div>
  );
}

export default App;
