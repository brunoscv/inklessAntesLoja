import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import Menu from './pages/Menu';
import Login from './pages/Login';
import Users from './pages/Users';
import Scheduling from './pages/Scheduling';
import Reloadscheduling from './pages/Reloadscheduling';
import Historic from './pages/Historic';
import Report from './pages/Report';
import Document from './pages/Document';
import Video from './pages/Video';
import Attendance from './pages/Attendance';
import Clinic from './pages/Clinic';
import Acceptcall from './pages/Acceptcall';
import Reloadcall from './pages/Reloadcall';
import Reception from './pages/Reception';
import ServiceEvaluation from './pages/ServiceEvaluation';
import ServiceModeConsultation from './pages/ServiceModeConsultation';
import ServiceTypeConsultation from './pages/ServiceTypeConsultation';
import HeathPlanConsultation from './pages/HealthPlanConsultation';
import ChoiceOfDoctorConsultation from './pages/ChoiceOfDoctorConsultation';
import TimesSuggestionConsultation from './pages/TimesSuggestionConsultation';
import ServiceModeExam from './pages/ServiceModeExam';
import ServiceTypeExam from './pages/ServiceTypeExam';

const Routes = createAppContainer(
    createSwitchNavigator({
        Menu,
        Login,
        Users,
        Scheduling,
        Reloadscheduling,
        Historic,
        Report,
        Document,
        Video,
        Attendance,
        Clinic,
        Acceptcall,
        Reloadcall,
        Reception,
        ServiceEvaluation,
        ServiceModeConsultation,
        ServiceTypeConsultation,
        HeathPlanConsultation,
        ChoiceOfDoctorConsultation,
        TimesSuggestionConsultation,
        ServiceModeExam,
        ServiceTypeExam
        
    })
);
export default Routes;