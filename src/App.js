import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Container from './Container';

function App() {
  return (
    <div className="App bg-sky-500 px-4 py-6 flex flex-col gap-6">
      <Profile name="Shah Misbahul Islam"></Profile>
      <Container></Container>
    </div>
  );
}

export default App;
