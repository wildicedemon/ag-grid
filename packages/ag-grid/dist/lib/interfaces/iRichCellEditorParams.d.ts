// Type definitions for ag-grid v18.1.2-beta.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ICellRendererComp, ICellRendererFunc } from "../rendering/cellRenderers/iCellRenderer";
import { ICellEditorParams } from "../rendering/cellEditors/iCellEditor";
export interface IRichCellEditorParams extends ICellEditorParams {
    values: string[];
    cellHeight: number;
    cellRenderer: {
        new (): ICellRendererComp;
    } | ICellRendererFunc | string;
}
