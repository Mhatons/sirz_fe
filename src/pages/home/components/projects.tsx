import { useNavigate } from "react-router-dom";
import { ProjectData } from "../../../constants/projectData";
import ProjectCard from "../../../components/layout/projectCards";
import Button from "../../../components/common/button";

export default function OurProjects() {
    const navigate = useNavigate()
    return (
        <div className="py-10">
            <header className="text-[30px] text-center font-comfortaa">Our Recent Projects</header>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-1 pt-10 w-[90%] m-auto">
                {
                    ProjectData.slice(0,3).map((project, index) => (
                        <div onClick={() => navigate(`/project-details/${project.title}`)} key={index}>
                            <ProjectCard
                                title={project.title}
                                desc={project.description}
                                image={project.image[0]}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center w-[30%] m-auto  justify-center">
                {/* <button className=" bg-[#2a84a074] border rounded-full px-12 tracking-wider text-md py-3">Click to see more</button> */}
                <Button onClick={() => navigate("/projects")} text="Click to see more" />
            </div>
        </div>
    )
}