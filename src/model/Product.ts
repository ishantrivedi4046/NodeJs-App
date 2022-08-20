import { uniqueId } from "lodash";
import db from "../util/database";
import { DBQueries } from "../util/dbQueryUtils";

const initialState = {
  title: "",
  imageUrl: "",
  price: "",
  description: "",
};

export const getAllProducts = (cb: (products: Array<Product>) => void) => {
  db.execute(DBQueries.select.all()).then((result) => {
    if (result?.length) {
      const products: Array<Product> = ((result[0] as any) ?? []).map(
        (value: any) => new Product(value)
      );
      cb(products);
    } else {
      cb([]);
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

  static saveProduct(product: Product, cbOnProductSave: Function) {
    db.execute(DBQueries.insert.singleProduct(), [
      product.title,
      parseFloat(product.price),
      product.description,
      product.url,
    ])
      .then((result) => {
        cbOnProductSave();
      })
      .catch((e) => console.log(e));
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
