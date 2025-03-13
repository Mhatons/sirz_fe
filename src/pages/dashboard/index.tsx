import heroBg from './images/Frame 1775.png';
import onboardinLogo from './images/sirz logo png 1.png';
import titleBorder from './images/Frame 3.png';
import markIcon from './images/Group.png'

const expectationData = [
    `A consultative approach, where we listen to your business needs and tailor our services accordingly. `,
    `A dedicated project manager to guide you through every step of the journey.`,
    `Access to our Sirz Portal, where you can track your projects, submit requests, and communicate with our team`,
    `A structured process that ensures transparency, communication, and efficiency.`,
]

export default function OnboardingPage() {
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
                        <div className=' flex items-center justify-center sm:w-[60%] m-auto flex-col h-screen'>
                            <div>
                                <img src={onboardinLogo} alt="" />
                            </div>
                            <h4 className=' text-[45px] font-bold text-colorDefaultLight py-5 sm:text-center'>Get started with <i className=' text-colorGreen'>SIRz</i> in just a few simple steps</h4>
                            <button className={` tracking-widest bg-white dark:text-black rounded-full sm:w-[30%] w-full max-sm:mt-5
                                'w-full flex align-center justify-center py-4 cursor-pointer text-sm px-8 font-medium floating-button  
                                `}
                                onClick={() => { }}>
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-white border-t-8 sm:w-[90%] mt-[-5em] rounded-t-3xl m-auto border-colorGreen'>
                    <div className=' sm:w-[90%] m-auto text-center'>
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
                        <ul className='w-[60%] m-auto pt-6'>
                            {
                                expectationData.map((data, index) => (
                                    <li key={index} className='text-left flex items-start pt-4 gap-4'>
                                        <img src={markIcon} alt="" className='h-[20px]' />
                                        <p >{data}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}