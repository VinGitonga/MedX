import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Landing from "./screens/Landing";
import Patients from "./screens/Patients";
import Doctors from "./screens/Doctors";
import MyProfile from "./screens/MyProfile";
import UserProfile from "./screens/UserProfile";
import Messaging from "./screens/Messaging";
import FlashMessage from "./comps/FlashMessage";
import AddMedicalHistory from './comps/patient/AddMedicalHistory'
import AddAppointment from './comps/doctor/AddAppointment'
import DoctorSignup from "./screens/Signup/Doctor";
import PatientSignup from "./screens/Signup/Patient";
import PrivateRoute from './utils/PrivateRoute'

function App() {
    return (
        <Router>
            <FlashMessage />
            <AddMedicalHistory />
            <AddAppointment />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/patients" component={Patients} />
                <PrivateRoute exact path="/doctors" component={Doctors} />
                <PrivateRoute exact path="/myprofile" component={MyProfile} />
                <PrivateRoute exact path="/profile/:userId" component={UserProfile} />
                <PrivateRoute exact path="/chats" component={Messaging} />
                <Route exact path="/doctor/signup" component={DoctorSignup} />
                <Route exact path="/patient/signup" component={PatientSignup} />
            </Switch>
        </Router>
    );
}

export default App;
