import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Events from '../store/Events';
import Profile from '../store/Profile';
import {Picker} from '@react-native-picker/picker';
import Feed from '../components/Feed';

const EventsView = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(
    Events.currentCategory,
  );

  useEffect(() => {
    Profile.fetchCities();
    Events.fetchCategories();
    if (!Profile.currentTown) {
      Geolocation.getCurrentPosition(pos => Profile.getGeo(pos.coords));
    }
  }, []);

  useEffect(() => {
    Events.clearEvents();
    if (Profile.currentTown) {
      Events.fetchEvents(Profile.currentTown.id, 1, getCategory());
    }
  }, [currentCategory, Profile.currentTown]);

  const loadMore = () => {
    Events.loadMoreEvents(
      Profile.currentTown.id,
      currentPage + 1,
      getCategory(),
    );
  };

  const onEndReached = () => {
    setCurrentPage(prevState => prevState + 1);
    loadMore();
  };

  const getCategory = () => {
    return Events.categories.find(cat => cat.name === currentCategory);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={currentCategory}
        onValueChange={value => {
          setCurrentCategory(value);
        }}
        style={{width: '100%'}}>
        {Events.categories.map(cat => (
          <Picker.Item
            style={{backgroundColor: '#fff', color: 'black'}}
            label={cat.name}
            value={cat.name}
          />
        ))}
      </Picker>
      <Feed
        refreshing={Events.loading}
        onRefresh={() =>
          Events.fetchEvents(Profile.currentTown.id, 1, getCategory())
        }
        data={Events.events}
        onEndReached={onEndReached}
      />
    </View>
  );
});

export default EventsView;

const styles = {
  empty: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    padding: 13,
    backgroundColor: 'red',
    borderWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  container: {flex: 1, width: '100%', alignItems: 'center', padding: 4},
};
