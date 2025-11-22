'use client'; 

import Spline from '@splinetool/react-spline';

export default function Scene3D() {
  return (
    /* 1. The container clips anything outside its box */
    <div className="w-full h-[500px] lg:h-[700px] flex items-center justify-center relative z-10 overflow-hidden">
      
      {/* 2. The wrapper scales the scene up by 20% (scale-[1.2]). 
          This physically pushes the "Built with Spline" logo 
          (which is in the corner) out of the visible area. 
      */}
      <div className="w-full h-full scale-[1.2] pl-22 origin-center">
        <Spline 
        scene="https://prod.spline.design/Z80XRGTgzGxAOri5/scene.splinecode" 
        className="w-full h-full"
        />
      </div>
      
    </div>
  );
}