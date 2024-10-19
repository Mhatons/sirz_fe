import phoneImg from '../../assets/step1.png';
import phoneImg2 from '../../assets/step2.png';
import phoneImg3 from '../../assets/step3.png';

interface StepProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const StepOne: React.FC<StepProps> = ({ onClick }) => (
    <div className="sm:w-1/2 max-sm:pt-20 flex max-sm:justify-center max-sm:flex-col items-center gap-20">
        <div className="sm:w-[33%] w-[50%]">
            <img src={phoneImg} alt="" className="w-full" />
        </div>
        <div className="sm:w-[50%] max-sm:text-center">
            <div className="flex items-center max-sm:justify-center gap-4 pb-3 ps-3">
                <div className="bg-[#AFFFF6] h-[5px] rounded-full w-16"></div>
                <div className="bg-[#CCCCCC] h-[5px] rounded-full w-16"></div>
                <div className="bg-[#CCCCCC] h-[5px] rounded-full w-16"></div>
            </div>
            <div>
                <header className="text-3xl">Step 1: Join the Bot</header>
                <div className="py-4">Navigate to our Telegram bot, click on "Start Now", join the trading broadcast channel when prompted, then get back to the bot to get started.</div>
            </div>
            <button
                onClick={onClick}
                className="py-4 px-8 rounded-full text-black bg-[#AFFFF6]"
            >
                Continue
            </button>
        </div>
    </div>
);

export const StepTwo: React.FC<StepProps> = ({ onClick }) => (
    <div className="sm:w-1/2 max-sm:pt-20 flex max-sm:justify-center max-sm:flex-col items-center gap-20">
        <div className="sm:w-[33%] w-[50%]">
            <img src={phoneImg2} alt="" className="w-full" />
        </div>
        <div className="sm:w-[50%] max-sm:text-center">
            <div className="flex items-center max-sm:justify-center gap-4 pb-3 ps-3">
                <div className="bg-[#CCCCCC] h-[5px] rounded-full w-16"></div>
                <div className="bg-[#AFFFF6] h-[5px] rounded-full w-16"></div>
                <div className="bg-[#CCCCCC] h-[5px] rounded-full w-16"></div>
            </div>
            <div>
                <header className="text-3xl">Step 2: Top Up Your Balance</header>
                <div className="py-4">Click on the menu to show options, then click on "MY Account". Top up your balance to recharge and get started.</div>
            </div>
            <button
                onClick={onClick}
                className="py-4 px-8 rounded-full text-black bg-[#AFFFF6]"
            >
                Continue
            </button>
        </div>
    </div>
);

export const StepThree: React.FC<StepProps> = ({ onClick }) => (
    <div className="sm:w-1/2 max-sm:pt-20 flex max-sm:justify-center max-sm:flex-col items-center gap-20">
        <div className="sm:w-[33%] w-[50%]">
            <img src={phoneImg3} alt="" className="w-full" />
        </div>
        <div className="sm:w-[60%] max-sm:text-center">
            <div className="flex items-center max-sm:justify-center gap-4 pb-3 ps-3">
                <div className="bg-[#CCCCCC] h-[5px] rounded-full w-16"></div>
                <div className="bg-[#CCCCCC] h-[5px] rounded-full w-16"></div>
                <div className="bg-[#AFFFF6] h-[5px] rounded-full w-16"></div>
            </div>
            <div>
                <header className="text-3xl">Step 3: Active Trading</header>
                <div className="py-4">Click on "Trading", switch your trading to active, and choose your desired trading mode: aggressive or conservative.</div>
                <header className="text-3xl py-2">CLICK ON GET STARTED TO <br /> START EARNING NOW!</header>
            </div>
            <button
                onClick={onClick}
                className="py-4 px-8 rounded-full text-black bg-[#AFFFF6]"
            >
                Continue
            </button>
        </div>
    </div>
);