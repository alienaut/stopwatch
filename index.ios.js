'use strict';

var React = require('react-native');
var formatTime = require('minutes-seconds-milliseconds');

var { AppRegistry, Text, View, StyleSheet, TouchableHighlight } = React;

var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, this.border('yellow')]} /* yellow */ >
          <View  style={[this.border('red'), styles.timerWrapper]} /* red */ >
            <Text> {formatTime(this.state.timeElapsed)} </Text>
          </View>
          <View style={[this.border('green'), styles.buttonWrapper]} /* green */ >
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={[styles.footer, this.border('blue')]} /* blue */ >
          <Text> list of laps </Text>
        </View>
      </View>
    );
  },
  startStopButton: function() {
    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress}
      >
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    );
  },
  handleStartPress: function() {
    var startTime = new Date();
    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
  },
  lapButton: function() {
    return (
      <View>
        <Text>
          Lap
        </Text>
      </View>
    );
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    };
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  },
  timerWrapper: { // Red
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // Green
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
