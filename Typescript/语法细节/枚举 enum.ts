// 数字枚举
enum Direction {
	NORTH = 6,
	SOUTH,
	EAST,
	WEST,
}

let dir: Direction = Direction.NORTH;
// 数字枚举具有反向映射
console.log(Direction.NORTH) // 6
console.log(Direction[6]) // NORTH


// 字符串枚举
enum Direction1 {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}

let dir1: Direction1 = Direction1.EAST

// 异构枚举
enum Enum {
  A,
  B = 666,
  G, // 667
  C = "C",
  D = "D",
  E = 8,
  F, // 9
}