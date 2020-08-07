import React from "react";
import {injectReducer} from './index';

const withReducer = (key: any , reducer: any) => ( WrappedComponent: React.ComponentType ) =>
    class extends React.PureComponent {
        constructor(props: any)
        {
            alert(reducer);
            super(props);
            injectReducer(key, reducer);
        };

        render()
        {
            return <WrappedComponent {...this.props} />;
        };
    };

export default withReducer;