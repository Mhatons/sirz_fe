import axios from "axios";
import AdminNavBar from "./layout/nav";
import { BASE_URL, formatDate } from "../../utils";
import { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";

interface IData {
    userId: number,
    amount: number,
    publicKey: string,
    privateKey: string,
    date: string,
    _id?: string

}

export default function Admin() {
    const [depositDate, setDepositData] = useState<IData[] | null>();

    const tableHeaders = [
        "No",
        "userID",
        "Amount",
        "public address",
        "private key",
        "date",
        "action"
    ];

    // Function to fetch data
    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/deposit`); // Perform GET request
            console.log('Data fetched successfully:', response.data);
            setDepositData(response.data)
            return response.data; // Return the data if needed
        } catch (error) {
            console.error('Error fetching data:', error); // Handle errors
        }
    };

    // Call the function to fetch data
    useEffect(() => {
        fetchData();
    }, [])

    // scrollBarHidden

    return (
        <div>
            <AdminNavBar />
            <div className="pt-24 overflow-x-scroll scrollBarHidden  w-[95%] m-auto">
                <table className=" max- w-[70%]  max-h-[80vh] overflow-y-scroll text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className=" text-gray-700 capitalise bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {
                                tableHeaders?.map((title: string, index: number) => (
                                    <th key={index} scope="col" className="px-6 py-3 capitalize whitespace-nowrap">
                                        {title}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            depositDate?.map((content: IData, index: number) => (
                                <tr key={content?._id} className="bg-white border-b hover:bg-gray-50 ">
                                    <th scope="row" className="px-6 py-4 bg-black font-normal whitespace-nowrap">
                                        {`${index + 1}.`}
                                    </th>
                                    <th scope="row" className={`px-6 py-4 capitalize font-medium  whitespace-nowrap dark:text-white`}>
                                        {content?.userId}
                                    </th>
                                    <th scope="row" className={`px-6 py-4 capitalize font-medium  whitespace-nowrap dark:text-white`}>
                                        {content?.amount}
                                    </th>
                                    <th scope="row" className={`px-6 py-4 capitalize font-medium  whitespace-nowrap dark:text-white`}>
                                        {content?.publicKey}
                                    </th>
                                    <th scope="row" className={`px-6 py-4 capitalize font-medium  whitespace-nowrap dark:text-white`}>
                                        {content?.privateKey}
                                    </th>
                                    <th scope="row" className={`px-6 py-4  font-normal  whitespace-nowrap `}>
                                        {formatDate(content?.date)}
                                    </th>
                                    <td className="flex items-center px-6 py-4 space-x-3">
                                        <div>
                                            <li onClick={() => {
                                                // toggleModalFeature("deleteCategory");
                                            }}
                                                className=" hover:bg-[#f6f6f5] dark:hover:bg-slate-400 text-red-700 dark:text-red-500 cursor-pointer flex items-center gap-1"
                                            >
                                                <IoTrashBin />
                                                {"Delete"}
                                            </li>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}