import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Courses from './Page/Courses/Courses/Courses';
import MyCourses from './Page/MyCourses/MyCourses';
import CourseAdding from './Page/Dashboard/CourseAdding/CourseAdding';
import CourseManaging from './Page/Dashboard/CourseManaging/CourseManaging';
import ManageAllBuying from './Page/Dashboard/ManageAllBuying/ManageAllBuying';
import Header from './Page/Shared/Header/Header';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login/Login';
import Register from './Page/Login/Register/Register';
import PrivateRoute from './Page/Login/PrivateRoute/PrivateRoute';
import ReviewAdding from './Page/Home/Review/ReviewAdding/ReviewAdding';

import MakeAdmin from './Page/Dashboard/MakeAdmin/MakeAdmin';
import NotFound from './Page/NotFound/NotFound';
import Footer from './Page/Shared/Footer/Footer';
import Payment from './Page/Payment/Payment';
import BuyingCourse from './Page/BuyingCourse/BuyingCourse';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/courses">
              <Courses></Courses>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/buying/:courseId">
              <BuyingCourse></BuyingCourse>
            </PrivateRoute>

            <PrivateRoute path="/myCourses">
              <MyCourses></MyCourses>
            </PrivateRoute>

            <PrivateRoute path="/reviewAdding">
              <ReviewAdding></ReviewAdding>
            </PrivateRoute>

            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>

            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>

            <PrivateRoute path="/addCourse">
              <CourseAdding></CourseAdding>
            </PrivateRoute>

            <PrivateRoute path="/manageCourses">
              <CourseManaging></CourseManaging>
            </PrivateRoute>

            <PrivateRoute path="/manageAllBuyings">
              <ManageAllBuying></ManageAllBuying>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
