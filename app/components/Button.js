import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 200,
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    backgroundColor: "green",
    alignSelf: "baseline",
    margin: 3
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "white"
  },
  regbut: {
    alignSelf: "stretch",
    margin: 0,
    padding: 0,
    width: "auto"
  },
  text2: {
    fontSize: 10,
    textAlign: "center"
  }
});

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    buttonStyles = [styles.button];
    if (this.props.text.toLowerCase() == "register")
      buttonStyles.push(styles.regbut);

    if (
      this.props.text.toLowerCase() == "edit" ||
      this.props.text.toLowerCase() == "delete"
    )
      buttonStyles.push(styles.text2);
    return (
      <TouchableOpacity onPress={this.props.call} style={buttonStyles}>
        <Text style={styles.text}> {this.props.text.toUpperCase()} </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
