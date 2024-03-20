import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { memo } from "react";
import IconBar from './IconBar';
import { FrontMatter } from './type';
import { ReactNode } from 'react';

const WrapLink = ({ href, children }: { href?: string, children: ReactNode }) => {
    if (href) {
        return (<Link href={href}>
            {children}
        </Link>);
    }
    return children;
}

const TeamCard = memo(({ frontMatter, route, idx = 0 }: { route?: string, frontMatter?: FrontMatter, idx?: number }) => {

    const View = (<>
        <div className="w-full h-60 sm:h-52 md:h-56">
            <WrapLink href={route}>
                <img
                    src={frontMatter?.image}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                />
            </WrapLink>
        </div>
        <div className="mt-4 flex justify-center items-center flex-col">
            <WrapLink href={route}>
                <h2 className="text-xl hover:text-2xl font-semibold">{frontMatter.title}</h2>
            </WrapLink>
            <WrapLink href={route}>
                <p>{frontMatter.role}</p>
            </WrapLink>
        </div>
        <div className="mt-3 flex gap-4 justify-center">
            {
                IconBar.map(item => {
                    const value = frontMatter[item.field]
                    if (value) {
                        return (
                            <Link href={value} target="_blank">
                                {item.icon}
                            </Link>
                        );
                    }
                    return null;
                })
            }
        </div>
    </>);

    if (idx < 1) {
        // in team member page 
        return (
            <center>
                <div className="w-1/2 md:w-1/4">
                    {View}
                </div>
            </center>
        );
    }
    return (
        <li key={idx}>
            {View}
        </li>
    );
});

export default TeamCard;