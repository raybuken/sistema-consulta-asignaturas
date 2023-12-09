import {Routes, Route} from 'react-router-dom'
import App from '../App'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import UserList from '../pages/User/UserList'
import CreateUser from '../pages/User/CreateUser'
import EditUser from '../pages/User/EditUser'
import DepartmentList from '../pages/Department/DepartmentList'
import CreateDepartment from '../pages/Department/CreateDepartment'
import Login from '../pages/Login'
import EditDepartment from '../pages/Department/EditDepartment'
import Settings from '../pages/Setting/Settings'
import CreateDispatch from '../pages/Dispatch/CreateDispatch'
import DispatchList from '../pages/Dispatch/DispatchList'
import EditDispatch from '../pages/Dispatch/EditDispatch'
import CreateKnowledgeArea from '../pages/KnowledgeArea/CreateKnowledgeArea'
import KnowledgeAreaList from '../pages/KnowledgeArea/KnowledgeAreaList'
import EditKnowledgeArea from '../pages/KnowledgeArea/EditKnowledgeArea'
import CreateTeacher from '../pages/Teacher/CreateTeacher'
import TeacherList from '../pages/Teacher/TeacherList'
import EditTeacher from '../pages/Teacher/EditTeacher'
import CreateClassroom from '../pages/Classroom/CreateClassroom'
import ClassroomList from '../pages/Classroom/ClassroomList'
import EditClassroom from '../pages/Classroom/EditClassroom'
import CreateCareer from '../pages/Career/CreateCareer'
import CareerList from '../pages/Career/CareerList'
import EditCareer from '../pages/Career/EditCareer'
import CreatePensum from '../pages/Pensum/CreatePensum'
import PensumList from '../pages/Pensum/PensumList'
import EditPensum from '../pages/Pensum/EditPensum'
import CreateSubject from '../pages/Subject/CreateSubject'
import SubjectList from '../pages/Subject/SubjectList'
import EditSubject from '../pages/Subject/EditSubject'
import CreatePeriod from '../pages/Period/CreatePeriod'
import PeriodList from '../pages/Period/PeriodList'
import EditPeriod from '../pages/Period/EditPeriod'
import CreateCalendarPeriod from '../pages/CalendarPeriod/CreateCalendarPeriod'
import EditCalendarPeriod from '../pages/CalendarPeriod/EditCalendarPeriod'
import CalendarPeriodList from '../pages/CalendarPeriod/CalendarPeriodList'
import CreatePensumSubject from '../pages/PensumSubject/CreatePensumSubject'
import PensumSubjectList from '../pages/PensumSubject/PensumSubjectList'
import CreateTeacherAvailability from '../pages/TeacherAvailability/CreateTeacherAvailability'
import TeacherAvailabilityList from '../pages/TeacherAvailability/TeacherAvailabilityList'
import CalendarPeriodDetails from '../pages/CalendarPeriod/CalendarPeriodDetails'

