import EncryptedStorage from 'react-native-encrypted-storage';

const storeData = async (key: string, value: string): Promise<void> => {
  try {
    await EncryptedStorage.setItem(key, value);
    console.log(`Data with key ${key} sotred successfully`);
  } catch (error) {
    console.error('Error storing failed');
  }
};

const retrieveData = async (key: string): Promise<string> => {
  try {
    const value = await EncryptedStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return '';
    }
  } catch (error: any) {
    console.log(error);
    return error.message;
  }
};

export {storeData, retrieveData};
