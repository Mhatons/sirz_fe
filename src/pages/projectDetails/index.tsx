import { useParams } from "react-router-dom";
import { ProjectData } from "../../constants/projectData";
import { useAppSelector } from "../../app/hook";
import { allReduxSliceInfo } from "../../features/reduxSlice";

export default function ProjectDetails() {
    const { title } = useParams();
    const {isDarkMode} = useAppSelector(allReduxSliceInfo)

    const project = ProjectData.find(
        (project) => project.title === title
    );
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${project?.image[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className={`pt-28 pb-20 text-white ${isDarkMode ? "bg-[#000000a8]" : "backgroundGradient"}`}>
                    <div className=" sm:max-w-[60%] max-w-[90%] m-auto text-center">
                        <header className=' sm:text-[30px] text-[22px] pb-2 capitalize text-primary_dark dark:text-secondary_light '>{project?.title}</header>
                        <div className="sm:text-[20px] text-sm font-comfortaa dark:text-background_light text-background_dark">{project?.description}</div>
                    </div>
                </div>
            </div>
            <section className=" py-5">
                {project?.image.map((image, index) => (
                    <div
                        key={index}
                        className={` sm:max-h-[600px] max-h-[400px] my-4 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                    >
                        <img
                            src={image}
                            alt=""
                            className="h-full object-cover sm:w-[60%] w-[95%]"
                        />
                    </div>
                ))}
            </section>

        </div>
    )
}