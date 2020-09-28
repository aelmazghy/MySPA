import Login from "./components/admin/Login";
import Teams from "./components/admin/Teams";
import Score from "./components/admin/Score";
import Judges from "./components/admin/Judges";
import Spots from "./components/admin/Spots";
import Welcome from "./components/Welcome";
import HomePage from "./components/HomePage";
import Dashboard from "./components/admin/Dashboard";

import AddTeam from "./components/admin/AddTeam";
import AddJudges from "./components/admin/AddJudges";
import AddSpot from "./components/admin/AddSpot";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
        children: [
            {path: 'resultats', name: 'score', component: Score},
            {path: 'equipes', name: 'teams', component: Teams},
            {path: 'jurys', name: 'judges', component: Judges},
            {path: 'plateaux', name: 'spots', component: Spots},

            {path: 'ajouter-une-equipe', name: 'addteam', component: AddTeam},
            {path: 'ajouter-un-jurys', name: 'addjudges', component: AddJudges},
            {path: 'ajouter-un-plateaux', name: 'addspots', component: AddSpot},
        ]
    },
]

export default routes
