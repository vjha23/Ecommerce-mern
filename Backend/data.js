import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name: 'Vijay',
            email: 'vjha23@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,

        },
        {
            name: 'John',
            email: 'john@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {

            name: 'Nike slim shirt',
            category: 'Shirts',
            image: 'https://m.media-amazon.com/images/I/41vyJUPawhL._AC_UL480_FMwebp_QL65_.jpg',
            price: 450,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product',
            countInStock: 20,
        },
        {

            name: 'Allen Solly',
            category: 'Shirts',
            image: 'https://m.media-amazon.com/images/I/71e7nNzvfvL._AC_UL480_FMwebp_QL65_.jpg',
            price: 869,
            brand: 'Allen Solly',
            rating: 4.6,
            numReviews: 10,
            description: 'Mens Solid Slim Fit Casual Shirt',
            countInStock: 0
        },
        {

            name: 'GRITSTONES',
            category: 'Shirts',
            image: 'https://m.media-amazon.com/images/I/61YQ-jKQmOL._AC_UL480_FMwebp_QL65_.jpg',
            price: 469,
            brand: 'GRITSTONES',
            rating: 4.5,
            numReviews: 40,
            description: 'Mens Regular Fit Shirt',
            countInStock: 3,
        },
        {

            name: 'U-TURN',
            category: 'Shirts',
            image: 'https://m.media-amazon.com/images/I/718rD4AqFJL._AC_UL480_FMwebp_QL65_.jpg',
            price: 428,
            brand: 'U-TURN',
            rating: 3.3,
            numReviews: 16,
            description: "Men's Slim Fit Shirt",
            countInStock: 4
        },
        {

            name: 'Amazon Brand',
            category: 'Shirts',
            image: 'https://m.media-amazon.com/images/I/81kJzDOwjNL._AC_UL480_FMwebp_QL65_.jpg',
            price: 649,
            brand: 'Amazon Brand',
            rating: 4.9,
            numReviews: 70,
            description: "Men's Slim Fit Shirt",
            countInStock: 0
        },

    ]
}
export default data;