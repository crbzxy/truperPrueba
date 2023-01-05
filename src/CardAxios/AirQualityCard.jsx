import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function AirQualityCard(props) {
  const { station, measure } = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {station.name}
        </Typography>
        <Typography color="textSecondary">
          {station.location.region}
        </Typography>
        <Typography variant="body2" component="p">
          {measure.parameter}: {measure.value} {measure.unit}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AirQualityCard;
