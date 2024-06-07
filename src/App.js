import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import Search from './components/Search';
import ViewAll from './components/ViewAll';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddStudent/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/delete' element={<Delete/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>

   
  );
}

export default App;
