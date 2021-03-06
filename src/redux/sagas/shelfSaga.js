import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SHELF" actions
function* fetchShelf() {
  // try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const shelfResponse = yield axios.get('/api/shelf', config);
    console.log('response:', shelfResponse);
    
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
     yield put({ type: 'SET_SHELF', payload: shelfResponse.data });
  // } catch (error) {
  //   console.log('User get request failed', error);
  // }
}
function* removeItem(action){
  
    console.log(action.payload)
    try {
      yield axios.delete(`api/shelf/${action.payload}`)
      alert('It worked')
      yield put({ type: 'FETCH_SHELF' })
    } catch (error) {
      console.log('DELETE ', error)
      alert('it didnt')
    }

  }


function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
  yield takeLatest('REMOVE', removeItem);
}

export default shelfSaga;
