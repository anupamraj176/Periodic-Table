const elements =[
    {atomicNumber: 1, symbol: 'H', name: 'Hydrogen', atomicMass: 1.008, group: 1, period: 1,state :"gas"},
    {atomicNumber: 2, symbol: 'He', name: 'Helium', atomicMass: 4.0026, group: 18, period: 1,state :"gas"},
    {atomicNumber: 3, symbol: 'Li', name: 'Lithium', atomicMass: 6.94, group: 1, period: 2,state :"solid"},
    {atomicNumber: 4, symbol: 'Be', name: 'Beryllium', atomicMass: 9.0122, group: 2, period: 2,state :"solid"},
    {atomicNumber: 5, symbol: 'B', name: 'Boron', atomicMass: 10.81, group: 13, period: 2,state :"solid"},
    {atomicNumber: 6, symbol: 'C', name: 'Carbon', atomicMass: 12.011, group: 14, period: 2,state :"solid"},
    {atomicNumber: 7, symbol: 'N', name: 'Nitrogen', atomicMass: 14.007, group: 15, period: 2,state :"gas"},
    {atomicNumber: 8, symbol: 'O', name: 'Oxygen', atomicMass: 15.999, group: 16, period: 2,state :"gas"},
    {atomicNumber: 9, symbol: 'F', name: 'Fluorine', atomicMass: 18.998, group: 17, period: 2,state :"gas"},
    {atomicNumber: 10, symbol: 'Ne', name: 'Neon', atomicMass: 20.180, group: 18, period: 2,state :"gas"},
    {atomicNumber: 11, symbol: 'Na', name: 'Sodium', atomicMass: 22.990, group: 1, period: 3,state :"solid"},
    {atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', atomicMass: 24.305, group: 2, period: 3,state :"solid"},
    {atomicNumber: 13, symbol: 'Al', name: 'Aluminum', atomicMass: 26.982, group: 13, period: 3,state :"solid"},
    {atomicNumber: 14, symbol: 'Si', name: 'Silicon', atomicMass: 28.085, group: 14, period: 3,state :"solid"},
    {atomicNumber: 15, symbol: 'P', name: 'Phosphorus', atomicMass: 30.974, group: 15, period: 3,state :"solid"},
    {atomicNumber: 16, symbol: 'S', name: 'Sulfur', atomicMass: 32.06, group: 16, period: 3,state :"solid"},
    {atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', atomicMass: 35.45, group: 17, period: 3,state :"gas"},
    {atomicNumber: 18, symbol: 'Ar', name: 'Argon', atomicMass: 39.948, group: 18, period: 3,state :"gas"},
    {atomicNumber: 19, symbol: 'K', name: 'Potassium', atomicMass: 39.098, group: 1, period: 4,state :"solid"},
    {atomicNumber: 20, symbol: 'Ca', name: 'Calcium', atomicMass: 40.078, group: 2, period: 4,state :"solid"},
    {atomicNumber: 21, symbol: 'Sc', name: 'Scandium', atomicMass: 44.956, group: 3, period: 4,state :"solid"},
    {atomicNumber: 22, symbol: 'Ti', name: 'Titanium', atomicMass: 47.867, group: 4, period: 4,state :"solid"},
    {atomicNumber: 23, symbol: 'V', name: 'Vanadium', atomicMass: 50.941, group: 5, period: 4,state :"solid"},
    {atomicNumber: 24, symbol: 'Cr', name: 'Chromium', atomicMass: 51.996, group: 6, period: 4,state :"solid"},
    {atomicNumber: 25, symbol: 'Mn', name: 'Manganese', atomicMass: 54.938, group: 7, period: 4,state :"solid"},
    {atomicNumber: 26, symbol: 'Fe', name: 'Iron', atomicMass: 55.845, group: 8, period: 4,state :"solid"},
    {atomicNumber: 27, symbol: 'Co', name: 'Cobalt', atomicMass: 58.933, group: 9, period: 4,state :"solid"},
    {atomicNumber: 28, symbol: 'Ni', name: 'Nickel', atomicMass: 58.693, group: 10, period: 4,state :"solid"},
    {atomicNumber: 29, symbol: 'Cu', name: 'Copper', atomicMass: 63.546, group: 11, period: 4,state :"solid"},
    {atomicNumber: 30, symbol: 'Zn', name: 'Zinc', atomicMass: 65.38, group: 12, period: 4,state :"solid"}, 
    {atomicNumber: 31, symbol: 'Ga', name: 'Gallium', atomicMass: 69.723, group: 13, period: 4,state :"solid"},
    {atomicNumber: 32, symbol: 'Ge', name: 'Germanium', atomicMass: 72.63, group: 14, period: 4,state :"solid"},   
    {atomicNumber: 33, symbol: 'As', name: 'Arsenic', atomicMass: 74.922, group: 15, period: 4,state :"solid"},
    {atomicNumber: 34, symbol: 'Se', name: 'Selenium', atomicMass: 78.971, group: 16, period: 4,state :"solid"},
    {atomicNumber: 35, symbol: 'Br', name: 'Bromine', atomicMass: 79.904, group: 17, period: 4,state :"liquid"},
    {atomicNumber: 36, symbol: 'Kr', name: 'Krypton', atomicMass: 83.798, group: 18, period: 4,state :"gas"},
    {atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', atomicMass: 85.467, group: 1, period: 5,state :"solid"},
    {atomicNumber: 38, symbol: 'Sr', name: 'Strontium', atomicMass: 87.62, group: 2, period: 5,state :"solid"},
    {atomicNumber: 39, symbol: 'Y', name: 'Yttrium', atomicMass: 88.906, group: 3, period: 5,state :"solid"},
    {atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', atomicMass: 91.224, group: 4, period: 5,state :"solid"},
    {atomicNumber: 41, symbol: 'Nb', name: 'Niobium', atomicMass: 92.906, group: 5, period: 5,state :"solid"},
    {atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', atomicMass: 95.95, group: 6, period: 5,state :"solid"},
    {atomicNumber: 43, symbol: 'Tc', name: 'Technetium', atomicMass: 98, group: 7, period: 5,state :"solid"},
    {atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', atomicMass: 101.07, group: 8, period: 5,state :"solid"},
    {atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', atomicMass: 102.905, group: 9, period: 5,state :"solid"},
    {atomicNumber: 46, symbol: 'Pd', name: 'Palladium', atomicMass: 106.42, group: 10, period: 5,state :"solid"},
    {atomicNumber: 47, symbol: 'Ag', name: 'Silver', atomicMass: 107.868, group: 11, period: 5,state :"solid"},
    {atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', atomicMass: 112.414, group: 12, period: 5,state :"solid"},
    {atomicNumber: 49, symbol: 'In', name: 'Indium', atomicMass: 114.818, group: 13, period: 5,state :"solid"},
    {atomicNumber: 50, symbol: 'Sn', name: 'Tin', atomicMass: 118.710, group: 14, period: 5,state :"solid"},
    {atomicNumber: 51, symbol: 'Sb', name: 'Antimony', atomicMass: 121.760, group: 15, period: 5,state :"solid"},
    {atomicNumber: 52, symbol: 'Te', name: 'Tellurium', atomicMass: 127.60, group: 16, period: 5,state :"solid"},
    {atomicNumber: 53, symbol: 'I', name: 'Iodine', atomicMass: 126.904, group: 17, period: 5,state :"solid"},
    {atomicNumber: 54, symbol: 'Xe', name: 'Xenon', atomicMass: 131.293, group: 18, period: 5,state :"gas"},
    {atomicNumber: 55, symbol: 'Cs', name: 'Cesium', atomicMass: 132.905, group: 1, period: 6,state :"solid"},
    {atomicNumber: 56, symbol: 'Ba', name: 'Barium', atomicMass: 137.327, group: 2, period: 6,state :"solid"},
    {atomicNumber: 57, symbol: 'La', name: 'Lanthanum', atomicMass: 138.904, group: 3, period: 6,state :"solid"},
    {atomicNumber: 58, symbol: 'Ce', name: 'Cerium', atomicMass: 140.116, group: 3, period: 6,state :"solid"},
    {atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', atomicMass: 140.907, group: 3, period: 6,state :"solid"},
    {atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', atomicMass: 144.242, group: 3, period: 6,state :"solid"},
    {atomicNumber: 61, symbol: 'Pm', name: 'Promethium', atomicMass: 145, group: 3, period: 6,state :"solid"},
    {atomicNumber: 62, symbol: 'Sm', name: 'Samarium', atomicMass: 150.36, group: 3, period: 6,state :"solid"},
    {atomicNumber: 63, symbol: 'Eu', name: 'Europium', atomicMass: 151.964, group: 3, period: 6,state :"solid"},
    {atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', atomicMass: 157.25, group: 3, period: 6,state :"solid"},
    {atomicNumber: 65, symbol: 'Tb', name: 'Terbium', atomicMass: 158.925, group: 3, period: 6,state :"solid"},
    {atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', atomicMass: 162.500, group: 3, period: 6,state :"solid"},
    {atomicNumber: 67, symbol: 'Ho', name: 'Holmium', atomicMass: 164.930, group: 3, period: 6,state :"solid"},
    {atomicNumber: 68, symbol: 'Er', name: 'Erbium', atomicMass: 167.259, group: 3, period: 6,state :"solid"},
    {atomicNumber: 69, symbol: 'Tm', name: 'Thulium', atomicMass: 168.934, group: 3, period: 6,state :"solid"},
    {atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', atomicMass: 173.04, group: 3, period: 6,state :"solid"},
    {atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', atomicMass: 174.966, group: 3, period: 6,state :"solid"},
    {atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', atomicMass: 178.49, group: 4, period: 6,state :"solid"},
    {atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', atomicMass: 180.947, group: 5, period: 6,state :"solid"},
    {atomicNumber: 74, symbol: 'W', name: 'Tungsten', atomicMass: 183.84, group: 6, period: 6,state :"solid"},
    {atomicNumber: 75, symbol: 'Re', name: 'Rhenium', atomicMass: 186.207, group: 7, period: 6,state :"solid"},
    {atomicNumber: 76, symbol: 'Os', name: 'Osmium', atomicMass: 190.23, group: 8, period: 6,state :"solid"},
    {atomicNumber: 77, symbol: 'Ir', name: 'Iridium', atomicMass: 192.217, group: 9, period: 6,state :"solid"},
    {atomicNumber: 78, symbol: 'Pt', name: 'Platinum', atomicMass: 195.084, group: 10, period: 6,state :"solid"},
    {atomicNumber: 79, symbol: 'Au', name: 'Gold', atomicMass: 196.966, group: 11, period: 6,state :"solid"},
    {atomicNumber: 80, symbol: 'Hg', name: 'Mercury', atomicMass: 200.592, group: 12, period: 6,state :"liquid"},
    {atomicNumber: 81, symbol: 'Tl', name: 'Thallium', atomicMass: 204.38, group: 13, period: 6,state :"solid"},
    {atomicNumber: 82, symbol: 'Pb', name: 'Lead', atomicMass: 207.2, group: 14, period: 6,state :"solid"},
    {atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', atomicMass: 208.980, group: 15, period: 6,state :"solid"},
    {atomicNumber: 84, symbol: 'Po', name: 'Polonium', atomicMass: 209, group: 16, period: 6,state :"solid"},
    {atomicNumber: 85, symbol: 'At', name: 'Astatine', atomicMass: 210, group: 17, period: 6,state :"solid"},
    {atomicNumber: 86, symbol: 'Rn', name: 'Radon', atomicMass: 222, group: 18, period: 6,state :"gas"},
    {atomicNumber: 87, symbol: 'Fr', name: 'Francium', atomicMass: 223, group: 1, period: 7,state :"solid"},
    {atomicNumber: 88, symbol: 'Ra', name: 'Radium', atomicMass: 226, group: 2, period: 7,state :"solid"},
    {atomicNumber: 89, symbol: 'Ac', name: 'Actinium', atomicMass: 227, group: 3, period: 7,state :"solid"},
    {atomicNumber: 90, symbol: 'Th', name: 'Thorium', atomicMass: 232.038, group: 3, period: 7,state :"solid"},
    {atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', atomicMass: 231.035, group: 3, period: 7,state :"solid"},
    {atomicNumber: 92, symbol: 'U', name: 'Uranium', atomicMass: 238.028, group: 3, period: 7,state :"solid"},
    {atomicNumber: 93, symbol: 'Np', name: 'Neptunium', atomicMass: 237, group: 3, period: 7,state :"solid"},
    {atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', atomicMass: 244, group: 3, period: 7,state :"solid"},
    {atomicNumber: 95, symbol: 'Am', name: 'Americium', atomicMass: 243, group: 3, period: 7,state :"solid"},
    {atomicNumber: 96, symbol: 'Cm', name: 'Curium', atomicMass: 247, group: 3, period: 7,state :"solid"},
    {atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', atomicMass: 247, group: 3, period: 7,state :"solid"},
    {atomicNumber: 98, symbol: 'Cf', name: 'Californium', atomicMass: 251, group: 3, period: 7,state :"solid"},
    {atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', atomicMass: 252, group: 3, period: 7,state :"solid"},
    {atomicNumber: 100, symbol: 'Fm', name: 'Fermium', atomicMass: 257, group: 3, period: 7,state :"solid"},
    {atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', atomicMass: 258, group: 3, period: 7,state :"solid"},
    {atomicNumber: 102, symbol: 'No', name: 'Nobelium', atomicMass: 259, group: 3, period: 7,state :"solid"},
    {atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', atomicMass: 262, group: 3, period: 7,state :"solid"},
    {atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', atomicMass: 267, group: 4, period: 7,state :"solid"},
    {atomicNumber: 105, symbol: 'Db', name: 'Dubnium', atomicMass: 268, group: 5, period: 7,state :"solid"},
    {atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', atomicMass: 271, group: 6, period: 7,state :"solid"},
    {atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', atomicMass: 270, group: 7, period: 7,state :"solid"},
    {atomicNumber: 108, symbol: 'Hs', name: 'Hassium', atomicMass: 277, group: 8, period: 7,state :"solid"},
    {atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', atomicMass: 276, group: 9, period: 7,state :"solid"},
    {atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', atomicMass: 281, group: 10, period: 7,state :"solid"},
    {atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', atomicMass: 282, group: 11, period: 7,state :"solid"},
    {atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', atomicMass: 285, group: 12, period: 7,state :"solid"},
    {atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', atomicMass: 286, group: 13, period: 7,state :"solid"},
    {atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', atomicMass: 289, group: 14, period: 7,state :"solid"},
    {atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', atomicMass: 288, group: 15, period: 7,state :"solid"},
    {atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', atomicMass: 293, group: 16, period: 7,state :"solid"},
    {atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', atomicMass: 294, group: 17, period: 7,state :"solid"},
    {atomicNumber: 118, symbol: 'Og', name: 'Oganesson', atomicMass: 294, group: 18, period: 7,state :"gas"},
    {atomicNumber: 119, symbol: 'Uue', name: 'Ununennium', atomicMass: 315, group: 1, period: 8,state :"solid"},
]