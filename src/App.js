import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/Login'
import Register from './screens/Register';
import Landing from './screens/Landing';
import PatientProfile from './screens/PatientProfile';
import Patients from './screens/Patients';
import DoctorProfile from './screens/DoctorProfile';


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/patient' component={PatientProfile} />
                <Route exact path='/patients' component={Patients} />
                <Route exact path='/doctor' component={DoctorProfile} />
            </Switch>
        </Router>
    );
}

export default App;
