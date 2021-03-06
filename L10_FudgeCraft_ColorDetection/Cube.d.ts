declare namespace L10_FudgeCraft_DetectCombos {
    import f = FudgeCore;
    enum CUBE_TYPE {
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
    class Cube extends f.Node {
        private static mesh;
        private static materials;
        constructor(_type: CUBE_TYPE, _position: f.Vector3);
        private static createMaterials;
    }
}
