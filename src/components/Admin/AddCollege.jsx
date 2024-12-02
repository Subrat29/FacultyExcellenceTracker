import React from 'react'

const AddCollege = () => {
  return (
    <div>
        <div className='max-w-2xl mx-auto bg-sky-50 p-6 shadow-md rounded-lg'>
        <h1 className='text-2xl font-semibold text-center'>Add College</h1>
        <form action="" className='space-y-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700'>College Name</label>
                <input 
                    type="text" 
                    placeholder='Enter college name'
                    className='px-4 py-2 border  border-gray-300 rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
            </div>
            
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Address
                </label>
                <textarea
                    placeholder="Enter address"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                ></textarea>
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'>Contact Number</label>
                <input 
                   type="text" 
                   placeholder='Enter the contact number'
                   className='px-4 py-2 border  border-gray-300 rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
            </div>

            <div>
                <label className='text-sm font-medium text-gray-700 block'>Email</label>
                <input 
                   type="text" 
                   placeholder='Enter email'
                   className='px-4 py-2 w-full border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md mt-1 focus:border-blue-500' 
                />
            </div>

            <div>
                <label className='text-sm font-medium text-gray-700 block'>Website</label>
                <input 
                   type="text" 
                   placeholder='Enter website'
                   className='px-4 py-2 w-full border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md mt-1 focus:border-blue-500' 
                />
            </div>

            <div>
                <label className='text-sm font-medium text-gray-700 block'>Director name</label>
                <input 
                   type="text" 
                   placeholder='Enter director name'
                   className='px-4 py-2 w-full border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md mt-1 focus:border-blue-500' 
                />
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add College
                </button>
            </div>
        </form>
    </div>

    <div className=' border-t-2 mt-8 border-gray-200'>
        <h1 className='text-2xl font-semibold mt-3 text-center'>College Lists</h1>
      </div>
    </div>
  )
}

export default AddCollege
