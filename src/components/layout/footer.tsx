import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes/desc';
import { ICONS, IMAGES } from '../../assets';
import { socialLinks } from '../../utils';
import { BsFacebook, BsInstagram, BsTiktok, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  const navigate = useNavigate()
  const textVariants = {
    initial: { fontSize: '4.5rem', fontWeight: '300' },
    hovered: { fontSize: '5.1rem', fontWeight: '600' },
  };

  return (
    <>
      <footer
        style={{ backgroundImage: `url(${IMAGES.overlayImage})`, backgroundSize: 'cover' }}
        className="bg-[#333333] pt-24 pb-8"
      >
        <div className="w-full pb-12 border-b border-white max-w-[80vw] lg:max-w-[90vw] mx-auto">
          <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-between">
            <div onClick={() => navigate(ROUTES.CONTACT.PATH)} className="relative cursor-pointer w-fit">
              <motion.div
                variants={textVariants}
                initial="initial"
                whileHover="hovered"
                transition={{ duration: 0.2 }}
              >
                <h3 className="relative text-[#fff] font-nexa duration-300">
                  Let's Talk
                </h3>
              </motion.div>
              <img
                src={ICONS.RIGHT_DIRECTION_ARROW_ICON}
                alt=" "
                className="w-[30px] md:w-[55px] absolute -top-5 left-3/4 sm:left-auto sm:-right-8 md:-right-16 md:-top-14"
              />
            </div>

            <div className="hidden text-right md:block">
              <p
                onClick={() => navigate(ROUTES.ABOUT.PATH)}
                className="text-xs font-nexa text-[#fff] cursor-pointer"

              >
                About us
              </p>

              <div className="text-xs pt-6 font-nexa-light">
                <p className="text-[#fff] mb-2.5">General enquiries</p>
                <a
                  className="text-[#fff]"
                  href="mailto:mailto:havenandhiveinteriors@gmail.com"
                >
                  mailto:havenandhiveinteriors@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-y-14 w-full items-start justify-between mt-10">
            <div className="flex flex-col gap-y-14 md:gap-y-5">

              <div className="text-xs font-nexa-light mt-10">
                <p className="text-[#fff] mb-1">Locations</p>
                <p className="text-[#fff]">
                  {/* 4th Floor, Ocean Centre,
                  <br />
                  Ahmodu Bello Ex Rd, Wuse, */}
                  <br />
                  Abuja | Lagos | Ph | Asaba | Anambra.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="text-xs font-nexa-light flex flex-col items-start md:items-end">
                <p className="text-[#fff] text-start md:text-end mb-3">Social Media</p>
                <div className="flex text-white flex-row items-center justify-center gap-x-10">
                  {/* <img src={ICONS.LINKEDIN_ICON} alt="LinkedIn" /> */}
                  {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={ICONS.TWITTER_ICON} alt="Twitter" />
                  </a> */}
                  <a href={socialLinks.Facebook} target="_blank" rel="noopener noreferrer">
                    {/* <img src={ICONS.FACEBOOK_ICON} alt="Facebook" /> */}
                    <BsFacebook className='text-xl' />
                  </a>
                  <a href={socialLinks.Instagram} target="_blank" rel="noopener noreferrer">
                    {/* <img src={ICONS.INSTAGRAM_ICON} alt="Instagram" /> */}
                    <BsInstagram className='text-xl' />
                  </a>
                  <a href={socialLinks.Whatsapp} target="_blank" rel="noopener noreferrer">
                    <BsWhatsapp className='text-xl' />
                  </a>
                  <a href={socialLinks.TikTok} target="_blank" rel="noopener noreferrer">
                    <BsTiktok className='text-xl' />
                  </a>
                </div>
              </div>
              <div className="flex flex-col text-[#fff] sm:flex-row items-start gap-y-3 sm:items-center justify-center text-xs font-nexa-light mt-7 gap-x-10">
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-[#fff] font-nexa-light text-sm text-center font-thin">
            All Rights Reserved <span className="text-lg font-thin">&copy;</span> Haven & Hive Interiors Ltd 2025
          </h4>
        </div>
      </footer>
    </>
  );
};