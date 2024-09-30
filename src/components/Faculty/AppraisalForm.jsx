import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';

const AppraisalForm = () => {
  const [formStep, setFormStep] = useState(0);
  const nextStep = () => setFormStep((prev) => prev + 1);
  const prevStep = () => setFormStep((prev) => prev - 1);

  const steps = [
    {
      title: 'Personal Information',
      content: (
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Age"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Designation"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Department"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
      ),
    },
    {
      title: 'Teaching Experience',
      content: (
        <div>
          <textarea
            placeholder="Detail teaching experience (lectures, seminars, tutorials)"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="number"
            placeholder="Total number of lectures allocated"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="number"
            placeholder="Total number of lectures taken"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
      ),
    },
    {
      title: 'Research & Publications',
      content: (
        <div>
          <textarea
            placeholder="Detail research publications, journals, conferences attended"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="number"
            placeholder="Number of publications (with impact factor)"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="number"
            placeholder="Number of books or chapters published"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
      ),
    },
    {
      title: 'University Services & Administrative Roles',
      content: (
        <div>
          <textarea
            placeholder="Contributions to university committees, community service, etc."
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <textarea
            placeholder="Administrative roles (e.g., Head of Department, Coordinator)"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
      ),
    },
    {
      title: 'Awards & Recognitions',
      content: (
        <div>
          <textarea
            placeholder="Detail any awards, fellowships, or recognitions"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
      ),
    },
    {
      title: 'Training & Workshops',
      content: (
        <div>
          <textarea
            placeholder="Detail training, workshops, or faculty development programs attended"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
        </div>
      ),
    },
  ];

  const progressPercentage = Math.round(((formStep + 1) / steps.length) * 100);

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Self-Appraisal Form Submission</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full mb-6">
        <div
          className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
          style={{ width: `${progressPercentage}%` }}
        >
          {progressPercentage}%
        </div>
      </div>

      {/* Step Titles */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-2 border-b-4 cursor-pointer transition-all duration-300 ${
                formStep === index ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-500'
              }`}
              onClick={() => setFormStep(index)}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form>
        <div className="transition-all duration-300">{steps[formStep].content}</div>

        <div className="flex justify-between mt-4">
          {/* Previous Button */}
          <button
            type="button"
            className={`p-2 rounded flex items-center space-x-2 ${
              formStep === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 transition-all'
            }`}
            onClick={prevStep}
            disabled={formStep === 0}
          >
            <FaArrowLeft />
            <span>Previous</span>
          </button>

          {/* Next/Submit Button */}
          <button
            type="button"
            className={`p-2 rounded flex items-center space-x-2 ${
              formStep === steps.length - 1
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-all`}
            onClick={
              formStep === steps.length - 1
                ? () => alert('Form Submitted!')
                : nextStep
            }
          >
            {formStep === steps.length - 1 ? (
              <>
                <FaCheck />
                <span>Submit</span>
              </>
            ) : (
              <>
                <span>Next</span>
                <FaArrowRight />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppraisalForm;
