const RNEncryptedStorage = {
    setItem: jest.fn((key, value) => Promise.resolve(true)),
    getItem: jest.fn((key) => Promise.resolve('mocked_value')),
    removeItem: jest.fn((key) => Promise.resolve(true)),
  };
  
  export default RNEncryptedStorage;