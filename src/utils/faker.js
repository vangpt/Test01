const faker = require("faker");

const mockApi = () => {
    return {
        products: {
            record: {
                id: faker.random.uuid(),
                name: faker.random.words(),
                item: Math.floor(Math.random() * 20),
                image: "gray-mid.png"
            },
            number: 6
        },
        listProducts: {
            record: {
                id: faker.random.uuid(),
                nameProduct: faker.random.words(),
                image: "product2.png",
                minPrice: Math.floor(Math.random() * 50).toFixed(2),
                maxPrice: Math.floor(Math.random() * 100 + 50).toFixed(2),
                decription: faker.random.words(),
                isSale: faker.random.boolean(),
                isNew: faker.random.boolean(),
                rating: Math.floor((Math.random() * (5 + 0.5)) / 0.5) * 0.5,
                isHeart: faker.random.boolean(),
                quantity: Math.floor(Math.random() * 20)
            },
            number: 50
        }
    };
};
const db = {
    products: [],
    listProducts: []
};
const getFakeData = (db, mockApi) => {
    Object.keys(db).forEach(api => {
        db[api] = [
            ...db[api],
            ...Array(mockApi()[api].number)
            .fill(null)
            .map(item => mockApi()[api].record)
        ];
    });
};

getFakeData(db, mockApi);
console.log(JSON.stringify(db));