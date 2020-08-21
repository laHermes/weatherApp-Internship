import React from "react";
import { Container } from "../Container/Container";
import { Card, CardError } from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardTemp from "../Card/CardTemp";

function Home(props) {
  return (
    <Container>
      {!props.loading ? (
        <React.Fragment>
          {props.data.temperature ? (
            <Card>
              <CardHeader
                countryCode={props.data.countryCode}
                city={props.data.city}
              />
              <CardTemp icon={props.data.icon} temp={props.data.temperature.toFixed(0)} mintemp={props.data.temperatureMin.toFixed(0)} maxtemp={props.data.temperatureMax.toFixed(0)} description={props.data.description} feelslike={props.data.feelsLike.toFixed(0)} pressure={props.data.pressure} windspeed={props.data.windSpeed}/>
            </Card>
          ) : (
            <CardError>
              <p>Enter the correct name of the city</p>
            </CardError>
          )}
        </React.Fragment>
      ) : (
        <p>Loading</p>
      )}
    </Container>
  );
}

export default Home;
