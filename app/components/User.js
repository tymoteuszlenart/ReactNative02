import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignContent: "center",
    flexDirection: "row"
  }
});

class User extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    ListItem = new ListItem();

    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  edit() {
    this.props.navigation.navigate("editUser");
  }

  delete() {
    fetch("http://172.20.10.11:3000/delete", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        login: this.props.login
      })
    })
      .then(response => response.text())
      .then(responseText => {
        if (responseText) {
          alert("Deleted!");
          ListItem.getUsers();
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.login} {this.props.pass}
        </Text>
        <Button call={this.edit} text={"edit"} />
        <Button call={this.delete} text={"delete"} />
      </View>
    );
  }
}

export default User;
