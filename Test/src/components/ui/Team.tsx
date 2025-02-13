import React from 'react'

export const Team = () => {
  return (
    <section className="h-screen py-20 bg-gray-100">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
        <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <img src="https://picsum.photos/200/300" alt="Team Member 1" className="rounded-full w-24 h-24" />
            <h3 className="text-2xl font-bold text-gray-900 mt-4">Yubraj Shrestha</h3>
            <p className="text-lg text-gray-600 mt-4">Software Engineer</p>
            <p className="text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <ul className="list-none mt-4">
              <li className="text-lg text-gray-600">Email: <a href="mailto:yubraj.shrestha@example.com" className="text-blue-600 hover:text-blue-800">yubraj.shrestha@example.com</a></li>
              <li className="text-lg text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/yubrajshrestha" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">linkedin.com/in/yubrajshrestha</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <img src="https://picsum.photos/200/301" alt="Team Member 2" className="rounded-full w-24 h-24" />
            <h3 className="text-2xl font-bold text-gray-900 mt-4">Jane Doe</h3>
            <p className="text-lg text-gray-600 mt-4">UX/UI Designer</p>
            <p className="text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <ul className="list-none mt-4">
              <li className="text-lg text-gray-600">Email: <a href="mailto:jane.doe@example.com" className="text-blue-600 hover:text-blue-800">jane.doe@example.com</a></li>
              <li className="text-lg text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/janedoe" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">linkedin.com/in/janedoe</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <img src="https://picsum.photos/200/302" alt="Team Member 3" className="rounded-full w-24 h-24" />
            <h3 className="text-2xl font-bold text-gray-900 mt-4">Bob Smith</h3>
            <p className="text-lg text-gray-600 mt-4">DevOps Engineer</p>
            <p className="text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <ul className="list-none mt-4">
              <li className="text-lg text-gray-600">Email: <a href="mailto:bob.smith@example.com" className="text-blue-600 hover:text-blue-800">bob.smith@example.com</a></li>
              <li className="text-lg text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/bobsmith" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">linkedin.com/in/bobsmith</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
