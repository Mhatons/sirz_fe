import HeaderFormat from "../../../components/header";
import MainCard from "../../../components/layout/cards/mainCard";

export default function OurBlog() {
    return (
        <div className=" sm:w-[85%] w-[90%] m-auto pb-10">
            <HeaderFormat title="Check out our blog.." classNames="text-black dark:text-white" />
            <h4 className=" font-bold py-6 text-[27px] leading-9">
                Whether you're launching a business or scaling one, our blog keeps you informed and inspired. Read the latest now!
            </h4>
            <section className=" grid sm:grid-cols-3 gap-8">
                <MainCard />
                <MainCard />
                <MainCard />
            </section>
        </div>
    )
}