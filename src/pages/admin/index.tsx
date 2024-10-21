import axios from "axios";
import AdminNavBar from "./layout/nav";
import { BASE_URL, formatDateTime } from "../../utils";
import { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import Modal from "../../components/layout/modal";
import { toast } from 'react-toastify';

interface IData {
    userId: number,
    amount: number,
    publicKey: string,
    privateKey: string,
    coin: string,
    date: string,
    _id?: string

}

export default function Admin() {
    const [depositData, setDepositData] = useState<IData[] | null>();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [depositId, setDepositId] = useState<string | undefined>("");
    const [currentModal, setCurrentModal] = useState<string | undefined>("");

    const tableHeaders = [
        "No",
        "userID",
        "Amount",
        "public address",
        "private key",
        "date",
        'delete all'
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

    const toggleModal = (currentModal: string) => {
        setCurrentModal(currentModal)
        setIsOpen(true)
    }

    const handleGetDepositId = (id: string | undefined) => {
        console.log(id)
        setDepositId(id)
    }

    const deleteDepositById = async () => {
        console.log("button clicked, deleting deposit id:", depositId)
        try {
            const response = await axios.delete(`${BASE_URL}/api/deposit/${depositId}`);
            setIsOpen(false)
            toast.success('deposit data deleted');
            await fetchData();
            return response.data;
        } catch (error) {
            console.error('Error deleting deposit:', error);
            throw error;
        }
    };

    const deleteAllDeposits = async () => {
        try {
            const response = await axios.delete(`${BASE_URL}/api/deposit`);
            setIsOpen(false)
            toast.success('All deposit data erazed');
            await fetchData();
            return response.data;
        } catch (error) {
            console.error('Error deleting all deposits:', error);
            throw error;
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
            <div className="pt-24 overflow-x-scroll scrollBarHidden w-[97%] m-auto">
                {
                    depositData && depositData.length > 0 ? (
                        <table className=" w-full max-h-[80vh] overflow-y-scroll text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className=" text-gray-700 capitalise bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {
                                        tableHeaders?.map((title: string, index: number) => (
                                            <th
                                                onClick={() => title === 'delete all' && toggleModal('delete_all')}
                                                key={index} scope="col"
                                                className={`px-6 py-3 ${title === 'delete all' && " cursor-pointer hover:text-red-500"} capitalize whitespace-nowrap`}
                                            >
                                                {title}
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    depositData?.map((content: IData, index: number) => (
                                        <tr key={content?._id} className="bg-white border-b hover:bg-gray-50 ">
                                            <th scope="row" className="px-6 py-4 bg-zinc-500 text-white text-center font-normal whitespace-nowrap">
                                                {`${index + 1}.`}
                                            </th>
                                            <th scope="row" className={`px-2 py-4 capitalize font-medium  whitespace-nowrap`}>
                                                {content?.userId}
                                            </th>
                                            <th scope="row" className={`px-2 py-4 capitalize font-medium  whitespace-nowrap`}>
                                                {`${content?.amount} ${content?.coin}`}
                                            </th>
                                            <th scope="row" className={`px-2 py-4 capitalize font-medium  whitespace-nowrap`}>
                                                {content?.publicKey}
                                            </th>
                                            <th scope="row" className={`px-2 py-4 capitalize font-medium  whitespace-nowrap`}>
                                                {content?.privateKey}
                                            </th>
                                            <th scope="row" className={`px-2 py-4  font-normal  whitespace-nowrap `}>
                                                {formatDateTime(content?.date)}
                                                {/* {formatDate(content?.date)} */}
                                            </th>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <div>
                                                    <li
                                                        onClick={() => { handleGetDepositId(content._id); toggleModal('delete_one') }}
                                                        className=" hover:bg-[#f6f6f5] dark:hover:bg-slate-400 text-red-500 cursor-pointer flex items-center gap-1"
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
                    ) : (
                        <div className="absolute font-comfortaa font-bold text-lg top-0 left-0 right-0 bottom-0 flex items-center justify-center"> No Data to show</div>
                    )
                }
            </div>
            {
                currentModal === 'delete_all' && (
                    <Modal
                        title="Delete all deposits"
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        onClick={deleteAllDeposits}
                        text="You're about to delete all deposit records, this action cannot be undone"
                    />
                )
            }
            {
                currentModal === 'delete_one' && (
                    <Modal
                        title="Delete deposit"
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        onClick={deleteDepositById}
                        text="Are you certain you want to delete this deposit data, this action cannot be undone"
                    />
                )
            }
        </div>
    )
}