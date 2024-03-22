import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentLogin from './components/content/student/login/StudentLogin';
import Student from './routes/Student.routes';
import GroupRegistration from './components/content/student/groupRegistration/GroupRegistration';

const isAuthenticated = true;
const userRole = "Student";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/student-login" element={<StudentLogin />} />
        {isAuthenticated ? (
          <Route>
            {userRole === "Student" && (
              <Route path="/student" element={<Student />}>
                <Route exact path="group-registration" element={<GroupRegistration />} />
              </Route>
            )}
          </Route>
        ) : (
          <Route path="/*" element={<Navigate to="/student-login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
