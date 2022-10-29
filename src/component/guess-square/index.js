import { useStoreContext } from 'context/StoreContext'
import React from 'react'

const GuessSquare = ({chooseSquare, value}) => {
    const { guess } = useStoreContext()
    return (
        <div
            className={`flex items-center justify-center rounded cursor-pointer text-white h-10  w-10 border border-[rgb(60,111,255)] ${guess === value ? 'bg-[rgb(60,111,255)]' : ''}`}
            onClick={() => chooseSquare(value)}
        >
            {value}
        </div>
    )  
}

export default GuessSquare