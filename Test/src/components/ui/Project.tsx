        import React from 'react'
import { Projectcard } from './Projectcard'




        export const Project = () => {
        return (
            <section className="py-20">
                <div className="container h-screen mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
                <h2 className="text-3xl font-bold text-gray-900">What Projects I have done..</h2>
                <p className="text-lg text-gray-600 mt-4">Some of the project which i have done at previous years.</p>
                <div className="flex flex-wrap justify-center mt-6">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <Projectcard/>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <Projectcard/>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    <Projectcard/>
                    </div>
                </div>
                </div>
            </section>
        )
        }
