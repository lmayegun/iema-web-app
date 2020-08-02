// import _ from 'lodash';

class AppUtils{

  static setRoutes(config: any, defaultAuth: any )
  {
      let routes = [...config.routes];

      if ( config.settings || config.auth )
      {
          routes = routes.map((route) => {
              let auth = config.auth ? [...config.auth] : defaultAuth || null;
              auth = route.auth ? [...auth, ...route.auth] : auth;
              return {
                  ...route,
                  settings: {...config.settings, ...route.settings},
                  auth
              };
          });
      }

      return [...routes];
  }

  static generateRoutesFromConfigs(configs: any, defaultAuth: any){
    let allRoutes: any = [];
    configs.forEach((config: any) => {
        allRoutes = [
            ...allRoutes,
            ...this.setRoutes(config, null)
        ]
    });
    return allRoutes;
  }
}

export default AppUtils;
