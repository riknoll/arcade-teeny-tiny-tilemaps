//% color=#4a5e80 icon="\uf001" block="Tiny Maps"
namespace teenyTiny {
    /**
     * Creates a tilemap with 4x4 tiles.
     */
    //% blockId=tileUtil_createfourbyfourTilemap
    //% block="4x4 tilemap $tilemap"
    //% tilemap.fieldEditor="tilemap"
    //% tilemap.fieldOptions.decompileArgumentAsString="true"
    //% tilemap.fieldOptions.filter="tile"
    //% tilemap.fieldOptions.taggedTemplate="tilemap"
    //% tilemap.fieldOptions.tileWidth=4
    //% tilemap.fieldOptions.initWidth=40
    //% tilemap.fieldOptions.initHeight=30
    //% group="Tilemaps" weight=49 blockGap=8
    //% duplicateShadowOnDrag
    export function createMap(tilemap: tiles.TileMapData): tiles.TileMapData {
        return tilemap
    }
}