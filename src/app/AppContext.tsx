import * as React from 'react';
import {RouteConfig} from 'react-router-config';

export interface AppContextInterface {
    routes: RouteConfig[]
  }

const AppContext = React.createContext<AppContextInterface | null >(null);

export const AppContextProvider = AppContext.Provider;
  
export const AppContextConsumer = AppContext.Consumer;