import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  Touchable,
  TouchableHighlight,
  View,
} from 'react-native';
import moment from 'moment';
import EventsItem from '../components/EventsItem';
import {observer} from 'mobx-react-lite/src/observer';
import Events from '../store/Events';
import Profile from '../store/Profile';

const EventsView = observer(() => {
  useEffect(() => {
    Events.fetchEvents(Profile.currentTown.id);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={Events.events}
        keyExtractor={item => item.id}
        renderItem={({item}) => <EventsItem item={item} />}
      />
    </View>
  );
});

export default EventsView;

const styles = {
  container: {flex: 1, width: '100%', alignItems: 'center', padding: 20},
};
