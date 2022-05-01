const fs = require('fs');

class Container {
    constructor(name){
        this.name = name;
        this.products = [];
    };

    async save(object){
        try {
            const id = this.products.length + 1;
            object.id = id;
            this.products.push(object);
            await fs.promises.writeFile(`${this.name}.json`, JSON.stringify(this.products, null, '\t'));
            return id;
        } 
        catch {
            console.log('No se pudo escribir el archivo');
        };
    };

    async getById(id){
        let found = await this.getAll();
        return found?.find(p => p.id === id) ?? null;
    };

    async getAll(){
        try{
            let data = await fs.promises.readFile(`${this.name}.json`);
            data = JSON.parse(data);
            return data;
        }
        catch(err) {
            throw new Error(err);
            //console.log('Hubo un error al obtener todos los productos.')
        }
        
    };

    async deleteById(id){
        try {
            const data = await this.getAll();
            if(data.length > 0){
                this.products = data.filter(product => product.id !== id);
                await fs.promises.writeFile(`${this.name}.json`, JSON.stringify(this.products, null, '\t'));
                return 'Producto eliminado correctamente';
            } else {
                return 'No hay productos para borrar;'
            };   
        }
        catch(err) {
            throw new Error(err);
            //console.log('No se pudo borrar el producto.');
        };
    };

    async deleteAll() {
        try {
            this.products = [];
            await fs.promises.unlink(`${this.name}.json`);
            return 'Se borraron todos los productos correctamente.';
        }
        catch(err) {
            throw new Error(err);
            //console.log('No se pudieron borrar los productos.');
        } ;
    };

};

const Mac = {
    title: 'Macbook Air M1', price: 140000, thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_679546-MLA47180498257_082021-O.webp'
}

const iPhone = {
    title: 'iPhone 13', price: 200000, thumbnail: 'https://m.media-amazon.com/images/I/61l9ppRIiqL.jpg'
}

const Apple = new Container('Apple');

//Apple.save(Mac)
//.then(id => console.log(id)).catch(err => console.log(err));

//Apple.save(iPhone)
//.then(id => console.log(id)).catch(err => console.log(err));

//Apple.getById(1).then(res => console.log(res));

//Apple.getById(10).then(res => console.log(res));

//Apple.getAll().then(res => console.log(res)).catch(err => console.log(err))

//Apple.deleteById(2).then(res => console.log(res));

//Apple.deleteAll().then(res => console.log(res)).catch(err => console.log(err));


