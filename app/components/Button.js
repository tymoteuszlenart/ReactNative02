import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    backgroundColor: "green",
    alignSelf: "baseline",
    margin: 5
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "white"
  },
  regbut: {
    alignSelf: "stretch",
    margin: 0
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
    buttonStyles = [styles.button];
    if (this.state.text.toLowerCase() == "register")
      buttonStyles.push(styles.regbut);
    return (
      <TouchableOpacity onPress={this.state.func} style={buttonStyles}>
        <Text style={styles.text}> {this.state.text} </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
