import * as http from "../http/http"

const url = "http://localhost:9090/product"

export const filterByKeyName = async (keyWord) => {
    try {
        const res = await http.get(`${url}?name_like=${keyWord}&_limit=5`);
        return res;
    } catch (err) {
        alert(err);
    }
}