'use strict';

var React = require('react-native');

var { AppRegistry, Text, View } = React;

var StopWatch = React.createClass({
  render: function() {
    return (
      <View>
        <Text> Hello world! </Text>
        {this.startStopButton()}
        {this.lapButton()}
      </View>
    );
  },
  startStopButton: function() {
    return (
      <View>
        <Text>
          Start
        </Text>
      </View>
    );
  },
  lapButton: function() {
    return (
      <View>
        <Text>
          Lap
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
