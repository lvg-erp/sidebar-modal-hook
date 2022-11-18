import React, { useState } from "react"
import './Modal.css'

interface IModalProps {
    closeModal: ()=>void
}

export function Modal({closeModal}:IModalProps){   

    const [color, setColor] = useState(false)
    return(
        <>
        {<div className="overlay">
            <div className="modal">
                <svg height="200" viewBox="0 0 200 200" width="200" onClick={closeModal}>
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
                <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
                <div className="group-btn">
                    <div className="btn-auth" 
                        onMouseDown={()=>setColor(true)} 
                        onMouseUp={()=>setColor(false)} 
                        style={color ? {backgroundColor: 'gray'} : {}} 
                        >
                            Войти
                        </div>
                    <div className="btn-cancel" onClick={closeModal}>Отмена</div>
                </div>
            </div>
      </div>} 
      </> 
    )
}