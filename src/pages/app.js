import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import CourseManagement from "./CourseManagement";
import CourseDetail from "./CourseDetail";
import CourseList from "./CourseList";
import Forum from "./Forum";
import Home from "./Home";
import Lesson from "./Lesson";
import Login from "./Login";
import Progress from "./Progress";
import Settings from "./Settings";
import StudentDashboard from "./StudentDashboard";

const App = () => {
  return (
    <Router>
      <Route>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/course/:id" component={CourseDetail} />
        <Route path="/course-list" component={CourseList} />
        <Route path="/lesson/:id" component={Lesson} />
        <Route path="/forum" component={Forum} />
        <Route path="/progress" component={Progress} />
        <Route path="/settings" component={Settings} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/course-management" component={CourseManagement} />
        <Route path="/student-dashboard" component={StudentDashboard} />
      </Route>
    </Router>
  );
};

export default App;