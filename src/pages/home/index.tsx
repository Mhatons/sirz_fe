import { useEffect, useRef, useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import Gallery from "../../components/gallery";
import Hero from "../../components/hero/hero";
import Card from "../../components/layout/card";
import { CiDollar } from "react-icons/ci";
import { MdShowChart } from "react-icons/md";
import Button from "../../components/common/button";
import { FaArrowRightLong } from "react-icons/fa6";
import CalculateProfit from "../../components/calculateProfit";
import InvestmentTable from "../../components/investmentTable";

export default function Home() {
  const cardMenu = [
    {
      icon: <IoLockClosedOutline />,
      title: "Unmatched Security",
      description: "Your investments are safeguarded with state-of-the-art encryption.",
    },
    {
      icon: <CiDollar />,
      title: "Consistent Returns",
      description: "Achieve financial growth with our proven strategies.",
    },
    {
      icon: <MdShowChart />,
      title: "Diverse Portfolio",
      description: "We invest in a wide range of assets for balanced growth.",
    },
  ];

  const journeyMenu = [
    {
      index: 1,
      description: "Join our telegram bot",
      color: "#007B8A",
      icon: <FaArrowRightLong />,
    },
    {
      index: 2,
      description: "Deposit your capital",
      color: "#00A8E8",
      icon: <FaArrowRightLong />,
    },
    {
      index: 3,
      description: "Choose your trading mode: Conservative or Aggressive",
      color: "#007B8A",
      icon: <FaArrowRightLong />,
    },
    {
      index: 4,
      description: "Earn automated consistent profits",
      color: "#00A8E8",
    },
  ];

  // Function to handle scroll animations for sections
  const useIntersectionObserver = () => {
    const [visibleSections, setVisibleSections] = useState<string[]>([]);
    const refMap = useRef<Map<string, HTMLElement>>(new Map());

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.id;
            if (entry.isIntersecting) {
              setVisibleSections((prev) => [...new Set([...prev, sectionId])]);
            }
          });
        },
        { threshold: 0.5 }
      );

      refMap.current.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, []);

    const registerRef = (id: string, ref: HTMLElement | null) => {
      if (ref) refMap.current.set(id, ref);
    };

    return { visibleSections, registerRef };
  };

  const { visibleSections, registerRef } = useIntersectionObserver();

  return (
    <div className="sm:pt-40 pt-10">
      {/* Hero Section */}
      <Hero />

      {/* Card Section */}
      <div
        ref={(ref) => registerRef("cardSection", ref)}
        id="cardSection"
        className={`${
          visibleSections.includes("cardSection")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000 ease-in-out text-white mt-8 pb-6`}
      >
        <div className="flex sm:w-[90%] max-sm:flex-col py-10 m-auto items-center justify-center sm:justify-evenly">
          {cardMenu.map((card, index) => (
            <div className="sm:w-[30%]" key={index}>
              <Card
                title={card.title}
                icon={card.icon}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div
        ref={(ref) => registerRef("aboutSection", ref)}
        id="aboutSection"
        className={`${
          visibleSections.includes("aboutSection")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000 ease-in-out text-white sm:text-[22px] text-[17px] text-center shadow-lg rounded-2xl font-semibold sm:px-20 px-5 py-10 sm:w-[75%] m-auto`}
      >
        <div className="pb-6">
          Our fund management team comprises of experienced professional traders
          with a proven track record. Our TRADING BOT has been designed to
          generate profitable trading results by replicating the strategies of
          our multiple experienced traders.
        </div>
        <div>
          Our fund manages capital for thousands of customers across the globe
          through our BOT and helps our clients earn a consistent passive
          income on their capital. Our diversified strategies allow us to
          manage the risk in our client's portfolio based on their specific
          risk appetite.
        </div>
      </div>

      {/* Journey Section */}
      <section
        ref={(ref) => registerRef("journeySection", ref)}
        id="journeySection"
        className={`${
          visibleSections.includes("journeySection")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000 ease-in-out flex items-center border w-[95%] m-auto mt-14 rounded-lg justify-center flex-col py-10`}
      >
        <header className="sm:text-[35px] text-[25px] max-sm:text-center font-exo font-bold text-[#ddd] pb-10">
          Start your journey towards your financial freedom in 4 simple steps:
        </header>
        <Button name="Start here" onClick={() => {}} />
        <ul className="sm:flex items-start justify-between w-[90%] m-auto pt-14">
          {journeyMenu.map((item, index) => (
            <li
              key={index}
              className="flex sm:w-[24%] items-start sm:justify-between justify-center max-sm:pb-20"
            >
              <div className="flex items-center justify-center flex-col">
                <h2
                  style={{ backgroundColor: item.color }}
                  className={`h-16 w-16 rounded-full font-exo flex items-center justify-center text-white font-bold text-[30px]`}
                >
                  {item.index}
                </h2>
                <h4 className="sm:text-[20px] text-[18px] max-sm:pt-4 text-center font-bold text-[#ddd]">
                  {item.description}
                </h4>
              </div>
              <div className="text-[30px] max-sm:hidden mt-5 text-[#06C6D1]">
                {item.icon}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Remaining Sections */}
      <div className="pt-14">
        <CalculateProfit />
        <Gallery />
        <InvestmentTable />
      </div>
    </div>
  );
}
