import React, { useEffect, useRef, useState } from 'react'
import "./navs.css"

function Test() {
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef();
    
    useEffect(() => {
        const closeDropdown = e => {
            console.log(e.button);
if (e.path[0] !== btnRef.current) {
            setIsOpen(false)
            }
};
            document.body.addEventListener('click', closeDropdown);
        return () => document.body.addEventListener('click', closeDropdown);
    },[])
  return (
    <div>
        <button ref={btnRef} onClick={() => setIsOpen(prev => !prev)}>pasirinkimai</button>
    <div className={'dropdown ' + (isOpen ? 'open' : 'closed')}>
      <a href="#">pirmas</a>
      <a href="#">antras</a>
      <a href="#">trecias</a>
    </div>
    </div>
  )
}

export default Test