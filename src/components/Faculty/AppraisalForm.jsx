import React, { useState } from 'react';

const AppraisalForm = () => {
  const [formStep, setFormStep] = useState(0);
  const nextStep = () => setFormStep((prev) => prev + 1);
  const prevStep = () => setFormStep((prev) => prev - 1);

  const steps = [
    {
      title: 'Research & Publications',
      content: (
        <textarea
          placeholder="Enter research publications, journals, and conferences attended"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
      ),
    },
    {
      title: 'Teaching Experience',
      content: (
        <textarea
          placeholder="Detail your teaching experience and student feedback"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
      ),
    },
    {
      title: 'Service to University',
      content: (
        <textarea
          placeholder="Contributions to university committees, community service, etc."
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
      ),
    },
  ];

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Appraisal Form Submission</h2>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-2 border-b-4 cursor-pointer ${
                formStep === index ? 'border-blue-500' : 'border-gray-300'
              }`}
              onClick={() => setFormStep(index)}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>
      <form>
        {steps[formStep].content}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            className={`p-2 rounded ${
              formStep === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'
            }`}
            onClick={prevStep}
            disabled={formStep === 0}
          >
            Previous
          </button>
          <button
            type="button"
            className={`p-2 rounded ${
              formStep === steps.length - 1 ? 'bg-green-500' : 'bg-blue-500'
            } text-white`}
            onClick={formStep === steps.length - 1 ? () => alert('Form Submitted!') : nextStep}
          >
            {formStep === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppraisalForm;
