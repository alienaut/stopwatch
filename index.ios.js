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
        <View style={styles.header}>
          <View  style={styles.timerWrapper}>
            <Text style={styles.timer}> {formatTime(this.state.timeElapsed)} </Text>
          </View>
          <View style={styles.buttonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={styles.footer}>
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
        style={[styles.button, styles.startBUtton]}
      >
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    );
  },
  lapButton: function() {
    return (
      <View style={styles.button}>
        <Text>
          Lap
        </Text>
      </View>
    );
  },
  handleStartPress: function() {
    var startTime = new Date();
    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
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
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startBUtton: {
    borderColor: '#00CC00'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
