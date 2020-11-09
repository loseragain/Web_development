import 'babel-polyfill';

import UserModel from './UserModel';
import { APP_NAME,APP_VERSION,getVersion } from './constant';

const Userone = new UserModel(); 
console.log(Userone);
Userone.setName('Tezaswi Raj');
console.log(Userone);
console.log(Userone.getName());
console.log(APP_NAME,APP_VERSION,getVersion());