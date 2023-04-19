import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {Link, useNavigate} from "react-router-dom"
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
const Topbar = () => {


  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go back one route
  };




  return (

    <section>
      <div>
        <div className="left_top flex justify-between items-center h-[50px] px-[20px] text-white bg-slate-600">
          <div>
          <Link to="/" className='duration-100 hover:opacity-80' onClick={handleBack}>
            <ChevronLeftIcon /> Back
          </Link>
          </div>
          <div className='flex justify-end items-center gap-4'>
            <Link className='py-2 px-4 bg-zinc-500 rounded-full hover:opacity-80 duration-100'>
              <ChangeHistoryIcon className='rotate-90 ' style={{fontSize:"1.2rem", paddingBottom:"-2px"}} /> Preview
            </Link>

            <Link to="/" className='py-2 px-5 bg-emerald-600 rounded-full hover:opacity-80 duration-100'>
              Publish
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Topbar