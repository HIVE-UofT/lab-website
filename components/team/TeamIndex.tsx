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
                    <h3 className="text-gray-600 text-3xl font-semibold sm:text-4xl">
                        Our Team
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