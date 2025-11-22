'use client'; 

import Spline from '@splinetool/react-spline';

export default function AboutScene() {
  return (
    /* 1. Container: Clips the overflow */
    <div className="w-full h-[500px] flex items-center justify-center relative z-10 overflow-hidden rounded-[2.5rem] bg-blue-50/30 border border-blue-100/50 backdrop-blur-sm">
      
      {/* 2. Wrapper: 
          - h-[120%]: Makes the canvas 20% taller than the box.
          - -mt-[15%]: Pulls the canvas UP. 
          Result: The top fits fine, but the bottom (with the logo) hangs outside the box and is hidden.
      */}
      <div className="w-full h-[120%] -mt-[15%] flex items-center justify-center cursor-grab active:cursor-grabbing">
        <Spline 
          scene="https://prod.spline.design/XEpyHdoGyhbBTEAt/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
    </div>
  );
}