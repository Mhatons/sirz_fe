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
};

export const socialLinks = {
    Facebook: "https://web.facebook.com/havenhiveinteriors",
    Instagram: "https://www.instagram.com/havenhiveinteriors/",
    Whatsapp: `https://wa.me/2348160900616?text=Hello,%20I%20am%20interested%20in%20your%20services!`,
    TikTok: "https://www.tiktok.com/@haven_hive_interiors?_t=ZM-8tyYK4Yd6yl&_r=1"
}