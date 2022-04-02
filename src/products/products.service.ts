import { Injectable, Post } from "@nestjs/common";
import { Product } from './interfaces/product.interfaces';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";


@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel : Model<Product>) {}

    async findAll(): Promise<Product[]> {
        return await this.productModel.find();
    }

    async findOne(id: string): Promise<Product> {
        return await this.productModel.findOne({ _id: id});
    }

    async create(product: Product): Promise<Product> {
        const newItem = new this.productModel(product)
        return await newItem.save();
    }

    async deleteOne(id: string): Promise<Product> {
        return await this.productModel.findByIdAndRemove(id);
    }

    async updateOne(id: string, product: Product): Promise<Product> {
       return await this.productModel.findByIdAndUpdate(id, product, {new : true});
    }
}