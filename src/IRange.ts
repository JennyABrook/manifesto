module Manifesto {
    export interface IRange extends IJSONLDResource {
        canvases: any[];
        getViewingDirection(): ViewingDirection;
        getViewingHint(): ViewingHint;
        parentRange: Range;
        path: string;
        ranges: Range[];
        treeNode: TreeNode;
    }
}