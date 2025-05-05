// import './App.css'; // Keep or remove if App.css is unused
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main>
        <Homepage />
      </Main>
      <Footer />
    </>
  );
}

export default App;
