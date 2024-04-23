import React from "react";
import { prefix } from "../utils/prefix";

const LOGOS = [
    {image:`${prefix}/funders/nserc.png`, size:"150px"},
    {image:"/funders/dsi.png", size:"150px"},
    {image:"/funders/dalla_lana.png", size:"150px"},
    {image:"/funders/ihpme.svg", size:"250px"},
    {image:"/funders/ifp.png", size:"150px"},
    {image:"/funders/diabetes_canada.png", size:"150px"},
    {image:"/funders/unicef.png", size:"150px"},
];
export default () => {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Thankful for Our Supporters!
                    </h3>
                    <p className="text-gray-600 mt-3">
                    Our lab extends heartfelt thanks to our supporters and collaborators. With their trust, we advance important health research and make a real difference.                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                        {LOGOS.map((logo, index) => (
                            <li key={index}>
                                <img
                                    src={logo.image}
                                    width={logo.size} height="50px"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}