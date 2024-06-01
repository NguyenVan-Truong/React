import Article from "./Article";
import ProducArticle from "./ProducArticle";
import ProductArticle from "./ProductActicle";
import ProductItem from "./ProductItem";
import Tittle from "./Tittle";
const productList = [
    {
        id: 1,
        img:  'https://cdn-i.vtcnews.vn/resize/th/upload/2024/01/23/ss-20571105.jpg'  , 
}];

const contacsList =[
    {
        id: 1,
        icon: 'https://cdn-i.vtcnews.vn/resize/th/upload/2024/01/23/ss-20571105.jpg',
        title: 'Game Design',
        description: 'Character Design, Prop & Object',
    },
    {
        id: 2,
        icon: 'bx bx-paint',
        title: 'Photography',
        description: 'Portrai,Product Photography',
    },
    {
        id: 3,
        icon: 'bx bxs-book-open',
        title: 'Advertisting',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
]

const contacsList1 =[
    {
        id: 1,
        icon: "<i class='bx bx-user-pin'></i>",
        title: 'Game Design',
        description: 'Character Design, Prop & Object',
    },
    {
        id: 2,
        icon: 'bx bx-paint',
        title: 'Photography',
        description: 'Portrai,Product Photography',
    },
    {
        id: 3,
        icon: 'bx bxs-book-open',
        title: 'Advertisting',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
]

const Main = () => {
    return <div>
    <div class="home">
    <Article/>
    <div class="img1">
           
                {productList.map((product, index) => (
                    <div key={index} >
                        <ProductItem product={product} />
                    </div>
                ))}
            
        </div>
    </div>
    <Tittle/>
    <div class="products">
                {contacsList.map((contacs, index) => (
                    <div key={index} class="products1" >
                        <ProducArticle contacs={contacs}/>
                    </div>
                ))}     
    </div>
    <div class="products">
                {contacsList1.map((contacs1, index) => (
                    <div key={index} class="products1" >
                        <ProductArticle contacs1={contacs1}/>
                    </div>
                ))}     
    </div>
</div>;
};

export default Main;
