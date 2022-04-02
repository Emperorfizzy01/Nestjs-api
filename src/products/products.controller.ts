import { Body, Controller, Post, Get, Param, Delete, Put } from "@nestjs/common";
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interfaces';
import { ProductsService } from "./products.service";


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) : Promise<Product> {
        return this.productsService.findOne(id)
    }

    @Post()
     create(@Body() createProduct: CreateProductDto): Promise<Product> {
       return this.productsService.create(createProduct);
    }
    
    @Delete(':id')
    deleteOne(@Param('id') id) : Promise<Product> {
        return this.productsService.deleteOne(id);
    }

    @Put(':id')
    updateOne(@Param('id') id, @Body() createProduct: CreateProductDto): Promise<Product> {
        return this.productsService.updateOne(id, createProduct);
    }

}