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

function* shelfSaga() {
  yield takeLatest('FETCH_SHELF', fetchShelf);
}

export default shelfSaga;
