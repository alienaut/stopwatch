'use strict';

var React = require('react-native');
var formatTime = require('minutes-seconds-milliseconds');

var { AppRegistry, Text, View, StyleSheet, TouchableHighlight } = React;

var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null,
      startTime: null,
      running: false
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
    var style = !this.state.running ? styles.startButton : styles.stopButton;

    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress}
        style={[styles.button, style]}
      >
        <Text>
          { !this.state.running ? 'Start' : 'Stop' }
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
    if(this.state.running) {
      clearInterval(this.interval);
      this.setState({
        running: false
      });
      return;
    }

    this.setState({ 
      startTime: new Date() 
    });
    
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
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
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
