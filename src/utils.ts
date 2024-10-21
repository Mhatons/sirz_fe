import moment from "moment";

export const BASE_URL = `https://telegram-bot-1-br31.onrender.com`;
// export const BASE_URL = `http://localhost:4000`;

export const formatDate = (date: string) => {
    const formattedDate = moment(date).format('MMMM D, YYYY');
    return formattedDate
}

export const formatDateTime = (date: string) => {
    const formattedDate = moment(date).format('ddd MMM D YYYY, HH:mm:ss');
    return formattedDate
}