/* eslint-disable react/jsx-key */
import { useState } from 'react'
import Image from 'next/image'

export default function Main(props) {

    const [data, setData] = useState(
        [
            {
                'id': "#1",
                'problem': 'problem1',
                'description': 'description1',
                'level': 'level 1',
            },

            {
                'id': "#2",
                'problem': 'problem2',
                'description': 'description2',
                'level': 'level 2',
            },

            {
                'id': "#3",
                'problem': 'problem3',
                'description': 'description3',
                'level': 'level 3',
            },
        ]
    );

    return (
        <main className="container mx-auto grid ">
            <h2 className="text-gray-900 font-bold text-3xl	 m-10 justify-self-center mb-80">Welcome</h2>
            <h2 className="text-gray-900 font-bold text-xl mb-2 justify-self-center"> Problems list</h2>

            {/* <image src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg" alt="logo" /> */}
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">


                {data.map(item => (
                    <div>
                        <a href={item.id} className="w-full lg:max-w-full ">
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" styles="background-image: url('/mountain.jpg')" >
                            </div>
                            <div className=" border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">

                                    <div className="text-gray-900 font-bold text-xl mb-2">{item.problem}  </div>
                                    <p className="text-gray-700 text-base">{item.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">level</p>
                                        <p className="text-gray-600">{item.level}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </main >
    )
}


