
import React, { useEffect, useState } from "react";


function App() {

    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState(
        {
            x: 0,
            y: 0
        }
    )

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    const mouseHandler = (event: { clientX: any; clientY: any; }) => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(()=>{
        window.addEventListener('mousemove', mouseHandler)
        return () => {
            window.removeEventListener('mousemove', mouseHandler)
        }
    }, [])

    return(
        <div>
            <h1>
                Resurs: {type}
            </h1>

            <button onClick={()=>setType('users')}>Users</button>
            <button onClick={()=>setType('todos')}>Todos</button>
            <button onClick={()=>setType('posts')}>Posts</button>

            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}

export default App
