import { uniqueId } from "lodash";
import fs from "fs";
import path from "path";

const initialState = {
  title: "",
  imageUrl: "",
  price: "",
  description: "",
};

const p = path.join(__dirname, "..", "data", "products.json");
export const getAllProducts = (cb: (products: any[]) => any) => {
  fs.readFile(p, (err: any, fileContent: any) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

export class Product {
  _id = "";
  _title = "";
  _description = "";
  _price = "";
  _imageUrl = "";
  constructor(productDetails = initialState) {
    this._id = uniqueId();
    this._title = productDetails?.title;
    this._description = productDetails?.description;
    this._imageUrl = productDetails?.imageUrl;
    this._price = productDetails?.price;
  }

  get id() {
    return this._id;
  }

  get price() {
    return this._price;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get url() {
    return this._imageUrl;
  }

  static saveProduct(product: Product) {
    getAllProducts((products = []) => {
      products?.push(product?.json());
      fs.writeFile(p, JSON.stringify(products), (err) => console.log(err));
    });
  }

  json() {
    return {
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.url,
    };
  }
}
