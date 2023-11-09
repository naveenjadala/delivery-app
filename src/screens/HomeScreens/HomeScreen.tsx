import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { getAllUsers, getRestaurants } from '../../services/api';

type Props = {}

type userData = {
  name: string,
  location: string,
  // rating: number,
  createdAt: string
}

const HomeScreen = (props: Props) => {
  const [users, setUsers] = useState<userData[]>([]);

  const getUsers = async () => {
    try {
      const getRestaurantsList = await getRestaurants('GET_RESTAURANTS');
      if (getRestaurantsList) {
        setUsers(getRestaurantsList);
      }
    } catch (error: any) {
      console.error("===>Error will getting users", error);
      // throw new Error(error.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ ...styles.listSty }}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  listSty: {
    padding: 20, backgroundColor: 'white', margin: 10, borderRadius: 15
  }
})