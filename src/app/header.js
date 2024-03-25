"use client"
import { useState } from "react"


const Header = () => {
    const [toggle, setToggle] = useState(true)
    const handleToggle1 = () => {
        setToggle(true)
    }
    const handleToggle2 = () => {
        setToggle(false)
    }
    return (
        <div class="flex"> 
        <div class={`${toggle?"border-b-4 border-pink-400 bg-blue-900":"bg-blue-950"} w-1/2 h-12 cursor-pointer`} onClick={handleToggle1}>
            <h6 class="text-white text-center pt-3">Discussion Forum</h6>
        </div>
        <div class={`${toggle?"bg-blue-950":"border-b-4 bg-blue-900 border-pink-400"} w-1/2 h-12 cursor-pointer`} onClick={handleToggle2}>
            <h6 class="text-white text-center pt-3">Market Stories</h6>
        </div>
      </div>
    )
}

export default Header