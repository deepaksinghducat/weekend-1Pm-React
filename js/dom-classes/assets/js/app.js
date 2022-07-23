{/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>    */}

class ProductList {
    products = [
        {
            images: "assets/images/image1.jpg",
            title: "fsafasf",
            desc: "fsafsafdafsd"
        },
        {
            images: "assets/images/image2.jpg",
            title: "fsafasf",
            desc: "fsafsafdafsd"
        },
        {
            images: "assets/images/image1.jpg",
            title: "fsafasf",
            desc: "fsafsafdafsd"
        },
        {
            images: "assets/images/image2.jpg",
            title: "fsafasf",
            desc: "fsafsafdafsd"
        },
        {
            images: "assets/images/image1.jpg",
            title: "fsafasf",
            desc: "fsafsafdafsd"
        },
        {
            images: "assets/images/image2.jpg",
            title: "fsafasf",
            desc: "fsafsafdafsd"
        },
    ]

    render() {
        const root = document.getElementById('root');

        for (const key in this.products) {

            const prod = new Product(this.products[key], key)

            const card = prod.productDisplay(root);

            // Root 

        }
    }
}

class Product {
    constructor(product, key) {
        this.product = product
        this.key = key
    }

    // clickMe = () => {
    //     console.log("click me");
    //     console.log(this.product);
    // }

    clickMe() {
        console.log("click me");
        console.log(this.product);
    }

    productDisplay() {
        const card = document.createElement('div')
        card.className = "card"
        card.style.width = "18rem"

        const image = document.createElement('img')
        image.src = this.product.images
        image.className = "card-img-top"

        const cardBody = document.createElement('div');
        cardBody.className = "card-body"

        const h5 = document.createElement('h5')
        h5.className = this.product.title
        h5.innerHTML = "fsafsadf"

        const p = document.createElement('p')
        p.className = "card-text"
        p.innerHTML = this.product.desc

        const button = document.createElement('button')
        button.id = `button-${this.key}`
        button.className = "btn btn-primary"
        button.innerHTML = "Click Me!"

        // CardBody
        cardBody.append(h5)
        cardBody.append(p)
        cardBody.append(button)

        // card 
        card.append(image);
        card.append(cardBody)

        root.append(card);
        // return card
        const butt = document.getElementById(`button-${this.key}`);

        // butt.addEventListener('click',this.clickMe);
        butt.addEventListener('click', this.clickMe.bind(this));
    }
}

const productList = new ProductList();
productList.render();