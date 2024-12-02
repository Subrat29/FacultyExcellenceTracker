import React from 'react'

const AddDepartment = () => {
  return (
    <div>
            <div className='max-w-2xl mx-auto bg-sky-50 p-8 rounded-md mt-10 mb-20 shadow-md'>
        <h1 className='text-2xl font-semibold text-center'>Add Department</h1>
        <form className='space-y-3' action="">
            <div>
                <label className='block text-sm mt-4 font-medium text-gray-700'>Department Name</label>
                <input 
                    type="text" 
                    placeholder='Enter department name'
                    className='px-4 py-2 border  border-gray-300 rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
            </div>

            <div>
                <label className='block text-sm font-medium text-gray-700'>Head of department</label>
                <input 
                    type="text" 
                    placeholder='Enter head of department'
                    className='px-4 py-2 border  border-gray-300 rounded-md w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                />
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="w-full bg-blue-600 mt-1 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add Department
                </button>
            </div>
        </form>
    </div>

    <div className=' border-t-2 mt-8 border-gray-200'>
        <h1 className='text-2xl font-semibold mt-3 text-center'>Department Lists</h1>
    </div>
    </div>
  )
}

export default AddDepartment
