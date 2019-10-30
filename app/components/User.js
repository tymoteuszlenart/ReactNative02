import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "grey"
  },
  img: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "green"
  },
  text: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  texttxt: {
    textAlign: "center",
    fontSize: 16
  },
  image: {
    flex: 0.5,
    justifyContent: "center",
    alignContent: "center"
  },
  buttons: {
    flex: 1,
    flexDirection: "column"
  }
});

class User extends Component {
  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
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
          this.props.call();
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  edit() {
    this.props.toEdit();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.img} source={require("./img/prof.jpeg")} />
        </View>
        <View style={styles.text}>
          <Text style={styles.texttxt}>
            {this.props.login} {this.props.pass}
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button call={this.edit} text={"edit"} />
          <Button call={this.delete} text={"delete"} />
        </View>
      </View>
    );
  }
}

export default User;
