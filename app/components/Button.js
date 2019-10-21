import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignContent: "center",
    flex: 0.5,
    alignSelf: "stretch",
    backgroundColor: "green"
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "white"
  }
});

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      func: this.props.call,
      text: this.props.text.toUpperCase()
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={this.state.func} style={styles.button}>
        <Text style={styles.text}> {this.state.text} </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
