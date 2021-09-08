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

const NewsView = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    News.fetchNews(Profile.currentTown?.id || 1, currentPage);
  }, [currentPage]);

  const loadMore = () => {
    News.loadMoreNews(Profile.currentTown.id, currentPage + 1);
  };

  const onEndReached = () => {
    setCurrentPage(prevState => prevState + 1);
    loadMore();
  };
  return (
    <View style={styles.container}>
      {Events.loading ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          onEndReachedThreshold={0.5}
          style={{width: '100%'}}
          data={News.news}
          keyExtractor={item => item.id}
          onEndReached={onEndReached}
          renderItem={({item}) => <EventsItem item={item} />}
        />
      )}
    </View>
  );
});

export default NewsView;

const styles = {
  container: {flex: 1, width: '100%', alignItems: 'center', padding: 20},
};
