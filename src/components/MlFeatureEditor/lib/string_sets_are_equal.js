/**
 * Code from https://github.com/mapbox/mapbox-gl-draw
 * and licensed under ISC
 */
export default function(a, b) {
	if (a.length !== b.length) return false;
	return JSON.stringify(a.map(id => id).sort()) === JSON.stringify(b.map(id => id).sort());
}
