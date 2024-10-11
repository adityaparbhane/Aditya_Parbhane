import React from 'react'

interface ResponseGeneratorProps {
  response: string
} // Define the ResponseGeneratorProps interface

const ResponseGenerator: React.FC<ResponseGeneratorProps> = ({ response }) => {
  const staticResponse =
    "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."

  return (
    <div className="mt-4 flex flex-col items-start">
      <span className="bg-gray-100 text-gray-500 p-2 rounded-xl mb-2 self-end">
        {response}
      </span>
      <span className="bg-[#DBEAFE] text-gray-500 p-2 rounded-xl mb-2 w-[400px]">
        {staticResponse}
      </span>
    </div>
  )
}

export default ResponseGenerator
