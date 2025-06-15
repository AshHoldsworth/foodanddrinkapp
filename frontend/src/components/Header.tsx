import { FC } from "react"
import NavSections from "./NavSections"
import { navSections } from "@/constants/navSections";

interface Props {
    className?: string
}

const Header: FC<Props> = ({ className }: Props) => {
    return (
        <div className={`${className} w-full pt-2 pb-2 flex flex-col items-center`}>
            <h1>Food and Drink App</h1>
            <NavSections sections={navSections}/>
        </div>
    )
}

export default Header
