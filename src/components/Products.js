import Product from './Product';
import Title from './ComplexTitle';

const productItems = [
    {
        id: 1,
        name: 'chair',
        price: 30,
    },
    {
        id: 2,
        name: 'bed',
        price: 150,
    },
    {
        id: 3,
        name: 'couch',
        price: 550,
    },
];

const Products = () => {
    return (
        <section>
            <Title title='all products' />
            {productItems.map((product) => (
                <Product {...product} key={product.id} />
            ))}
        </section>
    );
};

export default Products;
