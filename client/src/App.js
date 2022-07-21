import './App.css';
import About from './components/About';
import Edit from './components/Edit';
import Home from './components/Home';
import AddUser from './components/AddUser';
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/edit" element={<Edit/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/users/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
