import { LatLngTuple } from "leaflet";
export const centerCalculator = (vertices: LatLngTuple[]): LatLngTuple => {
  if (vertices.length < 3) return vertices[0];

  const lat0 = vertices[0][0];
  const lng0 = vertices[0][1];

  let sumX = 0;
  let sumY = 0;

  vertices.forEach(([lat, lng]) => {
    const x = (lng - lng0) * 111320 * Math.cos((lat0 * Math.PI) / 180);
    const y = (lat - lat0) * 111320;
    sumX += x;
    sumY += y;
  });
  const cx = sumX / vertices.length;
  const cy = sumY / vertices.length;
  const centerLng = lng0 + cx / (111320 * Math.cos((lat0 * Math.PI) / 180));
  const centerLat = lat0 + cy / 111320;

  return [centerLat, centerLng];
};

export const AreaCalculator = (vertices: LatLngTuple[]): number => {
  if (vertices.length < 3) return 0;
  const lat0 = vertices[0][0];
  const meterVertices = vertices.map(([lat, lon]) => {
    const x =
      (lon - vertices[0][1]) * 111320 * Math.cos((lat0 * Math.PI) / 180);
    const y = (lat - vertices[0][0]) * 111320;
    return [x, y];
  });
  const n = meterVertices.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < n - 1; i++) {
    sum1 += meterVertices[i][0] * meterVertices[i + 1][1];
    sum2 += meterVertices[i][1] * meterVertices[i + 1][0];
  }
  sum1 += meterVertices[n - 1][0] * meterVertices[0][1];
  sum2 += meterVertices[n - 1][1] * meterVertices[0][0];

  let area = Math.abs(sum1 - sum2) / 2;
  area = Number(area.toFixed(3));
  return area;
};