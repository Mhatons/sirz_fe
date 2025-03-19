import heroBg from './images/Frame 1775.png';
import onboardinLogo from './images/sirz logo png 1.png';
import titleBorder from './images/Frame 3.png';
import markIcon from './images/Group.png';
import Button from '../../components/common/button';
import serviceShow from './images/Frame 1772 (2).png';
import emailImg from './images/bro.png';
import missionImg from './images/Group 1.png';
import indexOne from './images/index (1).png';
import indexTwo from './images/index (2).png';
import indexThree from './images/index (3).png';
import indexFour from './images/index (4).png';
import indexFive from './images/index (5).png';
import { FacebookIcon, InstagramIcon, LinkedlnIcon } from '../../assets/icons/svg';
import { socialLinks } from '../../utils';
import { DashbordVector, sirzLogoWhite, VidDemonstration } from '../../assets';
import WaterflowCards from './slider';
import WaterflowCardTwo from './slider2';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes/desc';
import HeaderFormat from '../../components/header';
// import { useAppSelector } from '../../app/hook';
// import { allReduxSliceInfo } from '../../features/reduxSlice';
import DashboardLetterForm from '../contact/components/dashbordForm';

const expectationData = [
    `A consultative approach, where we listen to your business needs and tailor our services accordingly. `,
    `A dedicated project manager to guide you through every step of the journey.`,
    `Access to our Sirz Portal, where you can track your projects, submit requests, and communicate with our team`,
    `A structured process that ensures transparency, communication, and efficiency.`,
];

const portalOverview = [
    {
        img: indexOne,
        title: `Dashboard Access`,
        text: `View active and completed projects, track progress, and stay updated.`
    },
    {
        img: indexTwo,
        title: `Task Management`,
        text: `Submit requests for services, assign priorities, and set deadlines.`
    },
    {
        img: indexThree,
        title: `Communication Hub`,
        text: `Send messages directly to your dedicated project manager and receive real-time updates.`
    },
    {
        img: indexFour,
        title: `File Sharing`,
        text: `Upload and access important documents and assets for your projects.`
    },
    {
        img: indexFive,
        title: `Performance Reports`,
        text: `Get insights and analytics on your project performance.`
    },
];

const steps = [
    {
        text: `Review the onboarding guide to familiarize yourself with our processes and the Sirz Portal.`
    },
    {
        text: `Complete any necessary intake forms to provide us with key details about your business`
    },
    {
        text: `Schedule a kickoff meeting with your assigned project manager to discuss goals and expectations.`
    },
    {
        text: `Start submitting requests via the Sirz Portal and begin your journey with us`
    },
]

