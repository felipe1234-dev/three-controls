import { Camera, Object3D, Mesh } from "three";

export class TransformControls extends Object3D {
    constructor(object: Camera, domElement?: HTMLElement);
    
    size: number;
    
    space: string;

    object: Object3D;

    mode: "translate" | "rotate" | "scale";
    
    update(): void;

    detach(): void;

    attach(object: Object3D): void;

    getMode(): "translate" | "rotate" | "scale";

    setMode(mode: "translate" | "rotate" | "scale"): void;

    setSnap(snap: any): void;

    setSize(size: number): void;

    setSpace(space: string): void;
    
    setTranslationSnap(size: number): void;
    
    setRotationSnap(size: number): void;

}

export class TransformControlsGizmo extends Object3D {
    constructor();
    
    gizmo: {
        translate: Object3D;
        rotate: Object3D;
        scale: Object3D
    };
    
    picker: {
        translate: Object3D;
        rotate: Object3D;
        scale: Object3D
    };
    
    helper: {
        translate: Object3D;
        rotate: Object3D;
        scale: Object3D
    }
}

export class TransformControlsPlane extends Mesh {
    constructor();
}