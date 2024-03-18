import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cordinator from './pages/Cordinator';
import AddUser from './pages/AddUser';
import CordinatorAddMarks from './pages/CordinatorAddMarks';
import CordinatorPermission from './pages/CordinatorPermission';
import CordinatorPresentation from './pages/CordinatorPresentation';
import CordinatorGroupSearch from './pages/CordinatorGroupSearch';
import CordinatorAssesment from './pages/CordinatorAssesment';
import CordinatorRubrics from './pages/CordinatorRubrics';
import CordinatorVIewUser from './pages/CordinatorVIewUser';


function App() {
  return (
    <div className="App">
      
     <Router>
    
        <Routes>
          <Route exact path="/" element={<Cordinator/>} />
          <Route exact path="/addusers" element={<AddUser/>} />
          <Route exact path="/addmarks" element={<CordinatorAddMarks/>} />
          <Route exact path="/add-permission" element={<CordinatorPermission/>} />
          <Route exact path="/add-presentation" element={<CordinatorPresentation/>} />
          <Route exact path="/groups" element={<CordinatorGroupSearch/>} />
          <Route exact path="/assesment" element={<CordinatorAssesment/>} />
          <Route exact path="/rubrics" element={<CordinatorRubrics/>} />
          <Route exact path="/viewuser" element={<CordinatorVIewUser/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
