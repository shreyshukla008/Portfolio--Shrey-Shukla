import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HERO_TYPED_STRINGS } from "@/constants/content";
import { SECTION_IDS } from "@/constants/navigation";
import Scroller from "./components/Scroller";
import Socials from "./components/Socials";
import "./Hero.css";

const Hero = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: HERO_TYPED_STRINGS,
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <div
      className="flex flex-col items-center min-h-screen justify-end gap-28 pb-10 w-full bg-slate-100 rounded-lg"
      id={SECTION_IDS.HERO}
    >
      <div className="bgHero bg-slate-200 border-[#4e45d5] phone:w-[90%] sm:w-[600px] sm: flex flex-col gap-4 justify-center items-center border-2 p-4 py-8 rounded-2xl text-black z-10">
        <div className="relative flex justify-between w-full items-center">
          <div className="flex flex-col items-start justify-between mt-2 gap-4 w-full">
            <h3 className="text-xl font-semibold">Hi! I am</h3>
            <h2 className="text-3xl font-bold -mt-2">Shrey Shukla</h2>
            <p className="text-2xl">
              <br className="sm:hidden" />{" "}
              <span className=".role font-bold text-[#4e45d5]" ref={el} />
            </p>
            <Socials />
          </div>

          <div>
            <img
              className="absolute opacity-0 phone:opacity-100 phone:scale-[1.4] phone:bottom-10 phone:right-4 -z-10 w-[27%]"
              loading="lazy"
              src="/assets/heroImg.png"
              alt=""
            />
          </div>

          <div>
            <img
              className="absolute opacity-100 phone:opacity-0 phone:bottom-10 phone:right-4 z-10 -right-14 -top-20 w-[60%] rounded-full border-2 border-[#4e45d5] bg-slate-200 shadow-lg shadow-slate-600"
              src="/assets/heroImgSqr.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        <a
          className="flex flex-col justify-center items-center scale-110s mt-2 text-[#4e45d5]"
          href={`#${SECTION_IDS.ABOUT}`}
        >
          <Scroller />
          <p className="-mt-2">=</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
