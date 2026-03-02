import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import { GeoJSON } from "ol/format.js";
import { Circle, Fill, Stroke, Style } from "ol/style.js";

export const skoleLayer = new VectorLayer({
  source: new VectorSource({
    url: "/skoler.geojson",
    format: new GeoJSON(),
  }),
  style: new Style({
    image: new Circle({
      radius: 4,
      stroke: new Stroke({ width: 2, color: "white" }),
      fill: new Fill({ color: "blue" }),
    }),
  }),
});
