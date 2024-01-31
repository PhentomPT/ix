/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  forceUpdate,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { Position } from '../pane/pane';
import { applicationLayoutService } from '../utils/application-layout';
import { matchBreakpoint } from '../utils/breakpoints';

/**
 * @since 2.1.0
 */
@Component({
  tag: 'ix-pane-layout',
  styleUrl: 'pane-layout.scss',
  shadow: true,
})
export class Panes {
  @Element() hostElement: HTMLIxPaneLayoutElement;

  /**
   * Choose the layout of the panes
   */
  @Prop() layout: 'full-height-left-right' | 'full-width-top-bottom' =
    'full-height-left-right';

  /**
   * Set the default variant for all panes in the layout
   */
  @Prop() variant: 'floating' | 'inline' = 'inline';

  /**
   * Set the default border state for all panes in the layout
   */
  @Prop() borderless: boolean = false;

  @State() private isMobile = false;
  @State() private paneElements = 0;

  private panes: Array<{
    paneId: string;
    slot: string;
    hideOnCollapse: boolean;
    floating: boolean;
  }> = [];

  private observer: MutationObserver;

  get currentPanes() {
    return this.hostElement.querySelectorAll('ix-pane');
  }

  componentWillLoad() {
    // set initial pane amount
    this.paneElements = this.currentPanes.length;

    // recognize inserted or removed panes
    this.observer = new MutationObserver((mutations) => {
      if (mutations[0].addedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.setPanes(this.currentPanes);
        this.paneElements += 1;
      } else if (mutations[0].removedNodes.item(0)?.nodeName === 'IX-PANE') {
        this.setPanes(this.currentPanes);
        this.paneElements -= 1;
      }
    });
    this.observer.observe(this.hostElement, {
      childList: true,
    });

    // set isMobile and add observer
    this.isMobile = matchBreakpoint('sm');
    applicationLayoutService.onChange.on(() => {
      this.isMobile = matchBreakpoint('sm');
    });
  }

  componentDidLoad() {
    this.setPanes(this.currentPanes);
  }

  disconnectedCallback() {
    this.observer?.disconnect();
  }

  private setPaneVariant(pane: HTMLIxPaneElement) {
    if (!pane.preventOverwrite) {
      pane.variant = this.variant;
    }
  }

  private setPaneBorder(pane: HTMLIxPaneElement) {
    if (!pane.preventOverwrite) {
      if (this.borderless) {
        pane.borderless = true;
      } else {
        const hasVisibleLeftPane = !!this.panes.find(
          (pane) => pane.slot === 'left' && !pane.hideOnCollapse
        );
        if (
          pane.variant === 'floating' &&
          this.layout === 'full-height-left-right' &&
          hasVisibleLeftPane &&
          (pane.position === 'top' || pane.position === 'bottom')
        ) {
          console.log('Hallo');
          pane.borderless = true;
        } else {
          pane.borderless = false;
        }
      }
    }
  }

  private setPaneZIndex(pane: HTMLIxPaneElement) {
    const isTop = pane.slot === 'top';
    const isBottom = pane.slot === 'bottom';
    const isLeft = pane.slot === 'left';
    const isRight = pane.slot === 'right';

    let zIndex = 1;
    if (this.isMobile) {
      if (isBottom || isTop) {
        zIndex = 3;
      }
    } else {
      if (this.layout === 'full-height-left-right') {
        if (isLeft || isRight) {
          zIndex = 3;
        }
      } else {
        if (isBottom || isTop) {
          zIndex = 3;
        }
      }
    }
    pane.style.zIndex = zIndex.toString();
  }

  private setPanes(panes: NodeListOf<HTMLIxPaneElement>) {
    this.panes = [];
    panes.forEach((pane) => {
      this.panes.push({
        paneId: pane.identifier,
        slot: pane.slot,
        hideOnCollapse: pane.hideOnCollapse,
        floating: pane.variant === 'floating',
      });
    });
  }

  @Listen('slotChanged')
  onSlotChanged(event: CustomEvent) {
    const { paneId, newSlot } = event.detail;

    this.panes.forEach((currentSlot) => {
      if (currentSlot.paneId === paneId) {
        currentSlot.slot = newSlot;
      }
    });

    this.configurePanes();
    forceUpdate(this.hostElement);
  }

  @Listen('hideOnCollapseChanged')
  onCollapsibleChanged(event: CustomEvent) {
    const { paneId, hideOnCollapse } = event.detail;

    this.panes.forEach((currentSlot) => {
      if (currentSlot.paneId === paneId) {
        currentSlot.hideOnCollapse = hideOnCollapse;
      }
    });

    forceUpdate(this.hostElement);
  }

