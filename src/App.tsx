import { TextField } from 'components/common/TextField';
import './App.css';
import Login from './routes/Login';

function App() {
  return (
    <main>
      <TextField variant='P1'>Example login</TextField>
      <Login />
    </main>
  );
}

export default App;
