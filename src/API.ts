import axios from "axios";

export const API = {
    getItems: async () => {
        const {data} = await axios.get('https://61273df6-b061-4d48-aeb1-5efe723a1665.selstorage.ru/main.json');
        console.log(data)
        return data;
    },
    getServices: async () => {
        const{data} = await axios.get('https://61273df6-b061-4d48-aeb1-5efe723a1665.selstorage.ru/services.json');
        return data;
    },
    getRituals: async () => {
        const {data} = await axios.get('https://61273df6-b061-4d48-aeb1-5efe723a1665.selstorage.ru/rituals.json');
        console.log(data);
        return data;
    }
}