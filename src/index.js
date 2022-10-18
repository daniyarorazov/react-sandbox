import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectPage from "./pages/ProjectPages/ProjectPage";
import AddProject from "./pages/ProjectPages/AddProject";
import EditProjectPage from "./pages/ProjectPages/EditProjectPage";
import DeleteProject from "./pages/ProjectPages/DeleteProject";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/project/:id" element={<ProjectPage/>} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/project/:id/edit" element={<EditProjectPage />} />
            <Route path="/project/:id/delete" element={<DeleteProject />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

