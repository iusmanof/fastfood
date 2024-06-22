export interface ICartProps {
    id: number,
    title: string,
    type: string[],
    size: number[] | string[],
    count: number,
    price: number,
    totalItemPrice: number
  }