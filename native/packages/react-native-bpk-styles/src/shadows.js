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

import { PixelRatio } from 'react-native';
import {
  shadowSmColor,
  shadowSmOffsetWidth,
  shadowSmOffsetHeight,
  shadowSmOpacity,
  shadowSmRadius,
  shadowXlColor,
  shadowXlOffsetWidth,
  shadowXlOffsetHeight,
  shadowXlOpacity,
  shadowXlRadius,
} from 'bpk-tokens/tokens/base.react.native';

export default {
  base: () => ({
    shadowColor: shadowSmColor,
    shadowOffset: {
      height: shadowSmOffsetHeight / PixelRatio.get(),
      width: shadowSmOffsetWidth,
    },
    shadowOpacity: shadowSmOpacity,
    shadowRadius: shadowSmRadius / PixelRatio.get(),
  }),
  large: () => ({
    shadowColor: shadowXlColor,
    shadowOffset: {
      height: shadowXlOffsetHeight / PixelRatio.get(),
      width: shadowXlOffsetWidth,
    },
    shadowOpacity: shadowXlOpacity,
    shadowRadius: shadowXlRadius / PixelRatio.get(),
  }),
};
