import React, {memo, ReactNode, useEffect} from "react";
import {useConfig} from "nextra-theme-docs";
import Glide from "@glidejs/glide"


export default memo(({children}: { children: ReactNode }) => {
    const {frontMatter = {}} = useConfig();
    useEffect(() => {
        const slider = new Glide(".glide-01", {
            type: "slider",
            focusAt: "center",
            perView: 1,
            autoplay: 3000,
            animationDuration: 700,
            gap: 0,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])
    return (
        <>

            <section className="py-16">
                <div
                    className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">

                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            {frontMatter.title}                    </h2>

                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <div
                                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">

                                {frontMatter.members.map((member: string, idx: number) => (
                                    <p> {member}</p>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <div className="relative w-full glide-01">
                            {/*    <!-- Slides --> */}
                            <div className="overflow-hidden" data-glide-el="track">
                                <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                                    {
                                        frontMatter.images.map((image, idx: number) => (

                                            <img key={idx}
                                                 src={image}
                                                 className=" max-h-96 md:rounded-tl-[108px]"
                                                 alt=""
                                            />

                                        ))
                                    }


                                </ul>
                            </div>
                            {/*    <!-- Controls --> */}
                            <div
                                className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
                                data-glide-el="controls"
                            >
                                <button
                                    className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                                    data-glide-dir="<"
                                    aria-label="prev slide"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <title>prev slide</title>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                                    data-glide-dir=">"
                                    aria-label="next slide"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <title>next slide</title>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
                {
                    frontMatter.collaborators && (<div className="mt-14 px-4 md:px-8">
                        <p className="text-center text-sm text-gray-700 font-semibold">Collaborators</p>
                        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">

                            {frontMatter.collaborators.map((imageLink: string, idx: number) => (

                                <img width="150" height="23" src={imageLink} key={idx}/>


                            ))}

                        </div>
                    </div>)
                }

            </section>
            <div className="w-full mx-auto pt-8">
                {children}
            </div>
        </>
    )
});