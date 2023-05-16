import React from 'react'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'
import {removePost } from '../features/postSlice';
import Update from '../components/Update';
import {
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";


const Home = () => {
  const { post} = useSelector((state) => state.post);

  const nav = useNavigate();
  const dispatch = useDispatch();
    
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

// const sendData = (pos)=>{
//   nav('/update',{
//     state: pos
//   }
//   )
// }
 
  return (
    <div className='grid'>
      {
        post.map((post, i)=>{
          return <div key={post.id} className='mx-auto my-8 w-11/12'>
            <div className='grid gap-5 border-solid border-2 border-sky-500 px-4 py-4 cursor-pointer border-zinc-50 shadow-lg'>
              <div className='flex flex-col items-start gap-4'>
                <h1 className='text-xl font-bold'>Title: <span className='font-semibold text-sm'>{post.title}</span></h1>
                <h1 className='text-xl font-bold'>Date: <span className='font-semibold text-sm'>{post.date}</span></h1>
                <h1 className='text-xl font-bold'>Message: <span className='font-semibold text-sm'>{post.message}</span></h1>
              </div>
            
                <div className='flex justify-end gap-4'>
                  <button onClick={
                        ()=>{
                          nav('/update',{
                            state: post
                          }
                          )
                        }
                  }><i className="fa-solid fa-pen-to-square fa-xl rounded-lg transform transition duration-500 hover:scale-110  hover:text-purple-500"></i>
                  </button>
                 
                  <button onClick={()=>{
                      dispatch(removePost(i));
                  }}><i className="fa-solid fa-trash-can fa-xl rounded-lg transform transition duration-500 hover:scale-110  hover:text-purple-500"></i>
                  </button>
                </div>
            </div>
          </div>
          
        })
      }
          <div>
          <Dialog open={open} handler={handleOpen} className='md:w-full'>
                <DialogHeader>Updates Note</DialogHeader>
                <DialogBody>
                    <Update />
              </DialogBody>
           </Dialog>              
          </div>
    </div>
  )
}

export default Home

