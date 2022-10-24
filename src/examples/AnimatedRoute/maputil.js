import maplibre from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const getMap = (ref, options) => {
  const center = options && options.center ? options.center : [12.566, 55.671];
  const zoom = options && options.zoom ? options.zoom : 11;
  return new maplibre.Map({
    container: ref,
    style:
      "https://api.maptiler.com/maps/1f79a7b5-9424-43f3-9179-cd919d206533/style.json?key=Gw5WNrAaw6tgSh1dLDg8",
    // center: [12.565948, 55.670915],
    center,
    zoom,
  });
};
export const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
