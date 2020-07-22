import React from 'react';
import {SafeAreaView, View, Button, Text} from 'react-native';
import {increment, decrement} from '../actions/actions';
import {connect} from 'react-redux';

const Controls = props => {
  return (
    <SafeAreaView>
      <View>
        <Button
          onPress={() => {
            props.incrementAction();
          }}
          title="+"
        />
      </View>
      <View>
        <Button
          onPress={() => {
            props.decrementAction();
          }}
          title="-"
        />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    incrementAction: () => dispatch(increment()),
    decrementAction: () => dispatch(decrement()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Controls);
