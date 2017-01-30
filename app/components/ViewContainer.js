'use strict'
import React, { Component, View} from 'react-native'

class ViewContainer extends Component{
  render() {
    return (
      <View style = {styles.ViewContainer}>
      {this.props.children}
      </View>
    )
  }
}
const styles = React.StyleSheet. create({
  ViewContaine:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  }
})
