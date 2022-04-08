import React,{ createContext } from "react";

const UserContext = createContext({
    name: '',
    loggedin: false
})

export class UserProvider extends React.Component {
    state = {
        name: null,
        loggedin: false
    };
  
  
    render() {
      const { children } = this.props;
      return (
        
        <UserContext.Provider value={this.state}>
          {children}
        </UserContext.Provider>
      );
    }
  }
  
  export const UserConsumer = UserContext.Consumer;