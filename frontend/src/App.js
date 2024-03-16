import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cordinator from './pages/Cordinator';
import AddUser from './pages/AddUser';
import AddUser2 from './pages/ExaminaraTable';
import Examinarmarkadd from './pages/Examinaraddmarks';
import CordinatorAddMarks from './pages/CordinatorAddMarks';


function App() {
  return (
    <div className="App">
      
     <Router>
    
        <Routes>
          <Route exact path="/" element={<Cordinator/>} />
          <Route exact path="/addusers" element={<AddUser/>} />
          <Route exact path="/addmarks" element={<CordinatorAddMarks/>} />
          <Route exact path="/examinartable" element={<AddUser2/>} />
          <Route exact path="/examinaraddmark" element={<Examinarmarkadd/>} />
          
 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
