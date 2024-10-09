export default function InvestmentTable() {
    const data = [
        {
            nameInitials: 'T.P',
            amount: 1205,
            time: '2024-10-08 21:15:32',
        },
        {
            nameInitials: 'S.D',
            amount: 297,
            time: '2024-10-08 21:28:45',
        },
        {
            nameInitials: 'L.K',
            amount: 487,
            time: '2024-10-08 22:03:12',
        },
        {
            nameInitials: 'J.M',
            amount: 69,
            time: '2024-10-08 22:17:58',
        },
        {
            nameInitials: 'A.R',
            amount: 1534,
            time: '2024-10-08 22:45:23',
        },
        {
            nameInitials: 'K.L',
            amount: 765,
            time: '2024-10-08 23:10:06',
        },
        {
            nameInitials: 'M.T',
            amount: 2900,
            time: '2024-10-08 23:24:50',
        },
        {
            nameInitials: 'R.H',
            amount: 846,
            time: '2024-10-08 23:35:27',
        },
        {
            nameInitials: 'C.B',
            amount: 78,
            time: '2024-10-08 23:50:44',
        },
        {
            nameInitials: 'E.F',
            amount: 1369,
            time: '2024-10-09 00:02:19',
        },
    ];

    return (
        <div id="recent-investments" className="overflow-x-auto">
            <header className="text-[35px] text-center text-primary py-10">Recent Investments</header>
            <table className="sm:w-[85%] w-[90%] border-b-4 border-[#009879] m-auto bg-[#e9e8e8] ">
                <thead>
                    <tr className="bg-primary overflow-x-hidden text-white font-exo font-bold text-[20px]">
                        <th className="text-left py-3 px-4">Initials</th>
                        <th className="text-left py-3 px-4">Amount</th>
                        <th className="text-left whitespace-nowrap py-3 px-4">Date & Time</th>
                    </tr>
                </thead>
                <tbody className=" font-exo text-lg">
                    {data?.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="border-t py-3 px-4">{row.nameInitials}</td>
                            <td className="border-t py-3 px-4">$ {row.amount} invested</td>
                            <td className="border-t py-3 px-4">{row.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}