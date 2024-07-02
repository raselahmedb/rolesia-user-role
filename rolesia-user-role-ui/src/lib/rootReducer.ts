import { combineReducers } from 'redux';
import {
  persistAuthConfig,
  persistRoleConfig,
  persistUserConfig,
} from './persistanceConfig';

const rootReducer = combineReducers({
  auth: persistAuthConfig,
  role: persistRoleConfig,
  user: persistUserConfig,
});

export default rootReducer;
