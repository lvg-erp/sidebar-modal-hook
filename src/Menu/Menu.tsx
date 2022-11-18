import React, { useState } from "react"
import './Menu.css'

interface IMenuProps {
    value: string
    href: string
    icon: string
}

interface IProps {
    active: boolean
    itemsprops: IMenuProps[]
    onClose: () => void
}

export function Menu({active, itemsprops, onClose}: IProps) {

    const header = "Компани меню"

    return (      
     <div className= {active ? 'menu active' : 'menu'} >
            <div className="blur" onClick={onClose} />
            <div className="menu__content" >
                <div className="menu__header">{header}</div>
                <ul>
                    {itemsprops.map((item, index=0) => 
                        <li key={index} >
                            <a href={item.href} >{item.value} </a>
                            <span className="material-icons">{item.icon}</span>   
                        </li>   
                    )}
                </ul>
            </div>  
        </div>
     )
}

