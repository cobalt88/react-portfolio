import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

function BackgroundAnimation(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x4e4e7a,
          backgroundColor: 0x11,
          points: 20.0,
          maxDistance: 20.0,
          spacing: 14.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div className="page-wrapper" ref={myRef}></div>;
}

export default BackgroundAnimation;
