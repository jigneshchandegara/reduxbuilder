import { all } from "redux-saga/effects";
import { handle_delete_data_saga, handle_get_data_saga, handle_post_data_saga, handle_put_data_saga } from "./rootsaga/usersaga";


function* rootSaga() {
    yield all([handle_get_data_saga(), handle_post_data_saga() , handle_delete_data_saga() , handle_put_data_saga()]);
}

export default rootSaga;