function RoutingContainer() {
  const routes = [
    {
      path: "/calendar/period",
      element: 
        <PrivateRoute>
          <CalendarPeriodList/>
        </PrivateRoute>
    },
    {
      path: "/user",
      element: 
        <PrivateRoute>
          <UserList/>
        </PrivateRoute>
    },
    {
      path: "/user/create",
      element: 
        <PrivateRoute>
          <CreateUser/>
        </PrivateRoute>
    },
    {
      path: "/user/edit/:id",
      element: 
        <PrivateRoute>
          <EditUser/>
        </PrivateRoute>
    },
    {
      path: "/department",
      element: 
        <PrivateRoute>
          <DepartmentList/>
        </PrivateRoute>
    },
    {
      path: "/department/create",
      element: 
        <PrivateRoute>
          <CreateDepartment/>
        </PrivateRoute>
    },
    {
      path: "/department/edit/:id",
      element: 
        <PrivateRoute>
          <EditDepartment/>
        </PrivateRoute>
    },
    {
      path: "/dispatch/create",
      element: 
        <PrivateRoute>
          <CreateDispatch/>
        </PrivateRoute>
    },
    {
      path: "/dispatch",
      element: 
        <PrivateRoute>
          <DispatchList/>
        </PrivateRoute>
    },
    {
      path: "/dispatch/edit/:id",
      element: 
        <PrivateRoute>
          <EditDispatch/>
        </PrivateRoute>
    },
    {
      path: "/knowledgearea/create",
      element: 
        <PrivateRoute>
          <CreateKnowledgeArea/>
        </PrivateRoute>
    },
    {
      path: "/knowledgearea",
      element: 
        <PrivateRoute>
          <KnowledgeAreaList/>
        </PrivateRoute>
    },
    {
      path: "/knowledgearea/edit/:id",
      element: 
        <PrivateRoute>
          <EditKnowledgeArea/>
        </PrivateRoute>
    },
    {
      path: "/teacher/create",
      element: 
        <PrivateRoute>
          <CreateTeacher/>
        </PrivateRoute>
    },
    {
      path: "/teacher",
      element:
        <PrivateRoute>
          <TeacherList/>
        </PrivateRoute>
    },
    {
      path: "/teacher/edit/:id",
      element: 
        <PrivateRoute>
          <EditTeacher/>
        </PrivateRoute>
    },
    {
      path: "/teacher/availability/:id",
      element: 
        <PrivateRoute>
            <TeacherAvailabilityList/>
        </PrivateRoute>
    },
    {
      path: "/teacher/availability/create/:id",
      element: 
        <PrivateRoute>
            <CreateTeacherAvailability/>
        </PrivateRoute>
    },
    {
      path: "/classroom/create",
      element: 
        <PrivateRoute>
          <CreateClassroom/>
        </PrivateRoute>
    },
    {
      path: "/classroom/edit/:id",
      element: 
        <PrivateRoute>
          <EditClassroom/>
        </PrivateRoute>
    },
    {
      path: "/classroom",
      element: 
        <PrivateRoute>
          <ClassroomList/>
        </PrivateRoute>
    },
    {
      path: "/career/create",
      element: 
        <PrivateRoute>
          <CreateCareer/>
        </PrivateRoute>
    },
    {
      path: "/career",
      element: 
        <PrivateRoute>
          <CareerList/>
        </PrivateRoute>
    },
    {
      path: "/career/edit/:id",
      element: 
        <PrivateRoute>
          <EditCareer/>
        </PrivateRoute>
    },
    {
      path: "/pensum/create",
      element: 
        <PrivateRoute>
          <CreatePensum/>
        </PrivateRoute>
    },
    {
      path: "/pensum",
      element: 
        <PrivateRoute>
          <PensumList/>
        </PrivateRoute>
    },
    {
      path: "/pensum/edit/:id",
      element: 
        <PrivateRoute>
          <EditPensum/>
        </PrivateRoute>
    },
    {
      path: "/subject/create",
      element: 
        <PrivateRoute>
          <CreateSubject/>
        </PrivateRoute>
    },
    {
      path: "/subject",
      element: 
        <PrivateRoute>
          <SubjectList/>
        </PrivateRoute>
    },
    {
      path: "/subject/edit/:id",
      element: 
        <PrivateRoute>
          <EditSubject/>
        </PrivateRoute>
    },
    {
      path: "/period/create",
      element: 
        <PrivateRoute>
          <CreatePeriod />
        </PrivateRoute>
    },
    {
      path: "/period",
      element: 
        <PrivateRoute>
          <PeriodList/>
        </PrivateRoute>
    },
    {
      path: "/period/edit/:id",
      element: 
        <PrivateRoute>
          <EditPeriod/>
        </PrivateRoute>
    },
    {
      path: "/calendar/period/edit/:id",
      element: 
        <PrivateRoute>
          <EditCalendarPeriod/>
        </PrivateRoute>
    },
    {
      path: "/calendar/period/create",
      element: 
        <PrivateRoute>
            <CreateCalendarPeriod/>
        </PrivateRoute>
    },
    {
      path: "/calendar/period",
      element: 
        <PrivateRoute>
          <CalendarPeriodList/>
        </PrivateRoute>
    },
    {
      path: "/calendar/period/details/:id",
      element:
        <PrivateRoute>
          <CalendarPeriodDetails/>
        </PrivateRoute>
    },
    {
      path: "/pensum/subject/create/:id",
      element: 
      <PrivateRoute>
        <CreatePensumSubject/>
      </PrivateRoute>
    },
    {
      path: "/pensum/subject/:id",
      element: 
      <PrivateRoute>
        <PensumSubjectList/>
      </PrivateRoute>
    },
    {
      path: "/settings",
      element:
        <PrivateRoute>
          <Settings/>
        </PrivateRoute>
    },
    {
      path: "/login",
      element: 
        <PublicRoute>
          <Login/>
        </PublicRoute>
    }
  ]
  return (
    <Routes>
      {routes.map((route, i) => <Route key={i} path={route.path} element={route.element}/> )}
    </Routes>
  )
}

export default RoutingContainer