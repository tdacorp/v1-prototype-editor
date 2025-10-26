"use client"

import { centerHero, formHero, leftHero, rightHero, shapeDividerHero, splitHero, statsHero, videoHero } from "@/components/hero/defaults"
import Hero from "@/components/hero/Hero"

export default function Home() {
  return (
      <div>
        <Hero schema={centerHero}/>
        <Hero schema={splitHero}/>
        <Hero schema={leftHero}/>
        <Hero schema={rightHero}/>
        <Hero schema={formHero}/>
        <Hero schema={shapeDividerHero}/>
        <Hero schema={statsHero}/>
        <Hero schema={videoHero}/>
      </div>
  )
}
