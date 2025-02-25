import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Applications from "./pages/Applications";
import RecuriterLogin from "./components/RecuriterLogin";
import { AppContext } from "./context/AppContex";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplications from "./pages/ViewApplications";
import "quill/dist/quill.snow.css";

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);

  return (
    <div>
      {/* Show RecruiterLogin modal if needed */}
      {showRecruiterLogin && <RecuriterLogin />}

      {/* Define routes for the app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Applyjob />} />
        <Route path="/applications" element={<Applications />} />

        {/* Dashboard with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
