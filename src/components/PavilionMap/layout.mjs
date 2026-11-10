// Floor plan of the Project Pavilion, mirroring the official static map.
// Grid: columns 1-5 hold stands, column 6 holds staff areas, column 7 holds the
// stage. Rows run top to bottom. Each stand has an A and a B kiosk.

export const GRID = { columns: 7, rows: 4 };

const ROWS = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12, 13],
  [14, 15, 16, 17, 18],
];

export const STANDS = ROWS.flatMap((stands, r) =>
  stands.map((stand, c) => ({ stand, row: r + 1, col: c + 1 })),
);

// Grid placement uses CSS grid-row / grid-column shorthand values.
export const LANDMARKS = [
  { id: 'job-board', label: 'Job Board', row: '1', col: '6', kind: 'staff' },
  {
    id: 'lounge',
    label: 'Project Pavilion Lounge',
    row: '2 / 4',
    col: '5',
    kind: 'space',
  },
  {
    id: 'projects-team',
    label: 'CNCF Projects Team',
    row: '2 / 4',
    col: '6',
    kind: 'staff',
  },
  {
    id: 'sticker-wall',
    label: 'Sticker Wall',
    row: '4',
    col: '6',
    kind: 'staff',
  },
  {
    id: 'stage',
    label: 'Project Pavilion Stage',
    row: '1 / 5',
    col: '7',
    kind: 'stage',
  },
];
