import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
			  touchControls: true,
			  gyroControls: false,
			  minHeight: 200.00,
			  minWidth: 200.00,
			  scale: 1.00,
			  scaleMobile: 1.00,
			  color: 0x4e4e7a,
			  backgroundColor: 0x11,
			  points: 20.00,
			  maxDistance: 20.00,
			  spacing: 14.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className="page-wrapper" ref={myRef}>
  
  </div>
}