import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cordinator from './pages/Cordinator';
import AddUser from './pages/AddUser';
import CordinatorAddMarks from './pages/CordinatorAddMarks';
import MemberPresentation from './pages/MemberPresentation';
import ProjectMember from './pages/ProjectMember';


function App() {
  return (
    <div className="App">
      
     <Router>
    
        <Routes>
          <Route exact path="/" element={<Cordinator/>} />
          <Route exact path="/addusers" element={<AddUser/>} />
          <Route exact path="/addmarks" element={<CordinatorAddMarks/>} />
          <Route exact path="/mem-presentation" element={<MemberPresentation/>} />
          <Route exact path="/member-dashboard" element={<ProjectMember/>} />




 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
