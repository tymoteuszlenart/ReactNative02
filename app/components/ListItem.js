import React, { Component } from "react";
import { View, Text } from "react-native";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.navigation.state.params);
  }

  render() {
    return (
      <View>
        <Text> ListItem </Text>
      </View>
    );
  }
}

export default ListItem;
