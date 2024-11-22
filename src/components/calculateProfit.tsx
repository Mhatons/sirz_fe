/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfitChart from "./chart";

export default function CalculateProfit() {
    // State to manage the deposit and days values
    return (
        <section id="calculate-profit" className="w-[95%] bg-[#00000067] text-[#ddd] m-auto profit_shadow p-10 rounded-2xl">
            <div>
                <header className="text-[30px]">Calculate Your Profit</header>
                <div>Portalearn Bot Calculator</div>
            </div>

            <div className="">
                <div className=" m-auto">
                    <ProfitChart />
                </div>
            </div>
        </section>

    )
}