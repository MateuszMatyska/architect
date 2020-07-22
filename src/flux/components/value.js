import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {connect} from 'react-redux';

const Value = props => {
  return (
    <SafeAreaView>
      <View>
        <Text>{props.value}</Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = store => {
  return {value: store.counter.value};
};

export default connect(mapStateToProps)(Value);
