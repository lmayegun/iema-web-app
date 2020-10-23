import AppUtils from 'src/@localpkg/AppUtils';
import {NodesConfig} from 'src/app/main/NodesConfig';

const routesComponentsConfig = [
  NodesConfig,
]

const routes =  [
      ...AppUtils.generateRoutesFromConfigs(routesComponentsConfig, null),
    ];

export default routes;
