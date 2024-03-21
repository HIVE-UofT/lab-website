import React from "react";

export default function HomePageTeam() {
    return (
        <div className="mb-10">
            <div style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 21.79%, rgb(241 190 164 / 51%) 16.92%, rgba(204, 171, 238, 0) 86.35%)" }} className="container max-w-screen-xl mx-auto px-4 py-8 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                <div className="flex flex-col lg:flex-row justify-center items-center py-12 mx-4 md:mx-6 ">
                    <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center lg:text-left">Meet our Team</h1>
                        <p className="text-base leading-normal text-gray-600 mt-4 md:w-8/12 lg:w-11/12 text-center lg:text-left">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age</p>
                        <div className="w-full flex justify-center lg:justify-start">
                           <a href="/team"> <button className="bg-primary text-base font-medium text-white rounded text-center py-4 px-9 mt-8 lg:mt-12 hover:bg-primary-300 leading-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 w-full sm:w-auto">View All</button>
                           </a></div>
                    </div>
                    <div role="list" aria-label="Team members"
                         className="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-12 gap-y-12 md:gap-x-12 mt-10 lg:mt-0 sm:w-auto w-full">
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://www.hivelab-uoft.ca/images/team/zahra.jpg" className="w-16  rounded-full h-16"
                                 alt="display avatar" role="img"/>
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://www.hivelab-uoft.ca/images/team/nseeman.jpg" className="w-16  rounded-full h-16"
                                 alt="display avatar" role="img"/>
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://www.hivelab-uoft.ca/images/team/Somayeh_amini.jpeg" className="w-16  rounded-full h-16"
                                 alt="display avatar" role="img"/>
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://www.hivelab-uoft.ca/images/team/tony.jpeg" className="w-16  rounded-full h-16"
                                 alt="display avatar" role="img"/>
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://www.hivelab-uoft.ca/images/team/yong.png" className="w-16  rounded-full h-16"
                                 alt="display avatar" role="img"/>
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://www.hivelab-uoft.ca/images/team/ziqi_shu.jpeg" className="w-16  rounded-full h-16"
                                 alt="display avatar" role="img"/>
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://www.hivelab-uoft.ca/images/team/aryan.jpeg" className="w-16  rounded-full h-16"
                                 alt="display avatar" role="img"/>
                        </div>
                        <div role="listitem" className="flex justify-center items-center ">
                            <img src="https://www.hivelab-uoft.ca/images/team/kamikazari.jpeg" className="w-16  rounded-full h-16"
                                 alt="display avatar" role="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
