import React from "react";


const LOGOS = [
    "https://diabetes-stigma.hivelab-uoft.ca/static/media/diabetescanada.3e61131b.png",
    "https://diabetes-stigma.hivelab-uoft.ca/static/media/p3.e86920ac.svg",
    "https://diabetes-stigma.hivelab-uoft.ca/static/media/p4.005df2db.svg",
    "https://unicef-education.hivelab-uoft.ca/static/media/UNICEF.05e400c5.png",
    "https://unicef-education.hivelab-uoft.ca/static/media/DSI.1e28db66.png",

];
export default () => {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Empowering Innovation - Together
                    </h3>
                    <p className="text-gray-600 mt-3">
                        HIVE Lab is grateful for the support of our partners and collaborators. Their commitment to advancing health innovation fuels our research and empowers us to make a positive impact.                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">

                        {LOGOS.map((logo, index) => (
                            <li key={index}>
                                <img
                                    src={logo}
                                    width="150px" height="50px"/>
                            </li>

                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}