// import { IoLockClosedOutline } from "react-icons/io5";
// import Gallery from "../../components/gallery";
// import banner from '../../assets/banner.webp';
// import benefitImage from '../../assets/tran.png'
// import Hero from "../../components/hero/hero";
// import Card from "../../components/layout/card";
// import { CiDollar } from "react-icons/ci";
// import { MdShowChart } from "react-icons/md";
// import Button from "../../components/common/button";
// import { FaArrowRightLong } from "react-icons/fa6";
// import CalculateProfit from "../../components/calculateProfit";
// import InvestmentTable from "../../components/investmentTable";

// export default function Home() {

//     const cardMenu = [
//         {
//             icon: <IoLockClosedOutline />,
//             title: "Unmatched Security",
//             description: "Your investments are safeguarded with state-of-the-art encryption."
//         },
//         {
//             icon: <CiDollar />,
//             title: "Consistent Returns",
//             description: "Achieve financial growth with our proven strategies."
//         },
//         {
//             icon: <MdShowChart />,
//             title: "Diverse Portfolio",
//             description: "We invest in a wide range of assets for balanced growth."
//         },
//     ];

//     const journeyMenu = [
//         {
//             index: 1,
//             description: "Join our telegram bot",
//             color: "#007B8A",
//             icon: <FaArrowRightLong />
//         },
//         {
//             index: 2,
//             description: "Deposit your capital",
//             color: "#00A8E8",
//             icon: <FaArrowRightLong />
//         },
//         {
//             index: 3,
//             description: "Choose your trading mode: Conservative or Aggressive",
//             color: "#007B8A",
//             icon: <FaArrowRightLong />
//         },
//         {
//             index: 4,
//             description: "Earn automated consistent profits",
//             color: "#00A8E8"
//         },
//     ];

//     return (
//         <div className=" sm:pt-40 pt-10">
//             <Hero />
//             <div className=" text-white mt-8 pb-6">
//                 <div className="flex sm:w-[90%] max-sm:flex-col py-10 m-auto items-center justify-center sm:justify-evenly">
//                     {
//                         cardMenu.map((card, index) => (
//                             <div className="sm:w-[30%]">
//                                 <Card
//                                     key={index}
//                                     title={card.title}
//                                     icon={card.icon}
//                                     description={card.description}
//                                 />
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <div id="about" className=" sm:text-[22px] text-[17px] text-center shadow-lg rounded-2xl font-semibold sm:px-20 px-5 py-10 sm:w-[75%] m-auto">
//                     <div className="pb-6">Our fund management team comprises of experienced professional traders with a proven track record. Our TRADING BOT has been designed to generate profitable trading results by replicating the strategies of our multiple experienced traders.</div>

//                     <div>Our fund manages capital for thousands of customers across the globe through our BOT and helps our clients earn a consistent passive income on their capital. Our diversified strategies allow us to manage the risk in our client's portfolio based on their specific risk appetite.</div>
//                 </div>
//             </div>
//             <div>
//                 <div className="bg-[#ffffff24] py-10">
//                     <section className="flex w-[90%] m-auto max-sm:flex-col-reverse items-center gap-10">
//                         <div className=" shadow-xl rounded-xl sm:p-6 p-3 sm:text-[22px] text-[17px] bg-white">
//                             <div className="text-[#006EB7] font-semibold pb-4">Fund your account in less than 2 minutes and secure your consistent passive earnings today. Our bot runs 24/7 and scans through different markets to diversify your portfolio across different asset classes including Indices, Forex, Crypto, Commodities etc.</div>
//                             <ul className="">
//                                 <li>- 1-2% of average daily profit on conservative strategies</li>
//                                 <li>- 4-5% of average daily profit on aggressive strategies</li>
//                                 <li>- Max daily loss is capped at 1% for conservative strategies to protect your capital</li>
//                                 <li>- All trades are broadcasted in your account for full transparency</li>
//                                 <li>- $25 minimum deposit</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <img src={banner} alt="" className="rounded-xl" />
//                         </div>
//                     </section>
//                 </div>

//                 <section className="bg-[#0c33f4a6] mt-10 py-8 ">
//                     <div className="flex w-[90%] max-sm:flex-col m-auto items-center gap-10">
//                         <div className="sm:w-[35%]">
//                             <img src={benefitImage} alt="" className="w-full object-contain" />
//                         </div>
//                         <div className=" text-white sm:w-[50%] sm:text-[22px] ">
//                             <div className="font-semibold max-sm:text-[20px] pb-4">Key benefits to choose our fund management team:</div>
//                             <ul className="">
//                                 <li>- 5+ years of experience</li>
//                                 <li>- No monthly subscription, no hidden fee, no deposit fee</li>
//                                 <li>- You get to keep 80% of all the profits generated through your capital</li>
//                                 <li>- We only charge 15% performance fee as per regulatory industry standards and 5% withdrawal fee</li>
//                                 <li>- You can withdraw your capital anytime if you decide to opt out</li>
//                                 <li>- Withdrawal time as fast as 5 business days</li>
//                                 <li>- Bonus earnings through referrals if you choose to opt in </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="flex items-center border w-[95%] m-auto mt-14 rounded-lg justify-center flex-col py-10">
//                     <header className="sm:text-[35px] text-[25px] max-sm:text-center font-exo font-bold text-[#ddd] pb-10">Start your journey towards your financial freedom in 4 simple steps:</header>
//                     <Button name="Start here" onClick={() => { }} />
//                     <ul className="sm:flex items-start justify-between w-[90%] m-auto pt-14">
//                         {
//                             journeyMenu.map((item, index) => (
//                                 <li className="flex sm:w-[24%] items-start sm:justify-between justify-center max-sm:pb-20 ">
//                                     <div key={index} className="flex items-center justify-center flex-col">
//                                         <h2 style={{ backgroundColor: item.color }} className={`h-16 w-16 rounded-full  font-exo flex items-center justify-center text-white font-bold text-[30px]`}>{item.index}</h2>
//                                         <h4 className="sm:text-[20px] text-[18px] max-sm:pt-4 text-center font-bold text-[#ddd]">{item.description}</h4>
//                                     </div>
//                                     <div className="text-[30px] max-sm:hidden mt-5 text-[#06C6D1]">{item.icon}</div>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </section>
//                 <div className="pt-14">
//                     <CalculateProfit />
//                     <Gallery />
//                     <InvestmentTable />
//                 </div>
//             </div>
//         </div>
//     )
// }








import React, { useEffect, useRef, useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import Gallery from "../../components/gallery";
import banner from "../../assets/banner.webp";
import benefitImage from "../../assets/tran.png";
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
