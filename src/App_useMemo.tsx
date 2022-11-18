import React, {useState, useEffect, useMemo} from 'react'


function complexComputed(num:number){
    let i = 0
    while (i < 1000000000) i++
    return num*2
}

export default function App() {

    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    // const styles = {
    //     color: colored ? 'darkred' : 'black'
    // }

    const styles = useMemo(()=>{
        return {
            color: colored ? 'darkred' : 'black'
        }
    }, [colored])

    const computed = useMemo(() => {
        return complexComputed(number)
    }, [number])

    return (
        <>
            <h1 className="text-xl font-semibold" style={styles}>Вычисляемое свойство: { computed }</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={()=>setNumber(prev=>prev+1)}>Плюс</button>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={()=>setNumber(prev=>prev-1)}>Минус</button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>setColored(prev=>!prev)}>Изменить</button>
        </>
    )

}