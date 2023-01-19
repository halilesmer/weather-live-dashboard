import DegreeUnitSwitcher from '../DegreeUnitSwitcher'
import Image from "next/image";
import React from 'react'
import avatar from "../../../public/avatar.jpg";
import useWindowSize from "@/utils/useWindowSize";
const NavCon = () => {
    let screenSize = useWindowSize();
    return (
        // Wenn innere Displaygröße größer ist als angegebener Zahl, erst dann erscheint der  Switchbutton

        <div className="nav-con grid grid-cols-1 grid-flow-col pt-4" >
            {screenSize.width > 768 && <DegreeUnitSwitcher />}

            <figure className="nav-con_avatar-icon mr-5">
                {/* Dieses Icon zeigt die aktuelle Wetterlage */}
                <Image
                    className="inline-block "
                    src={avatar}
                    alt="avatar picture"
                    width="34"
                    height="34"
                    blurDataURL="blur"
                    priority="true"
                />
            </figure>
        </div >
    )
}

export default NavCon