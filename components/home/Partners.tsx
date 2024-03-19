import React from "react";


const LOGOS = [
    <img src="https://diabetes-stigma.hivelab-uoft.ca/static/media/diabetescanada.3e61131b.png" className="text-slate-800" />,
    <img src="https://diabetes-stigma.hivelab-uoft.ca/static/media/p3.e86920ac.svg" className="text-slate-800" />,
    <img src="https://diabetes-stigma.hivelab-uoft.ca/static/media/p4.005df2db.svg" className="text-slate-800" />,
    <img src="https://unicef-education.hivelab-uoft.ca/static/media/UNICEF.05e400c5.png" className="text-slate-800" />,
    <img src="https://unicef-education.hivelab-uoft.ca/static/media/DSI.1e28db66.png" className="text-slate-800" />,

];

export const InfiniteSlider = () => {
    return (

        <div
            className="relative m-auto w-[1000px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="-mx-4 flex flex-wrap">

                <div className="w-full px-4">
                    <div className="text-gray-600 mx-auto mb-[10px] max-w-[510px] text-center lg:mb-10">
                        <h4 className="mb-4 mt-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                            Our Partners
                        </h4>
                    </div>
                </div>
            </div>
            <div className="animate-infinite-slider flex w-[calc(250px*10)]">
                {LOGOS.map((logo, index) => (
                    <div
                        className="slide mr-4 flex w-[225px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
                {LOGOS.map((logo, index) => (
                    <div
                        className="slide mr-4 flex w-[225px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );
};
