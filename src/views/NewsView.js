import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Events from '../store/Events';
import Profile from '../store/Profile';
import Feed from '../components/Feed';
import News from '../store/News';

const NewsView = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    News.fetchNews(Profile.currentTown.id, 1);
  }, []);

  const loadMore = () => {
    News.loadMoreNews(Profile.currentTown.id, currentPage + 1);
  };

  const onEndReached = () => {
    setCurrentPage(prevState => prevState + 1);
    loadMore();
  };

  return (
    <View style={styles.container}>
      <Feed
        refreshing={News.loading}
        onRefresh={() => News.fetchNews(Profile.currentTown.id, 1)}
        data={News.news}
        onEndReached={onEndReached}
      />
    </View>
  );
});

export default NewsView;

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
