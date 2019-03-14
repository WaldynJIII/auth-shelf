import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
function* formSaga() {
    
    yield takeLatest('POST_ITEM', formPost);
}
function* formPost(){
    try {
        yield axios.post('/api/shelf', action.payload);
        alert("It Posted")
  

    } catch (error) {
        console.log('Error making POST request');
        alert('there was a problem');
    }
}

export default formSaga