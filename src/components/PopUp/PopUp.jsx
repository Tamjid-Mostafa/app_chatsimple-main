import React, { useState } from 'react'
import Cross from '../../icons/Cross'

const PopUp = ({isOpen, setIsOpen, children}) => {
    return (
        <div>
            {/* <!-- Main PopUp --> */}
            <div class={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center backdrop-brightness-50 ${!isOpen && "hidden"}`}>
               <div class="relative w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow-2xl">
                        {/* <!-- Modal header --> */}
                        <div class="flex items-start justify-between p-4">
                            <h3 class="text-xl font-semibold text-gray-900">
                            </h3>
                            <button 
                            onClick={()=>setIsOpen(!isOpen)}
                            type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                               <Cross />
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                       {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PopUp