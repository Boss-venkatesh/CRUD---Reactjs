
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmpCreate from './components/EmpCreate';
import EmpDetails from './components/EmpDetails';
import EmpEdit from './components/EmpEdit';
import EmpListing from './components/EmpListing';

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>React JS CRUD  Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />} ></Route>
          <Route path='/employee/create' element={<EmpCreate />} > </Route>

          <Route path='/employee/detail/:empid' element={<EmpDetails />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />} > </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );


}

export default App;
