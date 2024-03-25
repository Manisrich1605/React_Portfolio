import React from 'react'
import Title from '../layouts/Title'
import ml from "../../assets/images/projects/ml.jpg"
import bus from "../../assets/images/projects/bus.jpg"
import tracking from "../../assets/images/projects/tracking.jpg"
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Vehicle Tracking System using GPS,GSM and Arduino"
          des=" IOT based Project Which helps to track the coordinates of the vehicle in case of Lost of vehicle or during accidents, with the help of a GPS,GSM and Arduino."
          src={tracking}
        />
        <ProjectsCard
          title="Handwritten Text Recognition using Machine Learning"
          des=" Machine Learning project which helps us to convert the image into a editable form.Helps to understand different types of writings by converting to editable text."
          src={ml}
        />
        <ProjectsCard
          title="Smart Bus Station In rural Areas"
          des=" Project which helps us to reduce the finance waste by maintaing threshold value at main bustop and automatic switching off lights with respective to the natural light."
          src={bus}
        />
      </div>
    </section>
  );
}

export default Projects