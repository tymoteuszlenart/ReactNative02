import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import User from "./User";

const styles = StyleSheet.create({
  container: { flex: 1 }
});

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ""
    };
    this.getUsers = this.getUsers.bind(this);
    this.getUsers();
  }

  getUsers = () => {
    fetch("http://172.20.10.11:3000/get", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          users: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          renderItem={({ item }) => (
            <User
              login={item.login}
              pass={item.pass}
              call={this.getUsers}
              toEdit={() =>
                this.props.navigation.navigate("editUser", {
                  login: item.login,
                  pass: item.pass
                })
              }
            />
          )}
          keyExtractor={item => item.login}
        />
      </View>
    );
  }
}

export default ListItem;
