import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Events from '../store/Events';
import EventsItem from './EventsItem';
import {withTheme} from 'react-native-elements';

const Feed = ({onEndReached, data, onRefresh, refreshing, theme}) => {
  return (
    <FlatList
      ListEmptyComponent={
        <Text style={{position: 'absolute', top: 150}}>
          {!refreshing && 'Здесь пока ничего нет =('}
        </Text>
      }
      data={data}
      refreshing={refreshing}
      onRefresh={onRefresh}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
      renderItem={({item}) => <EventsItem key={item.id} item={item} />}
    />
  );
};

export default withTheme(Feed);
