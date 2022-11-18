import React, { useState, useEffect, useRef} from "react"

export default function App() {
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef<HTMLInputElement>(null)
    const preValue = useRef('')

    useEffect(()=>{
        renderCount.current++
        console.log(inputRef.current)
    })
    
    const focus = () => {
        if(null !== inputRef.current) {
            inputRef.current?.focus()
        }
    }

    return(
        <div>
            <h1>
                Count render: {renderCount.current}
            </h1>

            <input className="input" type="text" ref={inputRef} onChange={e=>setValue(e.target.value)} value={value} />
            <button className="btn btn-success" onClick={focus}>Focus</button>
        </div>

    )

}