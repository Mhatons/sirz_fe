import analysisVideo from '../assets/playback-1.mp4';

export default function VideoAnalysis() {
    return (
        <section className=" sm:h-[400px] ">
            <h3 className="text-2xl sm:text-[30px] font-bold font-comfortaa text-[#ddd] text-center mb-4">Analysis of Trading Results</h3>

            <video className='sm:rounded-lg object-cover w-full h-full' autoPlay loop muted playsInline >
                <source src={analysisVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};