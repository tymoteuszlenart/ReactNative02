import React, { Component } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  input: {
    padding: 10,
    margin: 5
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      pass: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text> Register Node App </Text>
        </View>
        <View style={styles.main}>
          <TextInput
            style={styles.input}
            placeholder={"LOGIN"}
            onChangeText={txt => {
              this.setState({ login: txt });
            }}
            value={this.state.login}
          />
          <TextInput
            style={styles.input}
            placeholder={"PASSWORD"}
            onChangeText={txt => {
              this.setState({ pass: txt });
            }}
            value={this.state.pass}
          />
          <Button text={"register"} call={this.handleClick} />
        </View>
      </View>
    );
  }
}

export default Main;
