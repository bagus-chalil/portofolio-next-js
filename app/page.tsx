'use client'

import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#001F3F]">
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <div className="container border mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent 
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold">I'am Ready for Job</h1>

                    <RotatingText
                      texts={['Web Development', 'Devops', 'Machine Learning']}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#FFD717] text-black overflow-hidden py-0.5 
                      sm:py-1 md:py-2 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>

                <div className="flex flex-col items-start">
                  <SplitText
                      text="Hello, I am Mohammad Bagus Chalil A!"
                      className="text-2xl font-semibold text-start"
                      delay={150}
                      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                      threshold={0.2}
                      rootMargin="-50px"
                    />
                  <SplitText
                      text="Hello, I am Mohammad Bagus Chalil A!"
                      className="text-2xl font-semibold text-start text-[#FFD717]"
                      delay={75}
                      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                      threshold={0.2}
                      rootMargin="-50px"
                    />
                </div>

                <div>
                  <BlurText
                    text="Isn't this so cool?!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-2xl mb-8"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
