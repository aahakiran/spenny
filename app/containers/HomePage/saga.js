/**
 * Gets the repositories of the user from Github
 */
import axios from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA, DATA_FETCHED } from 'containers/HomePage/constants';
import { repoLoadingError } from 'containers/App/actions';


export function* getRepos() {
  const httpArgss = ['https://run.mocky.io/v3/2d7acdd7-cf46-4659-a6b3-c0a65f1ec439'];
 
  try {
    const { data: respData } = yield call(axios.get, ...httpArgss);
    var datasets = respData.data.datasets.map( item => {
      var dataset = item.data.map((data, index) => {
       return {"x" : index+1,  "y" : data}
      })
      return {borderColor: item.borderColor, data:[...dataset]}
    });
    yield put({ type: DATA_FETCHED, data:respData, datasets});

  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getTrainingData() {
  yield takeLatest(FETCH_DATA, getRepos);
}
