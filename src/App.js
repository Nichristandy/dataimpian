import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Listing from './Listing';
import Add from './Add';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
     <h1></h1> table  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Listing/>}></Route>
      <Route path='/data/add' element={<Add/>}></Route>
      <Route path='/data/edit/:productid' element={<Edit/>}></Route>

    </Routes>
  </BrowserRouter>
    </div>
  );

}

export default App;
