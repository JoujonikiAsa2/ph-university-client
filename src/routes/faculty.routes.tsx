import FacultyDashboard from "../pages/faculty/FacultyDashboard";
// import MyCourses from "../pages/faculty/MyCourses";
import MyStudents from "../pages/faculty/MyStudents";

export const facultyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard />
    },
    {
        name: "My Courses",
        path: "courses",
        element: <h1>My Courses</h1>
    },
    {
        name: "My Students",
        path: "courses/:registerSemesterId/:courseId",
        element: <MyStudents />
    }
]