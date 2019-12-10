namespace L09_FudgeCraft_Camera {
    import f = FudgeCore;
    
    export enum CUBE_TYPE {
        GREEN = "Green",
        RED = "Red",
        BLUE = "Blue",
        YELLOW = "Yellow",
        MAGENTA = "Magenta",
        CYAN = "Cyan",
        ORANGE = "Orange",
        GRAY = "Gray",
        TRANSPARENT = "Transparent"
    }
    type Materials = Map<CUBE_TYPE, f.Material>;

    export class Cube extends f.Node {
        private static mesh: f.MeshCube = new f.MeshCube();
        private static materials: Materials = Cube.createMaterials();

        constructor(_type: CUBE_TYPE, _position: f.Vector3) {
            super("Cube." + _type);

            let cmpMesh: f.ComponentMesh = new f.ComponentMesh(Cube.mesh);
            this.addComponent(cmpMesh);

            let cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(Cube.materials.get(_type));
            this.addComponent(cmpMaterial);

            let cmpTransform: f.ComponentTransform = new f.ComponentTransform(f.Matrix4x4.TRANSLATION(_position));
            cmpTransform.local.scale(f.Vector3.ONE(0.9));
            this.addComponent(cmpTransform);
        }

        private static createMaterials(): Materials {
            return new Map([
                [CUBE_TYPE.RED, new f.Material(CUBE_TYPE.RED, f.ShaderFlat, new f.CoatColored(f.Color.RED))],
                [CUBE_TYPE.GREEN, new f.Material(CUBE_TYPE.GREEN, f.ShaderFlat, new f.CoatColored(f.Color.GREEN))],
                [CUBE_TYPE.BLUE, new f.Material(CUBE_TYPE.BLUE, f.ShaderFlat, new f.CoatColored(f.Color.BLUE))],
                [CUBE_TYPE.MAGENTA, new f.Material(CUBE_TYPE.MAGENTA, f.ShaderFlat, new f.CoatColored(f.Color.MAGENTA))],
                [CUBE_TYPE.YELLOW, new f.Material(CUBE_TYPE.YELLOW, f.ShaderFlat, new f.CoatColored(f.Color.YELLOW))],
                [CUBE_TYPE.CYAN, new f.Material(CUBE_TYPE.CYAN, f.ShaderFlat, new f.CoatColored(f.Color.CYAN))],
                [CUBE_TYPE.ORANGE, new f.Material(CUBE_TYPE.ORANGE, f.ShaderFlat, new f.CoatColored(new f.Color(1, 0.65, 0)))],
                [CUBE_TYPE.GRAY, new f.Material(CUBE_TYPE.GRAY, f.ShaderFlat, new f.CoatColored(new f.Color(0.5, 0.5, 0.5)))],
                [CUBE_TYPE.TRANSPARENT, new f.Material(CUBE_TYPE.TRANSPARENT, f.ShaderFlat, new f.CoatColored(new f.Color(0, 0, 0, 0)))]
            ]);
        }
    }
}