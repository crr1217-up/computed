import axios from "axios";

axios.defaults.baseURL="http://192.168.1.84:8090/api/mergetable/v1"
// axios.interceptors.request.use()

function getTable() { 
    return axios.post("/getmergetables");
}
// }

const req = {
    getTable,
}

export default req;