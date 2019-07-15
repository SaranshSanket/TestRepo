import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { LoginManager } from "react-native-fbsdk";

export default class HomeView extends Component {
   constructor(props)
      {
          super(props)
		   this.fbauth = this.fbauth.bind(this);
      }

fbauth(){
LoginManager.logOut();
	LoginManager.logInWithPermissions(["public_profile"]).then(
  function(result) {
    if (result.isCancelled) {
      console.log("Login cancelled");
    } else {
      console.log(
        "Login success with permissions: " +
          result.grantedPermissions.toString()
      );
		this.props.navigation.navigate('GiftedChat')
    }
  },
  function(error) {
    console.log("Login fail with error: " + error);
  }
);
}
  
  render() {
    return (
      <View>
       <TouchableOpacity onPress={this.fbauth}>
                    <Text>Facebook Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}