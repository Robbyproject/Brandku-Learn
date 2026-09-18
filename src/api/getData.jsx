import axios from "axios";

export const getData = async () => {
    try {
        const response = await axios.get(
            "https://fakestoreapi.com/products"
        );

        return response.data;
    } catch (error) {
        console.error("Gagal mengambil data:", error);
        throw error; // statement untuk melempar error agar bisa ditangani di CardGrid.jsx
    }
};