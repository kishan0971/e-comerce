export const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
    "Brown",
    "Gray"
];

export const filters = [
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white",label:"white"},
            {value:"beige",label:"Beige"},
            {value:"blue",label:"Blue"},
            {value:"brown",label:"Brown"},
            {value:"green",label:"Green"},
            {value:"purple",label:"Purple"},
            {value:"yellow",label:"Yellow"},
            {value:"red",label:"Red"},
            {value:"gray",label:"Gray"},
        ],
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},
        ]
    }
];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399", label:"₹159 To ₹399"},
            {value:"399-999", label:"₹399 To ₹999"},
            {value:"999-1999", label:"₹999 To ₹1999"},
            {value:"1999-2999", label:"₹1999 To ₹2999"},
            {value:"3999-4999", label:"₹399 To ₹4999"},

        ],

    },
    {
        id:"discount",
        name:"Discount Range",
        options:[
            {value:"10",label:"10% And Above"},
            {value:"20",label:"20% And Above"},
            {value:"30",label:"30% And Above"},
            {value:"40",label:"40% And Above"},
            {value:"50",label:"50% And Above"},
            {value:"60",label:"60% And Above"},
            {value:"70",label:"70% And Above"},
            {value:"80",label:"80% And Above"},
            {value:"90",label:"90% And Above"},
        ],
    },
    {
        id:"stock",
        name:"Availablity",
        options:[
            {value:"instock", label:"In Stock"},
            {value:"out_of_stock", label:"Out Of Stock"},
        ],
    },
];


// const subCategories = [
//   { name: 'Totes', href: '#' },
//   { name: 'Backpacks', href: '#' },
//   { name: 'Travel Bags', href: '#' },
//   { name: 'Hip Bags', href: '#' },
//   { name: 'Laptop Sleeves', href: '#' },
// ]
// const filters = [
//   {
//     id: 'color',
//     name: 'Color',
//     options: [
//       { value: 'white', label: 'White', checked: false },
//       { value: 'beige', label: 'Beige', checked: false },
//       { value: 'blue', label: 'Blue', checked: true },
//       { value: 'brown', label: 'Brown', checked: false },
//       { value: 'green', label: 'Green', checked: false },
//       { value: 'purple', label: 'Purple', checked: false },
//     ],
//   },
//   {
//     id: 'category',
//     name: 'Category',
//     options: [
//       { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//       { value: 'sale', label: 'Sale', checked: false },
//       { value: 'travel', label: 'Travel', checked: true },
//       { value: 'organization', label: 'Organization', checked: false },
//       { value: 'accessories', label: 'Accessories', checked: false },
//     ],
//   },
//   {
//     id: 'size',
//     name: 'Size',
//     options: [
//       { value: '2l', label: '2L', checked: false },
//       { value: '6l', label: '6L', checked: false },
//       { value: '12l', label: '12L', checked: false },
//       { value: '18l', label: '18L', checked: false },
//       { value: '20l', label: '20L', checked: false },
//       { value: '40l', label: '40L', checked: true },
//     ],
//   },
// ]