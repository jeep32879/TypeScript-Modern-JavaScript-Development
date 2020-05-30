// Namespaces

namespace Geometry {
    interface VectorInterface {
        /* ... */
    }
    export interface Vector2dInterface {
        /* ... */
    }
    export interface Vector3dInterface {
        /* ... */
    }
    export class Vector2d implements VectorInterface,
        Vector2dInterface {
        /* ... */
    }
    export class Vector3d implements VectorInterface,
        Vector3dInterface {
        /* ... */
    }
}
var vector2dInstance: Geometry.Vector2dInterface = new
    Geometry.Vector2d();
var vector3dInstance: Geometry.Vector3dInterface = new
    Geometry.Vector3d();