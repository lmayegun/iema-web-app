import React from "react";
import {injectReducer} from './index';
import { RouteComponentProps } from 'react-router';

const withReducer = (key: any , reducer: any) => ( WrappedComponent: React.FC<RouteComponentProps> ) =>
    class extends React.PureComponent<RouteComponentProps> {
        constructor(props: any)
        {
            super(props);
            injectReducer(key, reducer);
        };

        render()
        {
            return <WrappedComponent {...this.props} />;
        };
    };

export default withReducer;
