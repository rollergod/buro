import axios from "axios";

export const API = {
    getItems: async () => {
        const {data} = await axios.get('https://61273df6-b061-4d48-aeb1-5efe723a1665.selstorage.ru/popular.json');
        console.log('query')
        return data;
    },
    getServices: async () => {
        const{data} = await axios.get('https://61273df6-b061-4d48-aeb1-5efe723a1665.selstorage.ru/services.json');
        return data;
    }
}