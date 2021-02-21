import React, { Component, createContext } from "react";
import { auth } from "../firebase/config";
import { generateUserDoc } from "../services/userService/userService";

export const UserContext = createContext({ user: "myfriendflicka" });
class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDoc(userAuth);
      this.setState({ user });
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;