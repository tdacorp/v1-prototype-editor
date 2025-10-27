"use client"
import Buttoncomp from "@/components/button/button";
import { defaultButton, gradientButton, iconLeftButton, iconRightButton, outlinedButton } from "@/components/button/defaults";

export default function Home() {
  return (
    <>

    <div className="min-h-screen p-10">

      <Buttoncomp data={defaultButton} />
      <Buttoncomp data={outlinedButton} />
      <Buttoncomp data={gradientButton} />
      <Buttoncomp data={iconLeftButton} />    
      <Buttoncomp data={iconRightButton} />   
    </div>
    </>
  )
}
