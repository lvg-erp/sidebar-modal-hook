import React, { useState, useCallback } from 'react'
import ItemsList from './itemsList'

export default function App() {

    const [count, setCount] = useState(1)
    const [colored, setColored] = useState(false)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    // const generateItemsFromAPI = () => {
    //     return new Array(count).fill('').map((_, i) => `Element ${i+1}`)
    // }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Element ${i+1}`)
    }, [count])

    return(
        <>
            <div className='ml-2 w-64 space-x-4 place-content-evenly'>

                <h1 className="text-xl font-semibold" style={styles}>Вычисляемое свойство: { count }</h1>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={()=>setCount(prev=>prev+1)}>Добавить</button>
                {/* <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={()=>setNumber(prev=>prev-1)}>Минус</button> */}
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>setColored(prev=>!prev)}>Изменить</button>

                <ItemsList getItems={generateItemsFromAPI} />

            </div>
        </>
    )
}


