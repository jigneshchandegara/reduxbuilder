import { takeLatest } from "redux-saga/effects";
import { DELETE_PRODUCT_PENDING, GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, PUT_PRODUCT_PENDING } from "../../user/action/action";
import { handle_delete_data, handle_get_data, handle_post_data, handle_put_data } from "../user/manageuser";


function* handle_get_data_saga() {
    yield takeLatest(GET_PRODUCT_PENDING, handle_get_data);
}

function* handle_post_data_saga() {
    yield takeLatest(POST_PRODUCT_PENDING, handle_post_data);
}

function* handle_delete_data_saga() {
    yield takeLatest(DELETE_PRODUCT_PENDING, handle_delete_data);
}

function* handle_put_data_saga(){
    yield takeLatest(PUT_PRODUCT_PENDING , handle_put_data)
}
export { handle_get_data_saga, handle_post_data_saga , handle_delete_data_saga , handle_put_data_saga };