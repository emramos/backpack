/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Animated,
  Platform,
  TextInput,
  View,
  ViewPropTypes,
} from 'react-native';
import BpkTouchableOverlay from 'react-native-bpk-component-touchable-overlay';
import BpkText from 'react-native-bpk-component-text';
import { animationDurationSm } from 'bpk-tokens/tokens/base.react.native';
import { ValidIcon, InvalidIcon, ClearIcon } from './BpkTextInputIcons';
import { getLabelStyle, getInputContainerStyle, styles } from './BpkTextInputStyles';

class BpkTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };

    this.animatedValues = {
      color: new Animated.Value(this.getColorAnimatedValue()),
      labelPosition: new Animated.Value(this.getLabelPositionAnimatedValue()),
    };

    this.onClearText = this.onClearText.bind(this);
  }

  componentDidUpdate() {
    Animated.parallel([
      Animated.timing(this.animatedValues.color, {
        toValue: this.getColorAnimatedValue(),
        duration: animationDurationSm,
      }),
      Animated.timing(this.animatedValues.labelPosition, {
        toValue: this.getLabelPositionAnimatedValue(),
        duration: animationDurationSm,
      }),
    ]).start();
  }

  onClearText() {
    this.inputRef.setNativeProps({ text: '' });
    if (this.props.onChangeText) {
      this.props.onChangeText('');
    }
  }

  getColorAnimatedValue() {
    return this.state.isFocused ? 1 : 0;
  }

  getLabelPositionAnimatedValue() {
    return (this.props.value || this.state.isFocused) ? 0 : 1;
  }

  render() {
    const { isFocused } = this.state;
    const {
      validationMessage,
      editable,
      label,
      value,
      style: userStyle,
      valid,
      onFocus,
      onBlur,
      ...rest
    } = this.props;

    const validityIcon = valid ? <ValidIcon /> : (valid === false && <InvalidIcon />);
    const clearButton = (
      <BpkTouchableOverlay onPress={this.onClearText} borderRadius="pill">
        <ClearIcon />
      </BpkTouchableOverlay>
    );

    const animatedLabelStyle = getLabelStyle(
      this.animatedValues.color,
      this.animatedValues.labelPosition,
      { value, valid, editable },
    );

    const animatedInputStyle = getInputContainerStyle(this.animatedValues.color, valid);

    return (
      <View style={[styles.container, userStyle]}>
        <Animated.Text style={animatedLabelStyle}>{label}</Animated.Text>
        <Animated.View style={animatedInputStyle}>
          <TextInput
            editable={editable}
            value={value || ''}
            style={styles.input}
            onFocus={() => this.setState(() => ({ isFocused: true }), onFocus)}
            onBlur={() => this.setState(() => ({ isFocused: false }), onBlur)}
            ref={(ref) => { this.inputRef = ref; }}
            underlineColorAndroid="transparent"
            {...rest}
          />
          {Platform.OS === 'ios' && isFocused && value.length > 0 ? clearButton : validityIcon}
        </Animated.View>
        { valid === false && (
          <BpkText textStyle="xs" style={styles.validationMessage}>
            {validationMessage}
          </BpkText>
        )}
      </View>
    );
  }
}

BpkTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  validationMessage: PropTypes.string,
  valid: PropTypes.bool,
  editable: PropTypes.bool,
  style: ViewPropTypes.style,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
};

BpkTextInput.defaultProps = {
  validationMessage: null,
  valid: null,
  editable: true,
  style: null,
  onFocus: null,
  onBlur: null,
  onChangeText: null,
};

export default BpkTextInput;
