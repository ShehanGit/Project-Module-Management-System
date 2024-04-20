
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cordinator from './pages/Cordinator';
import AddUser from './pages/AddUser';
import CordinatorAddMarks from './pages/CordinatorAddMarks';
import MemberPresentation from './pages/MemberPresentation';
import ProjectMember from './pages/ProjectMember';
import CreateRubricsforPres from './pages/CreateRubricsforPres';
import CreateRubricsReportMem from './pages/CreateRubricsReportMem';
import MemberAssessment from './pages/MemberAssessment';
import Plist from './pages/Plist';
import UpdatePresentation from './pages/UpdatePresentation';
import DeletePresentation from './pages/DeletePresentation';



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
          <Route exact path="/member-rubrics" element={<CreateRubricsforPres/>} />
          <Route exact path="/member-reportrubrics" element={<CreateRubricsReportMem/>} />
          <Route exact path="/member-assessment" element={<MemberAssessment/>} />
          <Route path="/presentations" element={<Plist/>}/>
          <Route path="/update/:id" element={<UpdatePresentation/>}/>
          <Route path="/delete/:id" element={<DeletePresentation/>} />


 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
