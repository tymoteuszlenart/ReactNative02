import React, { Component } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    flex: 3,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  headtxt: {
    color: "white",
    fontSize: 32
  },
  main: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  inputs: {
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 200,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#d6d7da"
  }
});

class Main extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      login: "",
      pass: ""
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister() {
    if (this.state.login != "" && this.state.pass != "") {
      fetch("http://192.168.100.11:3000/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          login: this.state.login,
          pass: this.state.pass
        })
      })
        .then(response => response.json())
        .then(responseText => {
          if (responseText) {
            alert("User with this login already exists!");
          } else {
            this.props.navigation.navigate("listItem");
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("uzupełnij dane");
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={"padding"}
        enabled
      >
        <View style={styles.head}>
          <Text style={styles.headtxt}> Register Node App </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.inputs}>
            <Text style={styles.inputtxt}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder={"LOGIN"}
              onChangeText={txt => {
                this.setState({ login: txt });
              }}
              value={this.state.login}
              textContentType={"username"}
            />
          </View>
          <View style={styles.inputs}>
            <Text style={styles.inputtxt}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder={"PASSWORD"}
              onChangeText={txt => {
                this.setState({ pass: txt });
              }}
              value={this.state.pass}
              textContentType={"password"}
              secureTextEntry={true}
            />
          </View>
        </View>
        <Button text={"register"} call={this.handleRegister} />
      </KeyboardAvoidingView>
    );
  }
}

export default Main;
