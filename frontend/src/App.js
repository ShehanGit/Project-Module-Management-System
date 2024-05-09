import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cordinator from './pages/Cordinator';
import AddUser from './pages/AddUser';
import AddUser2 from './pages/ExaminarMarks/ExaminaraTable';
import Examinarmarkadd from './pages/ExaminarMarks/Examinaraddmarks';
import CordinatorAddMarks from './pages/CordinatorAddMarks';
import ExaminarmarkUpdate from './pages/ExaminarMarks/ExaminarUpdate';
import AddProposal from './pages/ExaminarMarks/MarksCriteria/AddProposal';
import AddProgress from './pages/ExaminarMarks/MarksCriteria/AddProgress';
import AddProgress2 from './pages/ExaminarMarks/MarksCriteria/AddProgress2';
import AddFinalPracentation from './pages/ExaminarMarks/MarksCriteria/AddFinalPrasentaion';

import ReportMarksTable from './pages/ReportMarks/ReportMarksTable';
import ReportMarksAdd from './pages/ReportMarks/ReportMarksAdd';
import ReportMarksUpdate from './pages/ReportMarks/ReportMarksUpdate';








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



          <Route exact path="/report-marks" element={<ReportMarksTable/>} />
          <Route exact path="/report-marks-add" element={<ReportMarksAdd/>} />
          <Route exact path="/report-marks-update/:id" element={<ReportMarksUpdate/>} />


          

          
 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
