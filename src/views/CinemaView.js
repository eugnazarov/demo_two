import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Events from '../store/Events';
import Profile from '../store/Profile';
import Feed from '../components/Feed';
import News from '../store/News';
import Cinema from '../store/Cinema';

const CinemaView = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Cinema.fetchMovies(1);
  }, []);

  const loadMore = () => {
    Cinema.loadMoreFilms(currentPage + 1);
  };

  const onEndReached = () => {
    setCurrentPage(prevState => prevState + 1);
    loadMore();
  };

  return (
    <View style={styles.container}>
      <Feed
        refreshing={Cinema.loading}
        onRefresh={() => Cinema.fetchMovies(1)}
        data={Cinema.movies}
        onEndReached={onEndReached}
      />
    </View>
  );
});

export default CinemaView;

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
