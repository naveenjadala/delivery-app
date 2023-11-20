import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { getAllRestaurants } from '../../services/api';
// import HomeHeader from '../../components/Headers/HomeHeader';
// import { Searchbar } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { primaryColor } from '../../assets/color';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  // const [serachQuery, setSearchQuery] = useState('');
  const { data, loading } = useAppSelector(state => state.restaurants);

  useEffect(() => {
    dispatch(getAllRestaurants('GET_RESTAURANTS'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadingFotter = () => {
    if (loading === 'pending') {
      return <ActivityIndicator size="large" color={primaryColor} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <ScrollView>
        <>
          <HomeHeader />
          <View style={{ margin: 20 }}>
            <Searchbar value={serachQuery} placeholder='Search resturent' />
            <View>
              <View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
              </View>
              <View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
              </View>
              <View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
              </View>
              <View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
              </View>
              <View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
              </View>
              <View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
                <View style={{ width: width / 2, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}><Text>Test1</Text></View>
              </View>
            </View>
          </View>
        </>
      </ScrollView> */}
      <FlatList
        data={data}
        keyExtractor={item => item?.id.toString()}
        renderItem={({ item }) => (
          <View style={{ ...styles.listSty }}>
            <Text>{item.name}</Text>
          </View>
        )}
        ListFooterComponent={loadingFotter}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  listSty: {
    padding: 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15,
  },
});
