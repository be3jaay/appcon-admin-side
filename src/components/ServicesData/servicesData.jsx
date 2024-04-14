import React from "react"
import { IoBagAddSharp } from "react-icons/io5";
import { BiSolidDoorOpen } from "react-icons/bi";
import { GiHealthNormal } from "react-icons/gi";
import { IoBedSharp } from "react-icons/io5";

export const servicesData = [
    {
        title: "Equipments",
        icon: <IoBagAddSharp />,
        cName: 'services-img'
    },
    {
        title: "Rooms",
        icon: <BiSolidDoorOpen />,
        cName: 'services-img'
    },
    {
        title: "Doctors",
        icon: <GiHealthNormal />,
        cName: 'services-img'
    },
    {
        title: "Beds",
        icon: <IoBedSharp />,
        cName: 'services-img'
    }
]