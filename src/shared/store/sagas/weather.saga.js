import { call, put, takeLatest } from "redux-saga/effects";
import weatherActions from "../actions/weather.action";
import weatherConstant from "../constants/weather.constant";
import getWeatherData from "../services/weather.service";

function* loadWeather(action) {
    try {
        const response = yield call(getWeatherData, action.payload);
        if (!response) {
            yield put(weatherActions.loadWeatherApiFailAction());
        } else {
            yield put(weatherActions.loadWeatherApiSuccessAction(response.data));
        }
    } catch (error) {
        yield put(weatherActions.loadWeatherApiFailAction());
    }
}

export default function* weatherWatcherSaga() {
    yield takeLatest(weatherConstant.LOAD_WEATHER_API, loadWeather);
}