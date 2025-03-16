import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to={'/uncontrolled-form'}> simple-form </Link>
      <Link to={'/react-hook-form'}> react-hook-form </Link>
    </div>
  );
}

export default App;
