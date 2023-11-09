interface Endpoints {
  [key: string]: string;
}

const endpoints: Endpoints = {
  loginApi: '/user/login',
  GET_ALL_USERS: '/user/getUsers',
  GET_RESTAURANTS: '/restaurants',
  SAVE_RESTAURANTS : '/restaurants/restaurants',
};

export default endpoints;
