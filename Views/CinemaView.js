import React, {useEffect, useState} from 'react';
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
import {observer} from 'mobx-react-lite';
import Events from '../store/Events';
import Profile from '../store/Profile';
import News from '../store/News';
import Cinema from '../store/Cinema';

const CinemaView = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Cinema.fetchMovies(currentPage);
  }, [currentPage]);

  const loadMore = () => {
    Cinema.loadMoreFilms(currentPage);
  };
  const onEndReached = () => {
    setCurrentPage(prevState => prevState + 1);
    loadMore();
  };
  return (
    <View style={styles.container}>
      {Cinema.loading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          onEndReachedThreshold={0.5}
          style={{width: '100%'}}
          data={Cinema.movies}
          keyExtractor={item => item.id}
          onEndReached={onEndReached}
          renderItem={({item}) => <EventsItem item={item} />}
        />
      )}
    </View>
  );
});

export default CinemaView;

const styles = {
  container: {flex: 1, width: '100%', alignItems: 'center', padding: 20},
};
