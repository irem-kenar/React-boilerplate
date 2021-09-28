import { createSelector } from "reselect";

export const globalWeatherState = (state) => state.weather;

export const getWeatherDataSelector = createSelector(
    globalWeatherState,
    weather => weather.data);

export const getWeatherLoadedSelector = createSelector(
    globalWeatherState,
    weather => weather.loaded
);
