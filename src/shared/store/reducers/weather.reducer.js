import weatherConstant from '../constants/weather.constant';

const INITIAL_STATE = {
  data: {},
  loading: false,
  loaded: false,
  loadFail: false,
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherConstant.LOAD_WEATHER_API:
      return {
        ...state,
        loading: true,
        loaded: false,
        loadFail: false,
      };
    case weatherConstant.LOAD_WEATHER_API_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        loadFail: false,
        data: action.payload,
      };
    case weatherConstant.LOAD_WEATHER_API_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        loadFail: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default weatherReducer;
