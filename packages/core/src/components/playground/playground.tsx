/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, h, Host, State } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  // scoped: true,
})
export class PlaygroundInternal {
  @State() expanded: boolean = false;
  @State() slot: string = 'left';
  @State() variant: 'inline' | 'floating' = 'inline';
  @State() layout: 'full-width-top-bottom' | 'full-height-left-right' =
    'full-height-left-right';

  render() {
    return (
      <Host>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <ix-pane-layout
            variant={this.variant}
            layout={this.layout}
            borderless={this.variant === 'floating'}
          >
            <ix-pane heading={'Pane 1'} slot={this.slot} size={'33%'}>
              <div style={{ width: '1000px', height: '1000px' }}>
                <h1>Pane 1</h1>
              </div>
            </ix-pane>

            <ix-pane
              heading={'Pane 2'}
              slot={'top'}
              size={'33%'}
              // overwrite layout default
              borderless={true}
            >
              <h1>Pane 2</h1>
            </ix-pane>

            <ix-pane heading={'Pane 3'} slot={'right'} size={'33%'}>
              <h1>Pane 3</h1>
            </ix-pane>

            <div
              slot={'content'}
              style={{
                backgroundColor: 'black',
                width: '100%',
                height: '100%',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ix-button
                onClick={() => {
                  this.expanded = !this.expanded;
                }}
                style={{
                  width: '20rem',
                }}
              >
                Popup Pane
              </ix-button>
              <ix-button
                onClick={() => {
                  this.variant =
                    this.variant === 'inline' ? 'floating' : 'inline';
                }}
                style={{
                  width: '20rem',
                  paddingTop: '0.5rem',
                }}
              >
                Toggle Variant
              </ix-button>
              <ix-button
                onClick={() => {
                  this.slot = this.slot === 'left' ? 'bottom' : 'left';
                }}
                style={{
                  width: '20rem',
                  paddingTop: '0.5rem',
                }}
              >
                Toggle Slot Pane 1
              </ix-button>
              {/* Layout Toggle doesn't work in stencil - faulty dom handling */}
              <ix-button
                onClick={() => {
                  this.layout =
                    this.layout === 'full-height-left-right'
                      ? 'full-width-top-bottom'
                      : 'full-height-left-right';
                }}
                style={{
                  width: '20rem',
                  paddingTop: '0.5rem',
                }}
              >
                Toggle Layout
              </ix-button>
            </div>
          </ix-pane-layout>

          <ix-pane
            heading={'popup'}
            position={'right'}
            expanded={this.expanded}
            variant={'floating'}
            size={'50%'}
            collapsible={false}
            onExpandedChanged={(event) => {
              this.expanded = event.detail.expanded;
            }}
            style={{
              position: 'absolute',
              right: '0',
              zIndex: '10',
            }}
          >
            <h1>Popup</h1>
          </ix-pane>
        </div>
      </Host>
    );
  }
}
