import { IProductsRepository } from '../domain/repositories/IProductsRepository';
import { IProductPaginate } from '../domain/models/IProductPaginate';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<IProductPaginate> {
    const products = await this.productsRepository.findAllPaginate();

    return products;
  }
}

export default ListProductService;
