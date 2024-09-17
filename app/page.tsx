"use client"

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/Textarea";
import WaterWaveContainer from "@/components/visualEffect/WaterWaveContainer";
import Landing from "@/sections/Landing";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { IoCodeDownloadOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

// import WaterWaveContainer from "@/components/visualEffect/WaterWaveContainer";

export default function Home() {
  return (
    <>
    <WaterWaveContainer
      imageUrl=""
      dropRadius="3"
      perturbance="10"
      resolution="2048"
    >
      {() => (
        <>
          <Landing />
        </>
      )}
    </WaterWaveContainer>
      {/* <div className="h-screen p-10">
          <Landing />
      </div> */}
    </>
  );
}
