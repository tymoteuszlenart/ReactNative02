import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "grey"
  },
  img: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "green",
    alignSelf: "center"
  },
  text: {
    flex: 21,
    alignContent: "center"
  },
  texttxt: {
    textAlign: "center",
    fontSize: 32
  },
  image: {
    flex: 20,
    justifyContent: "flex-end",
    alignContent: "center"
  }
});

class EditUser extends Component {
  static navigationOptions = {
    title: "Edit user"
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.img} source={require("./img/prof.jpeg")} />
        </View>
        <View style={styles.text}>
          <Text style={styles.texttxt}>
            {this.props.navigation.state.params.login}
          </Text>
          <Text style={styles.texttxt}>
            {this.props.navigation.state.params.pass}
          </Text>
        </View>
      </View>
    );
  }
}

export default EditUser;
