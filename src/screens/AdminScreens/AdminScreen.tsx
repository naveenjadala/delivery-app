import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {saveRestaurants} from '../../services/api';
import { storeData } from '../../storage';
import { AuthContext } from '../AuthScreens/AuthContext';

type Props = {};

interface restaurants {
  name: string;
  location: string;
}

const AdminScreen = (props: Props) => {
  const [res, setRes] = useState<restaurants[]>([]);
  const { setToken } = useContext(AuthContext);

  const saveRestaurant = async () => {
    try {
      let data = {
        name: "Dadu's",
        location: 'secunderabad',
      };
      const saveRes = await saveRestaurants('SAVE_RESTAURANTS', data);
      if (saveRes) {
        setRes(saveRes);
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    saveRestaurant();
  }, []);

  return (
    <View>
      <Text>AdminScreen</Text>
      <Button title='logout' onPress={() => setToken('')}></Button>
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({});
