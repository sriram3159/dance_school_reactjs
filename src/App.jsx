
import React from 'react'
import "./global.css"
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom';
import Signup from './Signup/Signup';
import Register from './Register/Register';
import Home from './Home/Home';
import Login from './Login/Login';
import ProtectedRouter from "./ServicesRoutes/ProtectedRouter"
import PublicRouter from './ServicesRoutes/PublicRouter';
import AdminDashBoard from './AdminDashboard/AdminDashBoard';
import AddAcademyManager from './AdminDashboard/AddAcademyManager';
import ViewBranch from './AdminDashboard/ViewBranch';
import ViewCourse from './AdminDashboard/ViewCourse';
import ViewManageracademydetails from './AdminDashboard/viewAcademyManager/ViewManageracademydetails';
import EditManagerAcademydetails from './AdminDashboard/viewAcademyManager/EditManagerAcademydetails';
import AddAcademy from './AdminDashboard/viewAcademyManager/AddAcademy';
import ViewAcademyManager from './AdminDashboard/ViewAcademyManager';
import ViewAcademy from './AdminDashboard/ViewAcademy';
import EditAcademy from './AdminDashboard/Academy/EditAcademy';
import AddBranch from './AdminDashboard/Branch/AddBranch';
import EditBranch from './AdminDashboard/Branch/EditBranch';
import AddCourse from './AdminDashboard/Course/AddCourse';
import UserCourses from './UserCourse/UserCourses';
import UserViewCourse from './UserCourse/UserViewCourse';


const App = () => {
  return (
    <div>
      <Routers>
        <Routes >
          <Route path='/' element={<ProtectedRouter><Home/></ProtectedRouter>}/>
          <Route path='/signup' element={<PublicRouter><Signup/></PublicRouter>}/>
          <Route path='/login' element={<PublicRouter><Login/></PublicRouter>}/>
          <Route path='/adminregister' element={<Register/>}/>
          <Route path='/adminDashBoard' element={<AdminDashBoard/>}>
              <Route path='/adminDashBoard/addAcademyManager' element={<AddAcademyManager/>}/>
              <Route path='/adminDashBoard/viewAcademyManager' element={<ViewAcademyManager/>}/>
              <Route path='/adminDashBoard/viewAcademyManager/:id' element={<ViewManageracademydetails/>}/>
              <Route path='/adminDashBoard/viewAcademyManager/editManagerAcademydetails/:id' element={<EditManagerAcademydetails/>}/>
              <Route path='/adminDashBoard/viewAcademyManager/AddAcademy/:id' element={<AddAcademy/>}/>
              <Route path='/adminDashBoard/viewAcademy' element={<ViewAcademy/>}/>
              <Route path='/adminDashBoard/viewAcademy/editAcademy/:id' element={<EditAcademy/>}/>
              <Route path='/adminDashBoard/viewAcademy/addBranch/:id' element={<AddBranch/>}/>
              <Route path='/adminDashBoard/viewBranch' element={<ViewBranch/>}/>
              <Route path='/adminDashBoard/viewBranch/editBranch/:id' element={<EditBranch/>}/>
              <Route path='/adminDashBoard/viewCourse' element={<ViewCourse/>}/>
              <Route path='/adminDashBoard/viewAcademy/addCourse/:id' element={<AddCourse/>}/>
          </Route>
          
          <Route path='/courses' element={<UserCourses/>}/>
          <Route path='/courses/UserViewCourses/:id' element={<UserViewCourse/>}/>

        </Routes>
      </Routers>
        
    </div>
  )
}

export default App


