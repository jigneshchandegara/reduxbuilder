import { call, put } from 'redux-saga/effects';
import { delete_data, get_data, post_data, put_data } from "../../user/api/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_SUCCESS } from '../../user/action/action';


function* handle_get_data(action) {
    // console.log(action, "action from get data manage");
    try {
        let { data, status } = yield call(get_data, action);
        if (status == 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data });
        }
    } catch (error) {
        yield put({ type: GET_PRODUCT_ERROR, data: error })
    }
}

function* handle_post_data(action) {
    // console.log(action, "action from post data manage");
    try {
        let { data, status } = yield call(post_data, action);
        if (status == 201 || status == 200) {
            yield put({ type: POST_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: POST_PRODUCT_ERROR, data });
        }
    } catch (error) {
        yield put({ type: POST_PRODUCT_ERROR, data: error })
    }

}

function* handle_delete_data(action) {
    // console.log(action, "action from delete data manage");
    try {
        let { data, status } = yield call(delete_data, action);
        if (status == 200) {
            yield put({ type: DELETE_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: DELETE_PRODUCT_ERROR, data });
        }
    } catch (error) {
        yield put({ type: DELETE_PRODUCT_ERROR, data: error })
    }
}

function* handle_put_data(action) {
    console.log(action, "action from put data manage");
    try {
        let { data, status } = yield call(put_data, action);
        if (status == 200) {
            yield put({ type: PUT_PRODUCT_SUCCESS, data });
        } else {
            yield put({ type: PUT_PRODUCT_ERROR, data });
        }
    } catch (error) {
        yield put({ type: PUT_PRODUCT_ERROR, data: error });
    }
}
export { handle_get_data, handle_post_data, handle_delete_data, handle_put_data }