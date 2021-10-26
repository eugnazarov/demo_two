import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {ActivityIndicator, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Events from '../store/Events';
import Profile from '../store/Profile';
import {Picker} from '@react-native-picker/picker';
import Feed from '../components/Feed';
import {BottomSheet, Button, Icon, ListItem} from 'react-native-elements';

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
      Events.fetchEvents(Profile.currentTown?.id, 1, getCategory());
    }
  }, [currentCategory, Profile.currentTown]);

  const loadMore = () => {
    Events.loadMoreEvents(
      Profile.currentTown?.id,
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

  const list = [
    ...Events.categories,
    {
      name: 'Отмена',
      onPress: () => Events.toggleCategoryPicker(),
      textStyle: {color: 'red', alignSelf: 'center'},
    },
  ];

  const onCategoryPick = name => {
    name !== 'Отмена' && setCurrentCategory(name);
    Events.toggleCategoryPicker();
  };

  return (
    <View style={styles.container}>
      <BottomSheet
        isVisible={Events.isCategoryPickerOpened}
        containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
        {list.map((l, i) => (
          <ListItem key={l.id} onPress={() => onCategoryPick(l.name)}>
            <ListItem.Content>
              <ListItem.Title style={l.textStyle}>{l.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
      <Feed
        refreshing={Events.loading}
        onRefresh={() =>
          Events.fetchEvents(Profile.currentTown?.id, 1, getCategory())
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
  toolbar: {
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 25,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttons: {
    flexDirection: 'row',
  },
  container: {
    position: 'relative',
    flex: 1,
    width: '100%',
  },
};
