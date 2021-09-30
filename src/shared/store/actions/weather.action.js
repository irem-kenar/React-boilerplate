import weatherConstant from '../constants/weather.constant';

const loadWeatherApiAction = (payload) => ({
  type: weatherConstant.LOAD_WEATHER_API,
  payload,
});

const loadWeatherApiSuccessAction = (payload) => ({
  type: weatherConstant.LOAD_WEATHER_API_SUCCESS,
  payload,
});

const loadWeatherApiFailAction = () => ({
  type: weatherConstant.LOAD_WEATHER_API_FAIL,
});

const weatherActions = {
  loadWeatherApiAction,
  loadWeatherApiSuccessAction,
  loadWeatherApiFailAction,
};

export default weatherActions;
