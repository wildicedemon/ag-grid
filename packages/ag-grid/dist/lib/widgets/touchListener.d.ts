// Type definitions for ag-grid v18.1.2-beta.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IEventEmitter } from "../interfaces/iEventEmitter";
import { AgEvent } from "../events";
export interface TapEvent extends AgEvent {
    touchStart: Touch;
}
export interface LongTapEvent extends AgEvent {
    touchStart: Touch;
    touchEvent: TouchEvent;
}
export declare class TouchListener implements IEventEmitter {
    static EVENT_TAP: string;
    static EVENT_DOUBLE_TAP: string;
    static EVENT_LONG_TAP: string;
    private static DOUBLE_TAP_MILLIS;
    private eElement;
    private destroyFuncs;
    private moved;
    private touching;
    private touchStart;
    private lastTapTime;
    private eventService;
    private preventMouseClick;
    constructor(eElement: HTMLElement, preventMouseClick?: boolean);
    private getActiveTouch(touchList);
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    private onTouchStart(touchEvent);
    private onTouchMove(touchEvent);
    private onTouchEnd(touchEvent);
    private checkForDoubleTap();
    destroy(): void;
}