export default function OnboardingPage() {
    const navigate = useNavigate();
    // const { isDarkMode } = useAppSelector(allReduxSliceInfo);
    return (
        <div>
            <section className=' p-2'>
                <div
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat'
                    }}
                    className=' rounded-lg overflow-hidden'
                >
                    <div className=' bg-[#00000062]'>
                        <div className=' flex items-center justify-center sm:w-[60%] w-[90%] m-auto flex-col h-screen'>
                            <div>
                                <img src={onboardinLogo} alt="" />
                            </div>
                            <h4 className=' sm:text-[45px] text-[30px] font-bold text-colorDefaultLight py-5 text-center'>Get started with <i className=' text-colorGreen'>SIRz</i> in just a few simple steps</h4>
                            <button className={` tracking-widest bg-white dark:text-black rounded-full sm:w-[30%] w-[90%] max-sm:mt-5
                                'w-full flex align-center justify-center py-4 cursor-pointer text-sm px-8 font-medium floating-button  
                                `}
                                onClick={() => navigate(ROUTES.HOME.PATH)}>
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-colorLight dark:bg-colorDark border-t-8 sm:w-[90%] w-[95%] mt-[-5em] pb-10 rounded-t-3xl m-auto border-colorGreen'>
                    <div className=' sm:w-[80%] m-auto text-center'>
                        <header className=' flex items-center justify-center py-5'>
                            <div>
                                <h1 className=' font-semibold text-[30px]'>Welcome to SIRz</h1>
                                <img src={titleBorder} alt="" className=' w-[100px] m-auto' />
                            </div>
                        </header>
                        <p>We believe in providing customized, results-driven solutions for businesses. Our clients benefit from our years of expertise, cutting-edge strategies, and hands-on approach.</p>
                    </div>

                    <div className=' text-center pt-6'>
                        <i className=' text-colorGreen font-bold text-2xl'>Here's what you can expect:</i>
                        <ul className='sm:w-[60%] w-[90%] m-auto pt-6'>
                            {
                                expectationData.map((data, index) => (
                                    <li key={index} className='text-left flex items-start pt-4 gap-4'>
                                        <img src={markIcon} alt="" className='h-[20px]' />
                                        <p >{data}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Button text='Learn more about us' onClick={() => navigate(ROUTES.ABOUT.PATH)} className=' mt-10 sm:w-[30%] m-auto' />
                    </div>
                </div>
            </section>
            <section className=' w-[90%] m-auto py-10'>
                <img src={serviceShow} alt="" />
            </section>
            <section className=' bg-colorLight dark:bg-colorDark'>
                <div className=' grid sm:grid-cols-5 sm:w-[85%] w-[90%] m-auto gap-14 py-12'>
                    <div className=' sm:col-span-2'>
                        <img src={missionImg} alt="" className='' />
                    </div>
                    <div className=' sm:col-span-3 my-auto sm:w-[85%]'>
                        <div className=' pb-5'>
                            <i className=' text-colorGreen font-bold text-2xl'>Who Are We?</i>
                            <p className=' leading-8 tracking-wider'>
                                SIRz is a technology-driven, innovation-focused company
                                dedicated to delivering high-quality digital solutions. We work
                                with businesses of all sizes, from startups to established
                                enterprises, helping them navigate the digital landscape
                                effectively
                            </p>
                        </div>
                        <div>
                            <i className=' text-colorGreen font-bold text-2xl'>Our Mission:</i>
                            <p className=' leading-8 tracking-wider'>
                                Our mission is to empower businesses with the tools and
                                strategies needed to succeed in today's competitive market.
                                We believe in data-driven decision-making, creativity,
                                and leveraging technology to help brands stand out, grow,
                                and achieve long-term success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <header className=' flex items-center justify-center py-5'>
                    <div className=' text-center sm:w-[60%] w-[90%]'>
                        <h1 className=' font-semibold text-[35px]'>Sirz Portal Overview</h1>
                        <img src={titleBorder} alt="" className=' w-[120px] m-auto  max-sm:pb-5' />
                        <i>Our Sirz Portal is a one-stop project management platform designed to keep everything organized and efficient. Here's how it works</i>
                    </div>
                </header>
                <div className=' grid sm:grid-cols-5 w-[90%] m-auto gap-5'>
                    {
                        portalOverview.map((data, index) => (
                            <div key={index} className=' bg-colorLight dark:bg-colorDark border-b-8 px-4 py-5 border-colorGreen rounded-xl'>
                                <img src={data.img} alt="" className='h-[50px]' />
                                <h4 className=' font-semibold py-2'>{data.title}</h4>
                                <div className='text-sm'>
                                    {data.text}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className=' pt-16'>
                <div className=' text-colorGreen italic font-bold text-[25px] max-sm:text-center sm:ps-20'>Turning Ideas into Impact..</div>
                <div className='py-5'>
                    <WaterflowCards />
                    <WaterflowCardTwo />
                </div>
                <div className=' text-colorGreen italic font-bold sm:text-right text-center sm:pr-20 text-[25px]'>One Success Story at a Time!</div>
            </section>

            {/* SLIDER HERE */}

            <section className=' bg-colorLight dark:bg-colorDark py-5 my-10'>
                <header className=' flex items-center justify-center py-5'>
                    <div className=' text-center w-[60%]'>
                        <h1 className=' font-semibold text-[35px]'>Ready To Get Started?</h1>
                        <img src={titleBorder} alt="" className=' w-[120px] m-auto' />
                    </div>
                </header>
                <div className=' grid sm:grid-cols-4 w-[90%] m-auto gap-5'>
                    {
                        steps.map((data, index) => (
                            <div key={index} className=' bg-colorBlueDeep text-white border-b-8 px-4 py-5 border-colorGreen rounded-xl'>
                                <h4 className=' font-bold py-2 text-[40px]'>0{index + 1}</h4>
                                <div className='text-sm'>
                                    {data.text}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className='bg-[#FAFAFA]'>
                <section className=' pt-16 w-[95%] sm:w-[90%] m-auto pb-8'>
                    <div className=' text-colorGreen italic font-bold text-[25px] max-sm:text-center sm:ps-20 text-center w-[70%] m-auto mb-6'>Take a quick tour - Watch this demonstration video on how you to use our client portal</div>
                    <div className='pb-7'>
                        <img src={VidDemonstration} alt="" className='rounded-tr-2xl rounded-tl-2xl' />
                    </div>

                    <div>
                        <Button text="Client portal sign up" onClick={() => { }} className='sm:w-[250px] w-full' />
                    </div>
                </section>
            </section>

            <section className=" bg-colorLight dark:bg-colorDark py-10 bg-dashboard-form-gradient">
                <header className="sm:w-[45%] sm:ps-16 w-[90%] max-sm:m-auto text-white">
                    <HeaderFormat title="Schedule a free consultation" />
                    <h4 className=" sm:font-extrabold font-bold  max-sm:text-center pt-5 sm:text-[22px] text-[17px]">
                        Let’s Talk! Book a free consultation and discover how we can elevate your business
                    </h4>
                </header>
                <div className='flex justify-center items-center mt-3'>
                    <img src={DashbordVector} alt="" />
                </div>
                <div className=" sm:w-[60%] w-[90%] m-auto sm:mt-16 mt-10">
                    {/* <header className="relative">
                        <div className=" sm:w-[70%]">
                            <h4 className=" font-bold">Let's get started</h4>
                            <p className="  max-sm:text-justify pt-1 sm:text-[13px] text-[13px]">
                                Please fill in the details correctly and let us know about the services you are interested in
                            </p>
                        </div>
                        <div className="absolute top-3 right-0"><img src={isDarkMode ? sirzLogoWhite : sirzLogo} alt="" className=" h-3" /></div>
                    </header> */}
                    {/* <div> */}
                        <DashboardLetterForm />
                    {/* </div> */}
                </div>
            </section>

            {/* VIDEO HERE */}





            <footer
                className=" bg-colorGreenDeeper pt-4 mt-32 pb-8 relative"
            >
                <div className=' absolute top-[-75px] right-0 left-0 bg-colorGreen sm:w-[50%] w-[90%] m-auto rounded-lg sm:py-10 py-5'>
                    <div className='w-[85%] m-auto flex items-center gap-8'>
                        <img src={emailImg} alt="" className='h-[80px]' />
                        <div>
                            <h4 className=' font-semibold leading-4 pb-3'>
                                Need some help or assistance? Or maybe you want to make an enquiry.
                            </h4>
                            <div className='text-sm'>Reach out to <a href="mailto:support@sirz.co.uk" >[support@sirz.co.uk]</a></div>
                        </div>
                    </div>
                </div>
                <div className='sm:w-[90%] m-auto sm:rounded-2xl sm:px-10 px-5 pt-28 pb-8'>
                    <div className=" pb-12 border-b border-gray-400 mx-auto">
                        <div className='text-center flex items-center justify-center flex-col sm:w-[70%] m-auto'>
                            <img src={sirzLogoWhite} alt="" />
                            <div className=' sm:text-[20px] text-white pt-5'>
                                SIRz is your one-stop shop for E-commerce, Branding, and Digital Marketing, we help businesses launch, scale, and dominate in the digital space.
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 sm:flex items-center justify-between">
                        <div className="flex text-white flex-row items-center justify-center gap-x-5">
                            <a href={socialLinks.Facebook} target="_blank" rel="noopener noreferrer">
                                <LinkedlnIcon />
                            </a>
                            <a href={socialLinks.Facebook} target="_blank" rel="noopener noreferrer">
                                <FacebookIcon />
                            </a>
                            <a href={socialLinks.Instagram} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon />
                            </a>
                        </div>
                        <h4 className="text-[#fff] max-sm:pt-5 font-nexa-light text-[13px] text-center max-sm:flex-col flex items-center sm:gap-8 gap-2 font-thin">
                            <p>17 Barmouth Road marine parade LL42 1NA</p>
                            <p>074 07245685</p>
                            <a href="mailto:support@sirz.co.uk">
                                support@sirz.co.uk
                            </a>
                        </h4>
                    </div>
                </div>
            </footer>

        </div>
    )
}