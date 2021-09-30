/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getWeatherDataSelector,
  getWeatherLoadedSelector,
} from '../../shared/store/selectors/weather.selector';
import weatherActions from '../../shared/store/actions/weather.action';
import Button from './styled/Button';
import CitySubmit from './styled/CitySubmit';
import WeatherInformation from './styled/WeatherInformation';
import BackgroundImage from './styled/BackgroundImage';
import CardWrapper from './styled/CardWrapper';

const HomePage = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const weatherData = useSelector(getWeatherDataSelector);
  const weatherLoaded = useSelector(getWeatherLoadedSelector);

  const changeHandler = (e) => {
    setCityName(e.target.value);
    if (cityName.trim().length > 0) {
      setIsValid(true);
      setIsVisible(!isVisible);
    }
  };

  const loadWeather = (city) => {
    dispatch(weatherActions.loadWeatherApiAction(cityName));
    if (cityName.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setCityName('');
  };

  return (
    <>
      <BackgroundImage>
        <CitySubmit invalid={!isValid}>
          <p style={{ color: 'white', margin: '50px' }}>
            Welcome to my <code>React Boilerplate</code>!
          </p>
          <input
            type="text"
            value={cityName}
            placeholder="Please type a city name"
            onChange={changeHandler}
          />
          <Button onClick={loadWeather}>Show me the weather forecast</Button>
          {weatherLoaded ? (
            <CardWrapper>
              <WeatherInformation>
                <span>City:</span> {weatherData.city.name}
              </WeatherInformation>
              <WeatherInformation>
                <span>Temp: </span>
                {Math.trunc(weatherData.list[0].main.temp)} &deg;C
              </WeatherInformation>
              <WeatherInformation>
                <span>Description: </span>
                {weatherData.list[0].weather[0].description}
              </WeatherInformation>
            </CardWrapper>
          ) : (
            <></>
          )}
        </CitySubmit>
      </BackgroundImage>
    </>
  );
};

export default HomePage;
