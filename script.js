const elements = [
    { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, group: 1, period: 1, state: 'Gas', type: 'Nonmetal' },
    { atomicNumber: 2, symbol: 'He', name: 'Helium', mass: 4.002, group: 18, period: 1, state: 'Gas', type: 'Noble Gas' },
    { atomicNumber: 3, symbol: 'Li', name: 'Lithium', mass: 6.941, group: 1, period: 2, state: 'Solid', type: 'Alkali Metal' },
    { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, group: 2, period: 2, state: 'Solid', type: 'Alkaline Earth Metal' },
    { atomicNumber: 5, symbol: 'B', name: 'Boron', mass: 10.811, group: 13, period: 2, state: 'Solid', type: 'Metalloid' },
    { atomicNumber: 6, symbol: 'C', name: 'Carbon', mass: 12.011, group: 14, period: 2, state: 'Solid', type: 'Nonmetal' },
    { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', mass: 14.007, group: 15, period: 2, state: 'Gas', type: 'Nonmetal' },
    { atomicNumber: 8, symbol: 'O', name: 'Oxygen', mass: 15.999, group: 16, period: 2, state: 'Gas', type: 'Nonmetal' },
    { atomicNumber: 9, symbol: 'F', name: 'Fluorine', mass: 18.998, group: 17, period: 2, state: 'Gas', type: 'Halogen' },
    { atomicNumber: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, group: 18, period: 2, state: 'Gas', type: 'Noble Gas' },
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium', mass: 22.990, group: 1, period: 3, state: 'Solid', type: 'Alkali Metal' },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.305, group: 2, period: 3, state: 'Solid', type: 'Alkaline Earth Metal' },
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', mass: 26.982, group: 13, period: 3, state: 'Solid', type: 'Metal' },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon', mass: 28.085, group: 14, period: 3, state: 'Solid', type: 'Metalloid' },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', mass: 30.974, group: 15, period: 3, state: 'Solid', type: 'Nonmetal' },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur', mass: 32.06, group: 16, period: 3, state: 'Solid', type: 'Nonmetal' },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.45, group: 17, period: 3, state: 'Gas', type: 'Halogen' },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon', mass: 39.948, group: 18, period: 3, state: 'Gas', type: 'Noble Gas' },
    { atomicNumber: 19, symbol: 'K', name: 'Potassium', mass: 39.098, group: 1, period: 4, state: 'Solid', type: 'Alkali Metal' },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', mass: 40.078, group: 2, period: 4, state: 'Solid', type: 'Alkaline Earth Metal' },
    { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', mass: 44.956, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', mass: 47.867, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 23, symbol: 'V', name: 'Vanadium', mass: 50.942, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', mass: 51.996, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', mass: 54.938, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron', mass: 55.845, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', mass: 58.933, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', mass: 58.693, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper', mass: 63.546, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', mass: 65.38, group: '3-12', period: 4, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', mass: 69.723, group: 13, period: 4, state: 'Solid', type: 'Metal' },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', mass: 72.630, group: 14, period: 4, state: 'Solid', type: 'Metalloid' },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic', mass: 74.922, group: 15, period: 4, state: 'Solid', type: 'Metalloid' },
    { atomicNumber: 34, symbol: 'Se', name: 'Selenium', mass: 78.971, group: 16, period: 4, state: 'Solid', type: 'Nonmetal' },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine', mass: 79.904, group: 17, period: 4, state: 'Liquid', type: 'Halogen' },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', mass: 83.798, group: 18, period: 4, state: 'Gas', type: 'Noble Gas' },
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.468, group: 1, period: 5, state: 'Solid', type: 'Alkali Metal' },
    { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', mass: 87.62, group: 2, period: 5, state: 'Solid', type: 'Alkaline Earth Metal' },
    { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', mass: 88.906, group: '3-12', period: 5, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', mass: 91.224, group: '3-12', period: 5, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', mass: 92.906, group: '3-12', period: 5, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', mass: 95.95, group: '3-12', period: 5, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', mass: 101.07, group: '3-12', period: 5, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', mass: 102.906, group: '3-12', period: 5, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', mass: 106.42, group: '3-12', period: 5, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver', mass: 107.868, group: '3-12', period: 5, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', mass: 112.414, group: '3-12', period: 5, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 49, symbol: 'In', name: 'Indium', mass: 114.818, group: 13, period: 5, state: 'Solid', type: 'Metal' },
    { atomicNumber: 50, symbol: 'Sn', name: 'Tin', mass: 118.710, group: 14, period: 5, state: 'Solid', type: 'Metal' },
    { atomicNumber: 51, symbol: 'Sb', name: 'Antimony', mass: 121.760, group: 15, period: 5, state: 'Solid', type: 'Metalloid' },
    { atomicNumber: 52, symbol: 'Te', name: 'Tellurium', mass: 127.60, group: 16, period: 5, state: 'Solid', type: 'Metalloid' },
    { atomicNumber: 53, symbol: 'I', name: 'Iodine', mass: 126.904, group: 17, period: 5, state: 'Solid', type: 'Halogen' },
    { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', mass: 131.293, group: 18, period: 5, state: 'Gas', type: 'Noble Gas' },
    { atomicNumber: 55, symbol: 'Cs', name: 'Cesium', mass: 132.905, group: 1, period: 6, state: 'Solid', type: 'Alkali Metal' },
    { atomicNumber: 56, symbol: 'Ba', name: 'Barium', mass: 137.327, group: 2, period: 6, state: 'Solid', type: 'Alkaline Earth Metal' },
    { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', mass: 138.905, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', mass: 140.116, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', mass: 140.908, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', mass: 144.242, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', mass: 145, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', mass: 150.36, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 63, symbol: 'Eu', name: 'Europium', mass: 151.964, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', mass: 157.25, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', mass: 158.925, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', mass: 162.500, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', mass: 164.930, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 68, symbol: 'Er', name: 'Erbium', mass: 167.259, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', mass: 168.934, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', mass: 173.045, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', mass: 174.967, group: 'Lanthanide', period: 6, state: 'Solid', type: 'Lanthanide' },
    { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', mass: 178.49, group: '3-12', period: 6, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', mass: 180.948, group: '3-12', period: 6, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 74, symbol: 'W', name: 'Tungsten', mass: 183.84, group: '3-12', period: 6, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 75, symbol: 'Re', name: 'Rhenium', mass: 186.207, group: '3-12', period: 6, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 76, symbol: 'Os', name: 'Osmium', mass: 190.23, group: '3-12', period: 6, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 77, symbol: 'Ir', name: 'Iridium', mass: 192.217, group: '3-12', period: 6, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', mass: 195.084, group: '3-12', period: 6, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 79, symbol: 'Au', name: 'Gold', mass: 196.967, group: '3-12', period: 6, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', mass: 200.592, group: '3-12', period: 6, state: 'Liquid', type: 'Transition Metal' },
    { atomicNumber: 81, symbol: 'Tl', name: 'Thallium', mass: 204.38, group: 13, period: 6, state: 'Solid', type: 'Metal' },
    { atomicNumber: 82, symbol: 'Pb', name: 'Lead', mass: 207.2, group: 14, period: 6, state: 'Solid', type: 'Metal' },
    { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', mass: 208.980, group: 15, period: 6, state: 'Solid', type: 'Metal' },
    { atomicNumber: 84, symbol: 'Po', name: 'Polonium', mass: 209, group: 16, period: 6, state: 'Solid', type: 'Metalloid' },
    { atomicNumber: 85, symbol: 'At', name: 'Astatine', mass: 210, group: 17, period: 6, state: 'Solid', type: 'Halogen' },
    { atomicNumber: 86, symbol: 'Rn', name: 'Radon', mass: 222, group: 18, period: 6, state: 'Gas', type: 'Noble Gas' },
    { atomicNumber: 87, symbol: 'Fr', name: 'Francium', mass: 223, group: 1, period: 7, state: 'Solid', type: 'Alkali Metal' },
    { atomicNumber: 88, symbol: 'Ra', name: 'Radium', mass: 226, group: 2, period: 7, state: 'Solid', type: 'Alkaline Earth Metal' },
    { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', mass: 227, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 90, symbol: 'Th', name: 'Thorium', mass: 232.038, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', mass: 231.036, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 92, symbol: 'U', name: 'Uranium', mass: 238.029, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', mass: 237, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', mass: 244, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 95, symbol: 'Am', name: 'Americium', mass: 243, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 96, symbol: 'Cm', name: 'Curium', mass: 247, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', mass: 247, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 98, symbol: 'Cf', name: 'Californium', mass: 251, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', mass: 252, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', mass: 257, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', mass: 258, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 102, symbol: 'No', name: 'Nobelium', mass: 259, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', mass: 262, group: 'Actinide', period: 7, state: 'Solid', type: 'Actinide' },
    { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 267, group: '3-12', period: 7, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 105, symbol: 'Db', name: 'Dubnium', mass: 268, group: '3-12', period: 7, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', mass: 269, group: '3-12', period: 7, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', mass: 270, group: '3-12', period: 7, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 108, symbol: 'Hs', name: 'Hassium', mass: 269, group: '3-12', period: 7, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', mass: 278, group: '3-12', period: 7, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 281, group: '3-12', period: 7, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', mass: 280, group: '3-12', period: 7, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', mass: 285, group: '3-12', period: 7, state: 'Solid', type: 'Transition Metal' },
    { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', mass: 286, group: 13, period: 7, state: 'Solid', type: 'Metal' },
    { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', mass: 289, group: 14, period: 7, state: 'Solid', type: 'Metal' },
    { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', mass: 288, group: 15, period: 7, state: 'Solid', type: 'Metal' },
    { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', mass: 293, group: 16, period: 7, state: 'Solid', type: 'Metal' },
    { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', mass: 294, group: 17, period: 7, state: 'Solid', type: 'Halogen' },
    { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', mass: 294, group: 18, period: 7, state: 'Gas', type: 'Noble Gas' }
];

const typeColors = {
    'Nonmetal': 'bg-green-200',
    'Noble Gas': 'bg-purple-200',
    'Alkali Metal': 'bg-red-200',
    'Alkaline Earth Metal': 'bg-orange-200',
    'Metalloid': 'bg-teal-200',
    'Halogen': 'bg-blue-200',
    'Metal': 'bg-gray-300',
    'Transition Metal': 'bg-yellow-200',
    'Lanthanide': 'bg-pink-200',
    'Actinide': 'bg-indigo-200'
};

const positions = [
    [1,1], [18,1],
    [1,2], [2,2], [13,2], [14,2], [15,2], [16,2], [17,2], [18,2],
    [1,3], [2,3], [13,3], [14,3], [15,3], [16,3], [17,3], [18,3],
    [1,4], [2,4], [3,4], [4,4], [5,4], [6,4], [7,4], [8,4], [9,4], [10,4], [11,4], [12,4], [13,4], [14,4], [15,4], [16,4], [17,4], [18,4],
    [1,5], [2,5], [3,5], [4,5], [5,5], [6,5], [7,5], [8,5], [9,5], [10,5], [11,5], [12,5], [13,5], [14,5], [15,5], [16,5], [17,5], [18,5],
    [1,6], [2,6], [3,6], [4,6], [5,6], [6,6], [7,6], [8,6], [9,6], [10,6], [11,6], [12,6], [13,6], [14,6], [15,6], [16,6], [17,6], [18,6],
    [1,7], [2,7], [3,7], [4,7], [5,7], [6,7], [7,7], [8,7], [9,7], [10,7], [11,7], [12,7], [13,7], [14,7], [15,7], [16,7], [17,7], [18,7],
    [3,9], [4,9], [5,9], [6,9], [7,9], [8,9], [9,9], [10,9], [11,9], [12,9], [13,9], [14,9], [15,9], [16,9], [17,9],
    [3,10], [4,10], [5,10], [6,10], [7,10], [8,10], [9,10], [10,10], [11,10], [12,10], [13,10], [14,10], [15,10], [16,10], [17,10]
];

function renderTable(filteredElements) {
    const table = document.getElementById('periodic-table');
    table.innerHTML = '';
    const grid = Array(10).fill().map(() => Array(18).fill(null));
    
    filteredElements.forEach((el, index) => {
        const [col, row] = positions[index];
        grid[row - 1][col - 1] = el;
    });

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 18; col++) {
            const cell = document.createElement('div');
            cell.style.gridColumn = col + 1;
            cell.style.gridRow = row + 1;
            if (grid[row][col]) {
                const el = grid[row][col];
                cell.className = `element ${typeColors[el.type]} cursor-pointer`;
                cell.innerHTML = `
                    <div class="text-xs">${el.atomicNumber}</div>
                    <div class="text-lg font-bold">${el.symbol}</div>
                    <div class="text-xs">${el.name}</div>
                    <div class="tooltip">
                        <strong>${el.name}</strong><br>
                        Atomic Number: ${el.atomicNumber}<br>
                        Atomic Mass: ${el.mass}<br>
                        Group: ${el.group}<br>
                        Period: ${el.period}<br>
                        State: ${el.state}<br>
                        Type: ${el.type}
                    </div>
                `;
            }
            table.appendChild(cell);
        }
    }
}

function filterElements() {
    const atomicNumber = document.getElementById('atomic-number')?.value;
    const group = document.getElementById('group')?.value;
    const state = document.getElementById('state')?.value;

    let filtered = elements;
    if (atomicNumber) {
        filtered = filtered.filter(el => el.atomicNumber == atomicNumber);
    }
    if (group) {
        if (group === '3-12') {
            filtered = filtered.filter(el => el.group === '3-12');
        } else {
            filtered = filtered.filter(el => el.group == group);
        }
    }
    if (state) {
        filtered = filtered.filter(el => el.state === state);
    }
    renderTable(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('atomic-number')?.addEventListener('input', filterElements);
    document.getElementById('group')?.addEventListener('change', filterElements);
    document.getElementById('state')?.addEventListener('change', filterElements);
    renderTable(elements);
});