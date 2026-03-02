import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import { GeoJSON } from "ol/format.js";

export const skoleLayer = new VectorLayer({
  source: new VectorSource({
    url: "/skoler.geojson",
    format: new GeoJSON(),
  }),
});
