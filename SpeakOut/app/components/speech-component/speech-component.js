import React from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';

type Props = {
  fetchData: Function,
  isVoicePlayed : boolean
}

const WeatherComponent = (props: Props) => {

  return (
    <View>
      <Button
        onPress={fetchData}
        title='Speak Out'
      />
      <Text>{props.isVoicePlayed}</Text>
    </View>
  );
};

export default WeatherComponent;