interface IIndexType {
  // 两个索引类型的写法
  // 1.注意! 数字索引的返回类型一定要是字符索引返回的子类型(原因: 所有的数字类型都是会转成字符串类型去对象中获取内容)
  [index: number]: number
	[key: string]: string | number
  // 2.注意! 如果索引签名中有定义其他属性, 其他属性返回的类型, 必须符合string类型返回的属性(原因aaa也属于字符串类型)
  // aaa: boolean
}