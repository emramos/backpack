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

import React from 'react';
import BpkIcon from 'react-native-bpk-component-icon';
import {
  colorRed500,
  colorGreen500,
  colorGray300,
} from 'bpk-tokens/tokens/base.react.native';

const ValidIcon = () => (
  <BpkIcon icon="tick" small style={{ color: colorGreen500 }} />
);

const InvalidIcon = () => (
  <BpkIcon icon="exclamation-circle" small style={{ color: colorRed500 }} />
);

const ClearIcon = () => (
  <BpkIcon icon="close-circle" small style={{ color: colorGray300 }} />
);

export {
  ValidIcon,
  InvalidIcon,
  ClearIcon,
};
