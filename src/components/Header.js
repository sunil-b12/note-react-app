import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody
} from "@material-tailwind/react";
import Add from '../components/Add';
import {toggle } from '../features/postSlice';
import { useDispatch, useSelector } from 'react-redux'


const Header = () => {

    const { isOpen } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const handleOpen = () => {
      dispatch(toggle());
    }

  return (
    <div className='flex justify-between py-6 px-7 bg-gray-500 '>
      <NavLink to='/'><h1 className='text-3xl font-bold text-white'>My Notes</h1></NavLink>
      <Button onClick={handleOpen} className='flex gap-2 items-center rounded'>
        <i className="fa-solid fa-square-plus fa-xl"></i>
        <b className=''>Create Note</b>
      </Button>
      <Dialog open={isOpen} handler={handleOpen}>
        <DialogHeader className='flex items-center gap-3'>New Note <span><i className="fa-solid fa-plus"></i></span></DialogHeader>
        <DialogBody divider>
            <Add />
        </DialogBody>
      </Dialog>
    </div>
  )
}

export default Header
