export interface DeliveryAddress {
  id: number
  name: string
  kana: string
  postalCode: string
  address: string
  phone: string
  deliveryMethod: DeliveryMethod
  item: Item[]
}

export interface DeliveryMethod {
  name: string | null
  hopeDate: string | null
  hopeTime: string | null
}

export interface PaymentMethod {
  id: number
  name: string
  cost: number
  text: string | null
}

export interface Point {
  canUsePoint: number,
  selected: number | null,
  usePoint: number,
}

export interface Coupon {
  id: number
  name: string
  start: string
  end: string
  heiyou: boolean
  isUse: boolean
}

export interface Summary {
  orderTotalPrice: number
  itemTotalPrice: number
  deliveryCost: number
  option: number
  cost: number
  getPoint: number
}

export type Customer = {
  name: string
  kana: string
  postalCode: string
  address: string
  phone: string
  mail: string
  gender: string
  mailMagazine: string
}

export type Product = {
  id: number
  name: string
  price: number
  quantity: number
  selected: boolean
}

export type Item = {
  id: number
  name: string
  url: string
  price: number
  count: number
}

export type Remark = {
  id: number
  title: string
  content: string
}

