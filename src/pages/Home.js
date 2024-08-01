import React from "react";

import { LuTreeDeciduous } from "react-icons/lu";
import { FaLeaf } from "react-icons/fa6";
import { GiTreehouse } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";
import { GiVineLeaf } from "react-icons/gi";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Goal from "../components/Goal"
import Info from '../assets/data'
import Features from '../assets/features'
import Obj from '../assets/obj'
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
      <Navbar />
      <Card
        card={0}
        Icon={LuTreeDeciduous}
        dir={0}
        title="Sustainability"
        Desc="Sustainability is the practice of meeting current needs without compromising the ability of future generations to meet theirs. It encompasses environmental, economic, and social dimensions, focusing on preserving natural resources, reducing pollution, and promoting equitable growth to ensure a balanced, healthy planet for all living beings."
        last={4}
      />
      <Card
        card={1}
        Icon={FaLeaf}
        dir={1}
        title="Sustainability Goals"
        Desc={<Goal num={17} Info={Info}/>}
        last={4}
      />
      <Card
        card={2}
        Icon={GiTreehouse}
        dir={0}
        title="What is Sustainify ?"
        Desc="A Sustainable Future Hub that is a dynamic and inclusive platform for improving knowledge and capacity of people in the key themes of sustainable development, with affordable and clean energy and climate action. This is a platform that aims at raising awareness, offering tools for work, and capacitating communities into sustainable practices. The creation of the Sustainable Future Hub would provide educational materials, interactive features, and monitoring tools to materialize actions toward a more sustainable future."
        last={4}
      />
      <Card
        card={3}
        Icon={GiPalmTree}
        dir={1}
        title="Objectives :"
        Desc={<Goal num={4} Info={Obj}/>}
        last={4}
      />
      <Card
        card={4}
        Icon={GiVineLeaf}
        dir={0}
        title="Features provided by Us:"
        Desc={<Goal num={6} Info={Features}/>}
        last={4}
      />
      <Footer/>
    </div>
  );
};

export default Home;
