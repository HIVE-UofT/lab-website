import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";

interface Page {
    name: string;
    route: string;
    children?: Page[];
    meta?: Record<string, any>;
    frontMatter?: any;
}

export default () => {
    const teams = getPagesUnderRoute("/team");
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            teams.map((page: Page, idx: number) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <img
                                            src={page.frontMatter.image}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-gray-700 font-semibold">{page.frontMatter.title}</h4>
                                        <p className="text-indigo-600">{page.frontMatter.role}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

 // const team = [
    //     {
    //         avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    //         name: "Martiana dialan",
    //         title: "Product designer"
    //     },
    //     {
    //         avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    //         name: "Micheal colorand",
    //         title: "Software engineer"
    //     },
    //     {
    //         avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //         name: "Brown Luis",
    //         title: "Full stack engineer"
    //     },
    //     {
    //         avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //         name: "Lysa sandiago",
    //         title: "Head of designers"
    //     },
    //     {
    //         avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //         name: "Daniel martin",
    //         title: "Product designer"
    //     },
    //     {
    //         avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    //         name: "Vicky tanson",
    //         title: "Product manager"
    //     },
// ]
    


// export function HowToGuideIndex({ more = "Read the guide" }) {
//     const teams = getPagesUnderRoute("/team");
//     return teams
//         .slice()
//         .sort((a: Page, b: Page) => {
//             const aTitle = a.frontMatter?.title || a.meta?.title || a.name;
//             const bTitle = b.frontMatter?.title || b.meta?.title || b.name;
//             return aTitle.localeCompare(bTitle);
//         })
//         // .filter((page: Page) => {
//         //     return page.name !== "overview";
//         // })
//         .map((page: Page) => {
//             return (
//                 <div key={page.route} className="mb-10">
//                     <Link
//                         href={page.route}
//                         style={{ color: "inherit", textDecoration: "none" }}
//                         className="block font-semibold mt-8 nx-text-2xl"
//                     >
//                         {page.frontMatter?.title || page.meta?.title || page.name}
//                     </Link>
//                     <p className="opacity-80" style={{ marginTop: ".5rem" }}>
//                         {page.meta?.description}{" "}
//                         <span className="inline-block">
//                             <Link href={page.route}>{more + " →"}</Link>
//                         </span>
//                     </p>
//                 </div>
//             );
//         });
// }