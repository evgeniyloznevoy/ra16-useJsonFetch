import './App.css';
import GetData from './components/GetData';

const dataURL = 'http://localhost:7070/data';
const errorURL = 'http://localhost:7070/error ';
const loadingURL = 'http://localhost:7070/loading';

function App() {

  return (
    <div className="App">
      <GetData url={dataURL}/>
      <GetData url={errorURL}/>
      <GetData url={loadingURL}/>
    </div>
  );
}

export default App;