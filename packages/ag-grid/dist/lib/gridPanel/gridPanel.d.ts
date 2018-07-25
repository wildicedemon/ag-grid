// Type definitions for ag-grid v18.1.2-beta.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowContainerComponent } from "../rendering/rowContainerComponent";
import { Component } from "../widgets/component";
import { HeaderRootComp } from "../headerRendering/headerRootComp";
export declare type RowContainerComponentNames = 'fullWidth' | 'body' | 'pinnedLeft' | 'pinnedRight' | 'floatingTop' | 'floatingTopPinnedLeft' | 'floatingTopPinnedRight' | 'floatingTopFullWidth' | 'floatingBottom' | 'floatingBottomPinnedLeft' | 'floatingBottomPinnedRight' | 'floatingBottomFullWith';
export declare type RowContainerComponents = {
    [K in RowContainerComponentNames]: RowContainerComponent;
};
export declare class GridPanel extends Component {
    private alignedGridsService;
    private gridOptionsWrapper;
    private columnController;
    private rowRenderer;
    private pinnedRowModel;
    private eventService;
    private context;
    private animationFrameService;
    private navigationService;
    private autoHeightCalculator;
    private columnAnimationService;
    private autoWidthCalculator;
    private paginationAutoPageSizeService;
    private beans;
    private paginationProxy;
    private columnApi;
    private gridApi;
    private dragService;
    private selectionController;
    private csvCreator;
    private mouseEventService;
    private focusedCellController;
    private $scope;
    private scrollVisibleService;
    private frameworkFactory;
    private valueService;
    private componentRecipes;
    private dragAndDropService;
    private heightScaler;
    private enterprise;
    private rangeController;
    private contextMenuFactory;
    private clipboardService;
    private eBody;
    private eBodyViewport;
    private eBodyContainer;
    private eLeftContainer;
    private eRightContainer;
    private eFullWidthViewportWrapper;
    private eFullWidthViewport;
    private eFullWidthContainer;
    private eLeftViewport;
    private eLeftViewportWrapper;
    private eRightViewport;
    private eRightViewportWrapper;
    private eTop;
    private eLeftTop;
    private eRightTop;
    private eTopContainer;
    private eTopViewport;
    private eTopFullWidthContainer;
    private eBottom;
    private eLeftBottom;
    private eRightBottom;
    private eBottomContainer;
    private eBottomViewport;
    private eBottomFullWidthContainer;
    headerRootComp: HeaderRootComp;
    private rowContainerComponents;
    private eAllCellContainers;
    private eOverlay;
    private scrollLeft;
    private nextScrollLeft;
    private scrollTop;
    private nextScrollTop;
    private verticalRedrawNeeded;
    private bodyHeight;
    private enableRtl;
    private scrollWidth;
    private scrollClipWidth;
    private pinningRight;
    private pinningLeft;
    private useAnimationFrame;
    private overlayWrapper;
    private lastVScrollElement;
    private lastVScrollTime;
    constructor();
    getVScrollPosition(): {
        top: number;
        bottom: number;
    };
    getHScrollPosition(): {
        left: number;
        right: number;
    };
    destroy(): void;
    private onRowDataChanged();
    private showOrHideOverlay();
    private onNewColumnsLoaded();
    private init();
    private onBodyViewportResized();
    setColumnMovingCss(moving: boolean): void;
    private setupOverlay();
    private addRowDragListener();
    private addStopEditingWhenGridLosesFocus();
    private addAngularApplyCheck();
    private disableBrowserDragging();
    private addEventListeners();
    private addDragListeners();
    private addMouseListeners();
    private addKeyboardEvents();
    private addBodyViewportListener();
    getBodyClientRect(): ClientRect;
    private getRowForEvent(event);
    private processKeyboardEvent(eventName, keyboardEvent);
    scrollToTop(): void;
    private processMouseEvent(eventName, mouseEvent);
    private mockContextMenuForIPad();
    private handleContextMenuMouseEvent(mouseEvent, touchEvent, rowComp, cellComp);
    private onContextMenu(mouseEvent, touchEvent, rowNode, column, value);
    private preventDefaultOnContextMenu(mouseEvent);
    private addShortcutKeyListeners();
    private onCtrlAndA(event);
    private onCtrlAndC(event);
    private onCtrlAndV(event);
    private onCtrlAndD(event);
    ensureIndexVisible(index: any, position?: string): void;
    getCenterWidth(): number;
    isHorizontalScrollShowing(): boolean;
    private isVerticalScrollShowing();
    checkViewportAndScrolls(): void;
    private updateScrollVisibleService();
    private setBottomPaddingOnPinned();
    private hideFullWidthViewportScrollbars();
    ensureColumnVisible(key: any): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    private getWidthForSizeColsToFit();
    sizeColumnsToFit(nextTimeout?: number): void;
    getBodyContainer(): HTMLElement;
    getDropTargetBodyContainers(): HTMLElement[];
    getDropTargetLeftContainers(): HTMLElement[];
    getDropTargetRightContainers(): HTMLElement[];
    private buildRowContainerComponents();
    private setupRowAnimationCssClass();
    private suppressScrollOnFloatingRow();
    getRowContainers(): RowContainerComponents;
    onDisplayedColumnsChanged(): void;
    private onDisplayedColumnsWidthChanged();
    private setWidthsOfContainers();
    private setCenterWidth();
    private setPinnedLeftWidth();
    private setPinnedRightWidth();
    private setElementWidth(element, width);
    private setPinnedContainersVisible();
    private hideVerticalScrollOnCenter();
    private checkBodyHeight();
    setBodyAndHeaderHeights(): void;
    getBodyHeight(): number;
    setHorizontalScrollPosition(hScrollPosition: number): void;
    setVerticalScrollPosition(vScrollPosition: number): void;
    scrollHorizontally(pixels: number): number;
    scrollVertically(pixels: number): number;
    private addScrollListener();
    private onAnyBodyScroll(source);
    private onBodyHorizontalScroll();
    private doHorizontalScroll();
    executeFrame(): boolean;
    private redrawRowsAfterScroll();
    private onHorizontalViewportChanged();
    getBodyViewportScrollLeft(): number;
    setBodyViewportScrollLeft(value: number): void;
    horizontallyScrollHeaderCenterAndFloatingCenter(): void;
    private synchroniseVerticalScrollPositions(position);
    addScrollEventListener(listener: () => void): void;
    removeScrollEventListener(listener: () => void): void;
}
