import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  json
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newJob)
      });
      return
  }
// Delete JOB
  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE"
    })
    return
  }

  // Update JOB
  const updateJob = async(job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(job)
    })
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path='/jobs' element={<JobsPage/>} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoadder} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/edit-job/:id' element={<EditJobPage  updateJobSubmit={updateJob}/>}  loader={jobLoadder}/>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App