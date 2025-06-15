import { NavSection } from "@/types/NavSection"
import Link from "next/link"
import { FC } from "react"

interface Props {
    className?: string
    sections: NavSection[]
}

const NavSections: FC<Props> = ({ className, sections }) => {
    return (
        <div className={`${className} w-full flex justify-around`}>
            {sections.map((section, index) => {
                return (
                    <Link href={`/${section.path}`} key={index}>
                        <p>{section.name}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default NavSections
