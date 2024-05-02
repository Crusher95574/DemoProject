import React from 'react'
import { Banner } from "./Banner";
 import { About } from "./About";
 import { Projects } from "./Projects";
 import { Technology } from "./Technology";
 import { Careers } from "./Careers";
 import { Contact } from "./Contact";
 import { Footer } from "./Footer";

export const Home=()=> {
  return (
    <div>
    <Banner/>
    <About />
    <Projects />
    <Technology/>
    <Careers/>
    <Contact />
    <Footer />
    </div>
  )
}
