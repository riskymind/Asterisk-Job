import React from 'react'
import { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditJobPage = ({updateJobSubmit}) => {

    const job = useLoaderData()
    const navigate = useNavigate()
    const { id } = useParams()


    const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [location, setLocation] = useState(job.location);
    const [description, setDescription] = useState(job.description);
    const [salary, setSalary] = useState(job.salary);
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone);
    

    const submitForm = (e) => {
        e.preventDefault()
        const updateJob = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            },
        }

        updateJobSubmit(updateJob)

        toast.success("Job Update Successfully")

        navigate(`/jobs/${id}`)
    }


    
  return (
    <section className='bg-indigo-50'>
        <div className='container m-auto max-w-2xl py-24'>
            <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
                <form onSubmit={submitForm}>
                    <h2 className='text-3xl text-center font-semibold mb-6'>Update Job</h2>
                    <div className='mb-4'>
                        <label htmlFor="type" className='block text-gray-700 font-bold mb-2'>Job Type</label>
                        <select name="type" id="type" className='border rounded w-full py-2 px-3' value={type} onChange={(e) => setType(e.target.value)}>
                            <option value='Full-Time'>Full-Time</option>
                            <option value='Part-Time'>Part-Time</option>
                            <option value='Remote'>Remote</option>
                            <option value='Internship'>Internship</option>
                        </select>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="title" className='block text-gray-700 font-bold mb-2'>Job Listing Name</label>
                        <input type="text" id='title' name='title' placeholder='Eg. Fine Appartment' className='border rounded w-full py-2 px-3' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="description" className='block text-gray-700 font-bold mb-2'>Description</label>
                        <textarea id='description' name='description' placeholder='Add any job duties, expectations, requirements, etc' rows="4" className='border rounded w-full py-2 px-3'
                        value={description} onChange={(e) => setDescription(e.target.value)}>
                        </textarea>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor='salary' className='block text-gray-700 font-bold mb-2'> Salary </label>
                        <select id='salary' name='salary' className='border rounded w-full py-2 px-3' value={salary} onChange={(e) => setSalary(e.target.value)}>
                            <option value='Under $50K'>Under $50K</option>
                            <option value='$50K - 60K'>$50K - $60K</option>
                            <option value='$60K - 70K'>$60K - $70K</option>
                            <option value='$70K - 80K'>$70K - $80K</option>
                            <option value='$80K - 90K'>$80K - $90K</option>
                            <option value='$90K - 100K'>$90K - $100K</option>
                            <option value='$100K - 125K'>$100K - $125K</option>
                            <option value='$125K - 150K'>$125K - $150K</option>
                            <option value='$150K - 175K'>$150K - $175K</option>
                            <option value='$175K - 200K'>$175K - $200K</option>
                            <option value='Over $200K'>Over $200K</option>
                        </select>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="location" className='block text-gray-700 font-bold mb-2'>Location</label>
                        <input type="text" name='location' id='location' placeholder='Company Location' className='border w-full py-2 px-3 rounded'
                         value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </div>

                    <h3 className='text-2xl mb-5'>Company Info</h3>

                    <div className='mb-4'>
                        <label htmlFor="companyName" className='block text-gray-700 font-bold mb-2'>Company Name</label>
                        <input type="text" name="companyName" id="companyName" placeholder='Company Name' className='border w-full py-2 px-3 rounded'
                        value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="companyDesc" className='block text-gray-700 font-bold mb-2'>Company Description</label>
                        <textarea  name="companyDesc" id="companyDesc" placeholder='What does your company do?' className='border w-full py-2 px-3 rounded' rows="4"
                        value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)}>

                        </textarea>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="companyEmail" className='bolck text-gray-700 font-bold mb-2'>Company Email</label>
                        <input type="text" name="companyEmail" id="companyEmail" placeholder='Email address for applicants' className='border w-full py-2 px-3 rounded'
                        value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="companyPhone" className='block text-gray-700 font-bold mb-2'>Company Phone</label>
                        <input type="text" name="companyPhone" id="companyPhone"  placeholder='Optional phone for applicants' className='border w-full py-2 px-3 rounded'
                        value={contactPhone} onChange={(e) => setContactPhone(e.target.value)}/>
                    </div>

                    <div className='mt-8 mb-4'>
                        <button type='submit' className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outlinde'>
                            Add Job
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </section>
  )
}

export default EditJobPage