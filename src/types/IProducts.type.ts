export interface IProducts {
    id: number
    name: string
    price: number
}

export interface IShowProducts {
    product: IProducts
}

export interface IdataRes {
    data: IProducts
}