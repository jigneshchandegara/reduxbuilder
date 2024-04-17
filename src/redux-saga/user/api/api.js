import axios from 'axios';
import { base_url, delete_product, get_product, post_product, put_product } from "../../constant";


let get_data = (action) => {
    // console.log(action, "action from get api");
    return axios.get(base_url + get_product).then((res) => {
        // console.log(res, "res from get data api");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let post_data = (action) => {
    // console.log(action, "action from post api");
    return axios.post(base_url + post_product, action.payload).then((res) => {
        // console.log(res, "res from post data api");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let delete_data = (action) => {
    // console.log(action, "action from delete api");
    return axios.delete(base_url + delete_product + action.payload).then((res) => {
        // console.log(res, "res from delete data api");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let put_data = (action) => {
    console.log(action, "action from put api");
    return axios.put(base_url + put_product + action.payload.id, action.payload).then((res) => {
        console.log(res, "res from put data api");
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}
export { get_data, post_data, delete_data ,put_data}