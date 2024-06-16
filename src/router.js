import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Skills from "./components/skills.";
import Projects from "./components/projects";
import EducationDetails from "./components/Education";


const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: 'skills', element: <Skills/> },
    { path: 'project', element: <Projects/> },
    { path: 'education', element: <EducationDetails/> },
]);

export default router;