  @Listen('variantChanged')
  onVariantChanged(event: CustomEvent) {
    const { paneId, variant } = event.detail;

    this.panes.forEach((currentSlot) => {
      if (currentSlot.paneId === paneId) {
        currentSlot.floating = variant === 'floating';
      }
    });

    forceUpdate(this.hostElement);
  }

  @Watch('variant')
  onVariableChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneVariant(pane);
      this.setPaneBorder(pane);
    });
  }

  @Watch('borderless')
  onBorderChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneBorder(pane);
    });
  }

  @Watch('layout')
  onLayoutChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneBorder(pane);
      this.setPaneZIndex(pane);
    });
  }

  @Watch('isMobile')
  onMobileChange() {
    this.currentPanes.forEach((pane) => {
      this.setPaneZIndex(pane);
    });
  }

  @Watch('paneElements')
  configurePanes() {
    let topCount = 0;
    let bottomCount = 0;
    let leftCount = 0;
    let rightCount = 0;

    this.currentPanes.forEach((pane) => {
      const isTop = pane.slot === 'top';
      const isBottom = pane.slot === 'bottom';
      const isLeft = pane.slot === 'left';
      const isRight = pane.slot === 'right';

      if (isLeft) {
        if (leftCount) {
          pane.slot = undefined;
          return;
        }
        leftCount++;
      } else if (isRight) {
        if (rightCount) {
          pane.slot = undefined;
          return;
        }
        rightCount++;
      } else if (isTop) {
        if (topCount) {
          pane.slot = undefined;
          return;
        }
        topCount++;
      } else if (isBottom) {
        if (bottomCount) {
          pane.slot = undefined;
          return;
        }
        bottomCount++;
      } else {
        pane.slot = undefined;
        return;
      }

      this.setPaneZIndex(pane);
    });
  }

  private hasPadding(position: Position) {
    const pane = this.panes.find((pane) => pane.slot === position);
    return pane ? !pane.hideOnCollapse && pane.floating : false;
  }

  private isFloating(position: Position) {
    const pane = this.panes.find((pane) => pane.slot === position);
    return pane ? pane.floating : false;
  }

  render() {
    return (
      <Host>
        {!this.isMobile ? (
          this.layout == 'full-height-left-right' ? (
            <div class="side-panes-wrapper">
              <div
                class={{
                  row: true,
                  'padding-left': this.hasPadding('left'),
                  'padding-right': this.hasPadding('right'),
                }}
              >
                <div
                  key="left"
                  class={{ 'absolute-left': this.isFloating('left') }}
                >
                  <slot name="left"></slot>
                </div>
                <div
                  class={{
                    col: true,
                    'padding-top': this.hasPadding('top'),
                    'padding-bottom': this.hasPadding('bottom'),
                  }}
                >
                  <div
                    key="top"
                    class={{ 'absolute-top': this.isFloating('top') }}
                  >
                    <slot name="top"></slot>
                  </div>
                  <div key="content" class="content">
                    <slot name="content"></slot>
                  </div>
                  <div
                    key="bottom"
                    class={{ 'absolute-bottom': this.isFloating('bottom') }}
                  >
                    <slot name="bottom"></slot>
                  </div>
                </div>
                <div
                  key="right"
                  class={{ 'absolute-right': this.isFloating('right') }}
                >
                  <slot name="right"></slot>
                </div>
              </div>
            </div>
          ) : (
            <div class="side-panes-wrapper">
              <div
                class={{
                  col: true,
                  'padding-top': this.hasPadding('top'),
                  'padding-bottom': this.hasPadding('bottom'),
                }}
              >
                <div
                  key="top"
                  class={{ 'absolute-top': this.isFloating('top') }}
                >
                  <slot name="top"></slot>
                </div>
                <div
                  class={{
                    row: true,
                    'padding-left': this.hasPadding('left'),
                    'padding-right': this.hasPadding('right'),
                  }}
                >
                  <div
                    key="left"
                    class={{ 'absolute-left': this.isFloating('left') }}
                  >
                    <slot name="left"></slot>
                  </div>
                  <div key="content" class="content">
                    <slot name="content"></slot>
                  </div>
                  <div
                    key="right"
                    class={{ 'absolute-right': this.isFloating('right') }}
                  >
                    <slot name="right"></slot>
                  </div>
                </div>
                <div
                  key="bottom"
                  class={{ 'absolute-bottom': this.isFloating('bottom') }}
                >
                  <slot name="bottom"></slot>
                </div>
              </div>
            </div>
          )
        ) : (
          <div class="col">
            <div key="top">
              <slot name="top"></slot>
            </div>
            <div key="left">
              <slot name="left"></slot>
            </div>
            <div key="content" class="content">
              <slot name="content"></slot>
            </div>
            <div key="right">
              <slot name="right"></slot>
            </div>
            <div key="bottom">
              <slot name="bottom"></slot>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
