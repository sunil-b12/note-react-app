import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import {updatePost } from '../features/postSlice';
import * as Yup from "yup";
import {
  Button
} from "@material-tailwind/react";
import { useLocation } from 'react-router'



const Update = () => {
    const {state} = useLocation();
    console.log(state)
    
    const nav = useNavigate();
    const dispatch = useDispatch();

    const valSchema = Yup.object().shape({
      title: Yup.string().required("Required field"),
      date: Yup.string().required("Required field"),
      message: Yup.string().required("Required field")
    });



  const formik = useFormik({
    initialValues:{
      title: state.title,
      date: state.date,
      message: state.message,
      id:  state.id
    },
    onSubmit:(val, {resetForm}) =>{
        dispatch(updatePost(val));
        nav(-1);
      resetForm();

    },
    validationSchema: valSchema
  })

  return (
    <div>
       <form onSubmit={formik.handleSubmit} className='flex flex-col shadow-xl px-8 py-8 rounded gap-4'>
            <div className='w-full'>
                <label htmlFor="title" className='block text-gray-500 font-bold  mb-1 md:mb-0 pr-4'>Title</label>
                <input type="text"
                placeholder='Title'
                id='title'
                name='title'
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded  w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                onChange={formik.handleChange}
                value={formik.values.title}
                />
                 {formik.errors.title && formik.touched.title ? <h1 className='text-red-300 font-semibold'>{formik.errors.title}</h1> : null}
            </div>
            <div className='w-full'>
                <label htmlFor="date" className='block text-gray-500 font-bold  mb-1 md:mb-0 pr-4'>Date</label>
                <input type="date"
                  placeholder='Date'
                  id='date'
                  name='date'
                  onChange={formik.handleChange}
                  value={formik.values.date}
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                 />

                 {formik.errors.date && formik.touched.date ? <h1 className='text-red-300 font-semibold'>{formik.errors.date}</h1> : null}

            </div>
            <div className='md:w-full'>
                 <label htmlFor="message" className='block text-gray-500 font-bold  mb-1 md:mb-0 pr-4'>Message</label>
                 <textarea
                    id='message'
                    name='message'
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-32 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  />
                 {formik.errors.message && formik.touched.message ? <h1 className='text-red-300 font-semibold'>{formik.errors.message}</h1> : null}

            </div>

            <Button type='submit' className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white text-base rounded my-5'>Update</Button>

        </form>
    </div>
  )
}

export default Update
