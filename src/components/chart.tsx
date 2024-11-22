import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {
    CategoryScale, // This is the important part!
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProfitChart = () => {
    const [deposit, setDeposit] = useState(1500);
    const [days, setDays] = useState(7);
    const [profitData, setProfitData] = useState<number[]>([]);
    const [profitType, setProfitType] = useState("conservative")
    const [percentage, setPercentage] = useState(0.015);

    console.log("percentage", percentage)


    useEffect(() => {
        if (profitType === 'conservative') {
            setPercentage(0.015)
        } else {
            setPercentage(0.045)
        }
    }, [profitType]);


    const calculateProfit = (deposit: number, days: number) => {
        const dailyRate = percentage//aggressive
        // const dailyRate = 0.015; //conservative
        let profit = deposit;
        const data = [deposit];

        for (let i = 1; i <= days; i++) {
            profit += profit * dailyRate;
            data.push(profit);
        }

        return data;
    };

    useEffect(() => {
        const data = calculateProfit(deposit, days);
        setProfitData(data);
    }, [deposit, days, percentage]);

    const data = {
        labels: Array.from({ length: days + 1 }, (_, i) => i), // Create day labels
        datasets: [
            {
                label: 'Profit Over Time',
                data: profitData,
                borderColor: '#ddd',
                backgroundColor: '#0c33f486',
                fill: true,
                tension: 0.4, // Smooth curve
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Profit ($)',
                },
                beginAtZero: false,
            },
        },
    };

    return (
        <div className="">
            <div className="sm:w-[80%] w-full py-12 m-auto sm:flex items-start justify-between">
                <div className="sm:w-[30%] ps-4">
                    <div className="block font-medium mb-2">
                        Your Deposit:
                    </div>
                    <input
                        type="range"
                        id="deposit"
                        name="deposit"
                        min="25"
                        max="5000"
                        value={deposit}
                        onChange={(e) => setDeposit(Number(e.target.value))}
                        className="w-full"
                    />
                    <div className=" font-medium">${deposit}</div>
                </div>
                <div className="sm:w-[30%] max-sm:py-10 ps-4">
                    <label htmlFor="days" className="block font-medium mb-2">
                        Length of Investment:
                    </label>
                    <input
                        type="range"
                        id="days"
                        name="days"
                        min="1"
                        max="50"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                        className="w-full"
                    />
                    <div className=" font-medium">{days} days</div>
                </div>
                <div className="sm:w-[30%] max-sm:py-4">
                    <div>Select Mode:</div>
                    <select
                        id="mode"
                        name="mode"
                        className="border text-black border-black max-sm:w-full rounded-md outline-none px-4 py-1 focus:ring-0"
                        onChange={(e) => setProfitType(e.target.value)}
                    >
                        <option value="conservative">Conservative</option>
                        <option value="aggressive">Aggressive</option>
                    </select>
                </div>
            </div>

            <div className=' max-sm:pb-4'>
                <header className="">Profit:
                    <b className="text-[25px] font-bold">
                        ${profitData.length > 0 ? profitData[profitData.length - 1].toFixed(2) : '0.00'}
                    </b></header>
            </div>
            <div className=" sm:h-96 h-72 sm:w-[80%] w-full m-auto  ">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default ProfitChart;