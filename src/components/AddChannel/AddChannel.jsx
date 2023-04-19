import React from 'react'
import facebook from "../../assets/images/svg/messenger.svg";
import instagram from "../../assets/images/svg/instagram.png";
import whatsapp from "../../assets/images/svg/WhatsApp.svg";
const AddChannel = () => {
    return (
        <div className='w-full p-[51px]'>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6 text-center">
                <h3 className='text-xl font-bold'>Add Channel</h3>
                <p>Deploy your chatbot to where your customers are.</p>
            </div>
            <div>
                <div className='flex items-center justify-between w-full border-b py-4'>
                    <div className='flex items-center gap-5'>
                        <img src={facebook} alt="" className='w-12 h-12' />
                        <p>Messenger</p>
                    </div>
                    <button className='flex items-center gap-2 bg-[#66B467] text-xs text-white px-4 py-2.5 rounded-full'>
                        Add Channel </button>
                </div>
                <div className='flex items-center justify-between w-full border-b py-4'>
                <div className='flex items-center gap-5'>
                        <img src={instagram} alt="" className='w-12 h-12' />
                        <p>Instagram</p>
                    </div>
                    <button className='flex items-center gap-2 bg-[#66B467] text-xs text-white px-4 py-2.5 rounded-full'>
                        Add Channel </button>
                </div>
                <div className='flex items-center justify-between w-full border-b py-4'>
                <div className='flex items-center gap-5'>
                        <img src={whatsapp} alt="" className='w-12 h-12' />
                        <p>Whats App</p>
                    </div>
                    <button className='flex items-center gap-2 bg-[#66B467] text-xs text-white px-4 py-2.5 rounded-full'>
                        Add Channel </button>
                </div>
            </div>
        </div>
    )
}

export default AddChannel