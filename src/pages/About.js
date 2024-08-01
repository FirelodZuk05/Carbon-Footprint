import React from 'react'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Goal from '../components/Goal'
import Obj from '../assets/obj'
import Features from '../assets/features'

import { GiTreehouse } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";
import { GiVineLeaf } from "react-icons/gi";
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Card
        card={0}
        Icon={GiTreehouse}
        dir={0}
        title="What is Sustainify ?"
        Desc="A Sustainable Future Hub that is a dynamic and inclusive platform for improving knowledge and capacity of people in the key themes of sustainable development, with affordable and clean energy and climate action. This is a platform that aims at raising awareness, offering tools for work, and capacitating communities into sustainable practices. The creation of the Sustainable Future Hub would provide educational materials, interactive features, and monitoring tools to materialize actions toward a more sustainable future."
        last={2}
      />
      <Card
        card={1}
        Icon={GiPalmTree}
        dir={1}
        title="Objectives :"
        Desc={<Goal num={4} Info={Obj}/>}
        last={4}
      />
      <Card
        card={2}
        Icon={GiVineLeaf}
        dir={0}
        title="Features provided by Us:"
        Desc={<Goal num={6} Info={Features}/>}
        last={4}
      />
      <Footer/>
    </div>
  )
}

export default About