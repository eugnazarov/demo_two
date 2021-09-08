import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Events from '../store/Events';
import EventsItem from './EventsItem';

const Feed = ({onEndReached, data, onRefresh, refreshing}) => {
  return (
    <FlatList
      ListEmptyComponent={<Text>Пусто =(</Text>}
      style={{width: '100%'}}
      data={data}
      refreshing={refreshing}
      onRefresh={onRefresh}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
      renderItem={({item}) => <EventsItem item={item} />}
    />
  );
};

export default Feed;
