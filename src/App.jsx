import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import React from 'react'
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoadder } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {

  // Add New Job
  const addJob = async (newJob) => {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newJob)
      });
      return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path='/jobs' element={<JobsPage/>} />
        <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoadder} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/edit-job/:id' element={<EditJobPage/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App