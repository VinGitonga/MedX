import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import MyProfile from "./pages/MyProfile";
import UserProfile from "./pages/UserProfile";
import Consultations from "./pages/Consultations";
import FlashMessage from "./components/common/FlashMessage";
import AddMedicalHistory from './components/patient/AddMedicalHistory'
import AddAppointment from './components/doctor/AddAppointment'
import AddNote from './components/doctor/AddNote'
import DoctorRegister from "./pages/DoctorRegister";
import PatientRegister from "./pages/PatientRegister";
import PrivateRoute from './utils/PrivateRoute'

function App() {
    return (
        <Router>
            <FlashMessage />
            <AddMedicalHistory />
            <AddAppointment />
            <AddNote />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/patients" component={Patients} />
                <PrivateRoute exact path="/doctors" component={Doctors} />
                <PrivateRoute exact path="/myprofile" component={MyProfile} />
                <PrivateRoute exact path="/userprofile/:userId" component={UserProfile} />
                <PrivateRoute exact path="/consultations" component={Consultations} />
                <Route exact path="/register/doctor" component={DoctorRegister} />
                <Route exact path="/register/patient" component={PatientRegister} />
            </Switch>
        </Router>
    );
}

export default App;
