import Link from 'next/link'
import { useState } from 'react';

function ProblemsList({ problems }) {

    return (
        
        <div>
            <section className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">“Much effort,</span>{' '}
                <span className="block text-indigo-600 xl:inline"> much prosperity.” </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Kuro Space is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                <a
                   href="#"
                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                   >
                     Get started
                  </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                    href="/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Sign up
                  </a>
                </div>
                    </div>
              </div>

              </section>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      </div>
            
             

            <main className="container grid mx-auto ">
            <div className="container mx-auto flex flex-wrap items-start my-16">
            <div className="lg:w-1/4 w-full lg:pr-3">
            <div className="bg-gray-200 rounded-xl p-6">
            <h2 className="text-2xl text-blue-600 font-bold mb-2">Code Editor</h2>
            <div className="text-gray-800 leading-relaxed text-opacity-75">
            An integrated development environment (IDE)for Python.Our Code Editor offers many features to enhance your performance while you work. <a href="/replit" class="text-indigo-500 px-4 py-3 bg-yellow-100 rounded hover:bg-indigo-500 hover:text-white transition duration-300 inline-flex items-center justify-center leading-snug">Try It Now</a></div>

            </div>

            </div>
            <div className="lg:w-1/4 w-full lg:pr-3">
            <div className="bg-gray-200 rounded-xl p-6">
            <h2 className=" text-2xl text-blue-600  font-bold mb-2">Whiteboard</h2>
            <div className="text-gray-800 leading-relaxed text-opacity-75">
            Kuro Whiteboard is a simple tool.Our service is designed for successful realtime tutoring. We understand the importance of a easy to use interface
            <a href="/whiteboard" class="text-indigo-500 px-4 py-3 bg-yellow-100 rounded hover:bg-indigo-500 hover:text-white transition duration-300 inline-flex items-center justify-center leading-snug">Try It Now</a>
       </div>

            </div>

            </div>
            <div className="lg:w-1/4 w-full lg:pr-3">
            <div className="bg-gray-200 rounded-xl p-6">
            <h2 className="text-2xl text-blue-600  font-bold mb-2">Problem Solving</h2>
            <div className="text-gray-800 leading-relaxed text-opacity-75">
            Problem solving is the act of defining a problem; determining the cause of the problem; identifying, prioritizing, and implementing a solution.<a href="/" class="text-indigo-500 px-4 py-3 bg-yellow-100 rounded hover:bg-indigo-500 hover:text-white transition duration-300 inline-flex items-center justify-center leading-snug">Try It Now</a>
       </div>

            </div>

            </div>

            </div> 
                <h2 className="mb-2 text-xl font-bold text-gray-900 font-medium justify-self-center"> Problems list</h2>
                <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
                    <ul>
                        {problems.map(problem => (
                            <div>
                                <ProblemItem key={problem.id} problem={problem} />
                                <li>
                                    <Link href="board/[id].js" as={`board/${problem.id}`}>
                                        <a className="w-full lg:max-w-full">
                                            <div className="flex flex-col justify-between p-4 leading-normal bg-white border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
                                                <p id={problem.id}>
                                                    {problem.description}

                                                </p>
                                
                                            </div>
                                        </a>
                                    </Link>

                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    )
}

function ProblemItem({ problem }) {
    return (
        
        <li>
            <Link href="board/[id].js" as={`board/${problem.id}`}>
                <a>
                    {problem.title}
                </a>
            </Link>
        </li>
    )
}

export default ProblemsList;



