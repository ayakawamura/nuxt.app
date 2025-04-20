import type { Summary, PaymentMethod, Point, Coupon, DeliveryAddress, Customer, Remark } from "~/types/cart"

export const getCustomer = () => {
  const client: Customer = {
    name: '山田 太郎',
    kana: 'ヤマダ タロウ',
    postalCode: '100-0001',
    address: '東京都千代田区千代田1-1',
    phone: '090-1234-5678',
    mail: 'test@rockwave.co.jp',
    gender: '男性',
    mailMagazine: '受け取らない',
  }
  return client
}

export const getDeliveryAddressList = () => {
  const deliveryAddressList: DeliveryAddress[] = [
    {
      id: 0,
      name: '山田 太郎',
      kana: 'ヤマダ タロウ',
      postalCode: '〒1000001',
      address: '東京都千代田区千代田1-1',
      phone: '090-1234-5678',
      deliveryMethod: {
        name: '宅配便',
        hopeDate: '指定なし',
        hopeTime: '指定なし',
      },
      item: [{
        id: 1,
        name: '赤りんご',
        url: '/character_apple.png',
        price: 1000,
        count: 13,
      }]
    },
    {
      id: 1,
      name: '吉田 花子',
      kana: 'ヨシダ ハナコ',
      postalCode: '〒6110021',
      address: '京都府宇治市宇治',
      phone: '090-1234-5678',
      deliveryMethod: {
        name: '宅配便',
        hopeDate: null,
        hopeTime: null
      },
      item: [{
        id: 0,
        name: '青りんご',
        url: '/character_apple.png',
        price: 500,
        count: 7,
      }],
    },
  ]

  return deliveryAddressList
}

export const getSummary = () => {
  const summary: Summary = {
    orderTotalPrice: 16500,
    itemTotalPrice: 16500,
    deliveryCost: 0,
    option: 0,
    cost: 0,
    getPoint: 165,
  }

  return summary
}

export const getPaymentMethod = () => {
  const paymentMethodList: PaymentMethod[] = [
    {
      id: 0,
      name: 'クレジットカード',
      cost: 0,
      text: 'Visa,JCB,Master',
    },
    {
      id: 1,
      name: '銀行振込',
      cost: 100,
      text: 'ご入金確認後、商品をお届けいたします。発送日にかかわらず、ご注文から2週間以内にご入金ください。',
    },
    {
      id: 2,
      name: '代金引換',
      cost: 300,
      text: '商品お届け時に配送ドライバーに商品代金をお支払いください。'
    },
  ]

  return paymentMethodList
}

export const getPointInfo = () => {
  const pointInfo: Point = {
    canUsePoint: 1200,
    selected: 1,
    usePoint: 200,
  }
  return pointInfo
}

export const getCouponList = () => {
  const couponList: Coupon[] = [
    {
      id: 0,
      name: '5,000円以上購入で30%OFF',
      start: '2025/1/27 00:00:00',
      end: '2025/1/28 23:59:59',
      heiyou: true,
      isUse: true,
    },
    {
      id: 1,
      name: '初回購入で500円OFF',
      start: '',
      end: '2025/3/31 23:59:59',
      heiyou: true,
      isUse: true,
    },
    {
      id: 2,
      name: '会員限定クーポン300円OFF',
      start: '',
      end: '',
      heiyou: false,
      isUse: false,
    },
  ]
  return couponList
}

export const getRemarks = () => {
  const remarks: Remark[] = [
    {
      id: 0,
      title: '備考１',
      content: '領収書をください',
    }
  ]
  return remarks
}