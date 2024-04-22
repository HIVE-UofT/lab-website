import React, { useEffect, useState } from "react"
import Glide from "@glidejs/glide"
import { getPagesUnderRoute } from "nextra/context";
import MDXContent from "*.mdx";
import { getStaticPaths } from "next/dist/build/templates/pages";
import Logo from '../hive/Logo'
import Hive from '../hive/Hive'

export default function SliderControlsInside() {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl md:px-8">
                <div className="items-center mx-auto sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <center>
                        <Logo className="w-3/5"/>
                        </center>
                    </div>
                    <div className="max-w-xl sm:mx-auto px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            <Hive className='h-1/4' />
                        </p>
                        <p className="mt-3 text-gray-600">
                            The Health Informatics, Visualization, and Equity (HIVE) Lab in the Institute of Health Policy, Management and Evaluation, Dalla Lana School of Public Health at the University of Toronto is a group of data scientists, epidemiologists, and software developers working at the interface of Machine Learning, AI, Information Visualization, and Health Informatics. As a research group, we are passionate about integrating data across different sources and scales to develop novel methods and open source tools to promote health at individual and population levels and to foster national and international collaborations to advance the quest for health equity.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}