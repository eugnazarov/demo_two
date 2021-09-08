import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import EventsItem from '../components/EventsItem';
import {observer} from 'mobx-react-lite';
import Events from '../store/Events';
import Profile from '../store/Profile';

import {Picker} from '@react-native-picker/picker';

const EventsView = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(
    Events.currentCategory,
  );

  useEffect(() => {
    Events.clearEvents();
    Events.fetchEvents(Profile.currentTown?.id || 1, 1, getCategory());
  }, [currentCategory]);

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
      <FlatList
        ListEmptyComponent={<Text>Пусто =(</Text>}
        style={{width: '100%'}}
        data={Events.events}
        keyExtractor={item => item.id}
        onEndReached={onEndReached}
        renderItem={({item}) => <EventsItem item={item} />}
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
