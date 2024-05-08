import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cordinator from './pages/Cordinator';
import AddUser from './pages/AddUser';
import AddUser2 from './pages/ExaminaraTable';
import Examinarmarkadd from './pages/Examinaraddmarks';
import CordinatorAddMarks from './pages/CordinatorAddMarks';
import ExaminarmarkUpdate from './pages/ExaminarUpdate';
import AddProposal from './pages/MarksCritiria/AddProposal';
import AddProgress from './pages/MarksCritiria/AddProgress';
import AddProgress2 from './pages/MarksCritiria/AddProgress2';
import AddFinalPracentation from './pages/MarksCritiria/AddFinalPrasentaion';






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
          <Route exact path="/examinarupdatemark/:id" element={<ExaminarmarkUpdate/>} />
          <Route exact path="/addProposal" element={<AddProposal/>} />
          <Route exact path="/addprogress" element={<AddProgress/>} />
          <Route exact path="/addprogress2" element={<AddProgress2/>} />
          <Route exact path="/add-final-pracentation" element={<AddFinalPracentation/>} />

          
 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
