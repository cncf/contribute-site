// Turns an event's `floor` block (src/data/pavilion/<event>.json) into the
// grid the map draws. The floor is a CSS grid: the first columns hold stands,
// one stand per cell, and each stand has an A and a B kiosk. `rows` lists the
// stand numbers in each row, left to right. Any `extraColumns` (CSS widths)
// follow the stand columns, for staff areas or a stage. `landmarks` are
// labelled areas placed with CSS grid-row / grid-column values, so they can
// span several rows or columns.
//
// Example:
//   {
//     "rows": [[1, 2, 3], [4, 5, 6]],
//     "extraColumns": ["96px"],
//     "landmarks": [
//       { "id": "stage", "label": "Stage", "row": "1 / 3", "col": "4",
//         "kind": "stage" }
//     ]
//   }
//
// Landmark `kind` is one of `staff`, `space` or `stage`; it sets the colour.

export const LANDMARK_KINDS = ['staff', 'space', 'stage'];

export function floorLayout(floor) {
  const rows = floor?.rows ?? [];
  const standColumns = Math.max(1, ...rows.map((r) => r.length));
  const extraColumns = floor?.extraColumns ?? [];
  return {
    standColumns,
    gridColumns: [
      `repeat(${standColumns}, minmax(0, 1fr))`,
      ...extraColumns,
    ].join(' '),
    stands: rows.flatMap((stands, r) =>
      stands.map((stand, c) => ({ stand, row: r + 1, col: c + 1 })),
    ),
    landmarks: floor?.landmarks ?? [],
  };
}

// Every stand number on the floor.
export function floorStands(floor) {
  return new Set((floor?.rows ?? []).flat());
}
