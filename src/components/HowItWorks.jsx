import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);
export default function HowItWorks() {
  const videoRef = useRef();
  //   videoRef.current.play();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="Chip Image" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 pro chip. <br /> A moster went for gaming
          </h2>
          <p className="hiw-subtitle">
            Its here the biggest redesign in the history of apple GPUs.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="Frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                muted
                autoPlay
                preload="none"
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
          <div className="hiw-text-container flex flex-1 justify-center flex-col mt-10">
            <div className="flex-1 flex justify-center flex-col">
              <p className="hiw-text g_fadeIn">
                A17 Pro is an entirely new class of iphone chip that delivers
                our{" "}
                <span className="text-white">
                  Best graphic performance by far.
                </span>
              </p>
              <p className="hiw-text g_fadeIn">
                Mobile{" "}
                <span className="text-white">
                  Mobile will look and so immersive
                </span>
                with incredibly detailed enviroment and characters.
              </p>
            </div>
            <div className="flex-1 flex justify-center flex-col g_fadeIn">
              <p className="hiw-text">New</p>
              <p className="hiw-bigtext">Pro-class GPU</p>
              <p className="hiw-text">With 6 cores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
