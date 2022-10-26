import React from 'react'

const Button = ({ title, handleClick, ...props }) => {
    return (
        <button onClick={handleClick} {...props} className="text-white bg-[rgb(245,210,24)] py-[10px] px-[30px] rounded-[10px] cursor-pointer font-semibold text-xl capitalize">{title}</button>
    )
}

export default Button
