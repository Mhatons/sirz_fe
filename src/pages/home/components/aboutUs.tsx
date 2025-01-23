import { sampleImage } from "../../../assets/images";
import Button from "../../../components/common/button";

export default function AboutUs() {
    return (
        <div>
            <section className="pt-16 pb-4">
                <h2 className="text-3xl text-center font-bold mb-0 text-primary font-comfortaa ">About Us</h2>
                <div className="sm:grid grid-cols-2 max-sm:flex-col sm:w-[80%] w-[90%] m-auto gap-16 mb-5 py-14">
                    <div className=" relative sm:h-[450px] h-[350px] ">
                        <img src={sampleImage} alt="" className="w-full h-full transform scale-x-[-1] object-cover rounded-3xl" />
                        <div className=" text-center font-comfortaa p-4 shadow-lg mt-[-2em] absolute right-0 left-0 rounded-2xl text-md font-extrabold sm:w-[75%] m-auto bg-[#fff] z-10 text-[#AB4412]">
                            Henry E. E. - Real Estate Expert, GIS Specialist, and Surveyor
                        </div>
                    </div>
                    <div className=" max-sm:pt-10">
                        <div className="pb-12 max-sm:pt-8 font-comfortaa ">
                            <p className="">
                                Haven & Hive Interiors is dedicated to providing comprehensive interior design services that blend functionality with aesthetic appeal
                            </p>
                            <p className="py-5">
                                We strive to create environments that reflect our clients' personalities and needs, ensuring satisfaction through meticulous attention to detail and innovative design solutions.
                            </p>
                            <p className="py-5">
                                Our long-term vision includes expanding our services to encompass complete building projects and developing a line of customized interior products under our brand.
                            </p>
                        </div>
                        <div className="sm:w-1/2">
                            <Button onClick={() => { }} text="Get Started now" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}