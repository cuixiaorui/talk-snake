export interface MapData {
  [row: number]: number[];
}

export class Map {
  width: number;
  height: number;
  mapData: MapData = [];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.initMap();
  }

  initMap() {
    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(0);
      }
      this.mapData[i] = row;
    }
  }
}
