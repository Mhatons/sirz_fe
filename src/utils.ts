import moment from "moment";

export const BASE_URL = `http://localhost:4000`;

export const formatDate = (date: string) => {
    const formattedDate = moment(date).format('MMMM D, YYYY');
    return formattedDate
}