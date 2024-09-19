import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import QAJobs from "./pages/QAJobs";
import OurCourses from "./pages/OurCourses";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import FreeConsultation from "./pages/FreeConsultation";
import MainLayout from "./layouts/MainLayout";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import JobLayout from "./layouts/JobLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main Layout Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="ourcourses" element={<OurCourses />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogSingle />} />
        <Route path="freeconsultation" element={<FreeConsultation />} />
      </Route>

      {/* Job Layout Routes */}
      <Route path="jobs" element={<JobLayout />}>
        <Route path="qajobs" element={<QAJobs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
