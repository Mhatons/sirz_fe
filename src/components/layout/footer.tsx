import { sirzLogoWhite } from '../../assets';
import { socialLinks } from '../../utils';
import { FacebookIcon, InstagramIcon, LinkedlnIcon } from '../../assets/icons/svg';

const company = [
  "Company",
  "Home",
  "About us",
  "Our Blog",
  "Contact us",
];

const services = [
  "Our Services",
  "E-commerce",
  "Branding",
  "Digital Marketing",
];

const projects = [
  "Our Projects",
  "E-commerce",
  "E-book Designs",
  "Branding",
  "Social Media Posts",
];

const links = [
  "Quick Links",
  "Terms & Conditions",
  "Privacy Policy",
];

export default function Footer() {

  return (
    <>
      <footer
        className=" bg-colorGreenDeeper pt-4 pb-8"
      >
        <div className='w-[90%] bg-colorBlueDeep m-auto sm:rounded-2xl sm:px-10 px-5 py-16'>
          <div className=" pb-12 border-b border-gray-400 mx-auto">
            <section className=' flex items-start max-sm:flex-col justify-between m-auto'>
              <h4 className='sm:text-[30px] max-sm:text-center font-bold sm:w-[70%] text-white'>Grow Your Online Business With the Most Reliable Team and Strategy.</h4>
              <button className={` tracking-widest bg-white dark:text-black rounded-full sm:w-[23%] w-full max-sm:mt-5
                  'w-full flex align-center justify-center py-4 cursor-pointer text-sm px-8 font-medium floating-button  
                  `}
                onClick={() => { }}>
                Get started now!
              </button>
            </section>

            <section className=' sm:py-10 grid sm:grid-cols-5 sm:gap-10'>
              <div className='sm:col-span-2 pt-16'>
                <img src={sirzLogoWhite} alt="" />
                <div className=' sm:text-[20px] text-white pt-5'>SIRz is your one-stop shop for E-commerce, Branding, and Digital Marketing, we help businesses launch, scale, and dominate in the digital space.</div>
              </div>
              <div className='sm:col-span-3 max-sm:hidden max-sm:pt-10 grid sm:grid-cols-4 grid-cols-2 gap-4'>
                <div>
                  {
                    company.map((item, index) => (
                      <ul key={index} className='text-white first:font-bold'>
                        <li className='pt-8'>{item}</li>
                      </ul>
                    ))
                  }
                </div>
                <div>
                  {
                    services.map((item, index) => (
                      <ul key={index} className='text-white first:font-bold'>
                        <li className='pt-8'>{item}</li>
                      </ul>
                    ))
                  }
                </div>
                <div>
                  {
                    projects.map((item, index) => (
                      <ul key={index} className='text-white first:font-bold'>
                        <li className='pt-8'>{item}</li>
                      </ul>
                    ))
                  }
                </div>
                <div>
                  {
                    links.map((item, index) => (
                      <ul key={index} className='text-white first:font-bold'>
                        <li className='pt-8'>{item}</li>
                      </ul>
                    ))
                  }
                </div>
              </div>
            </section>
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
              <p>support@sirz.co.uk</p>
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};