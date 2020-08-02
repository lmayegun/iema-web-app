import AppUtils from '../../@localpkg/AppUtils';
import {NodesConfig} from '../main/NodesConfig';

const routesComponentsConfig = [
  NodesConfig,
]

const routes =  [
      ...AppUtils.generateRoutesFromConfigs(routesComponentsConfig, null),
    ];

export default routes;
