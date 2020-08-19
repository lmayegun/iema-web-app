import * as React from 'react';

export interface AppContextInterface {
    modalMenu: boolean;
    toggleModalMenu: ()=>void;
    searchText: string;
    setSearchText: ( input: string )=>void; 
}

const AppContext = React.createContext<AppContextInterface | null >(null);

export const AppContextProvider = AppContext.Provider;
  
export const AppContextConsumer = AppContext.Consumer;

export class AppProvider extends React.Component{
    
    state = {
        modalMenu       : false,
        toggleModalMenu : ()=>{
          this.setState({modalMenu: !this.state.modalMenu})
        },
        searchText      : '',
        setSearchText   : ( input: string )=>{
            this.setState({ searchText: input })
        }
    }

    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        ) 
    }
}