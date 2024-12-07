import React, { useState } from "react";
import Im1 from "./images/210.svg";
import Im2 from "./images/211.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

const CAB = () => {
  const router = useRouter();
  const [getMobileNo, setGetMobileNo] = useState('');


  const handleBoostMyViewsBtn = async () => {
    console.log("mobileNo.", getMobileNo)
    const data = {
      mobileNumber: getMobileNo
    }
    const res = await axios.post('https://api.streamway.in/leads', data)
    console.log("resssssssssssssss " , res)
    // router.push('https://app.streamway.in/');
  };
  return (
    <div className=" bg-[#f5fbff] relative max-w-full mx-auto">
      <Image
        src={Im2}
        className="absolute w-[15%] lg:w-[inherit] left-0px top-0"
        alt="nothing"
      ></Image>
      <Image
        src={Im1}
        className="absolute w-[15%] lg:w-[inherit] bottom-0 right-0"
        alt=""
      ></Image>

      {/* MAIL BOX */}

      <div className="container  relative z-10 mx-auto bg-no-repeat p-10 md:p-16 pt-0 bg-cover bg-center ">
        <div className="container text-center pt-5 md:p-16 z-10">
          <div>
            <span className="f text-4xl md:text-6xl font-semibold relative tracking-wider inline-block">
              Try Streamway Free
            </span>
          </div>
          <span className=" text-xl md:text-3xl tracking-wider block mt-8">
          Get a 14 days free trail now
            <span className="hidden md:inline">
              <br />
            </span>{" "}
          </span>
        </div>
        <div className="container justify-center w-fit md:w-[80%] text-center mx-auto md:flex mt-5 md:mt-0 space-y-2 md:space-y-0 ">
          <input
            onChange={(e) => {setGetMobileNo(e.target.value)}}
            type="tel"
            className="md:w-[400px] border-[3px] inline-block mr-2 text-black text-lg md:text-xl p-1 md:p-5 border-black rounded-3xl"
            placeholder="Your Mobile Number"
          />
          <button
            onClick={() => handleBoostMyViewsBtn()}
            type="submit"
            className="text-white bg-[#fd6a5e] border-[3px] p-2 md:px-5 md:text-2xl tracking-tighter font-semibold  rounded-full hover:border-[#fd6a5e] hover:bg-white hover:text-[#fd6a5e]"
          >
            Boost My Views
          </button>
        </div>
      </div>
    </div>
  );
};

export default CAB;
