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
import SchedulesAndExams from './pages/SchedulesAndExams';
import QueryScheduling from './pages/QuerySchedulings';
import ExamsScheduling from './pages/ExamsScheduling';
import ServiceEvaluation from './pages/ServiceEvaluation';

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
        SchedulesAndExams,
        QueryScheduling,
        ExamsScheduling,
        ServiceEvaluation
        
    })
);
export default Routes;