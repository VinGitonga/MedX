import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register';
import Landing from './screens/Landing';
import PatientProfile from './screens/PatientProfile';
import Patients from './screens/Patients';
import DoctorProfile from './screens/DoctorProfile';
import Doctors from './screens/Doctors';
import Messaging from './screens/Messaging';
import FlashMessage from './comps/FlashMessage'
import DoctorSignup from './screens/Signup/Doctor'
import PatientSignup from './screens/Signup/Patient'


function App() {
    return (
        <Router>
            <FlashMessage />
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/patient' component={PatientProfile} />
                <Route exact path='/patients' component={Patients} />
                <Route exact path='/doctor' component={DoctorProfile} />
                <Route exact path='/doctors' component={Doctors} />
                <Route exact path='/chats' component={Messaging} />
                <Route exact path='/doctor/signup' component={DoctorSignup} />
                <Route exact path='/patient/signup' component={PatientSignup} />
            </Switch>
        </Router>
    );
}

export default App;
