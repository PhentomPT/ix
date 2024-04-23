/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  styleUrls: ['./styles-auto-gen/toggle-button.css'],
  template: `
    <ix-toggle-button outline>Normal</ix-toggle-button>
    <ix-toggle-button outline pressed>Pressed</ix-toggle-button>
    <ix-toggle-button outline disabled>Disabled</ix-toggle-button>
    <ix-toggle-button outline disabled loading>Loading</ix-toggle-button>
  `,
})
export default class Buttons {}
