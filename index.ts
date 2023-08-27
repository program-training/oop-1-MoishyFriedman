// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
// class Rectangle {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.height = height;
//     this.width = width;
//   }

//   getArea(): string {
//     return this.height * this.width;
//   }
// }
//  2. Square - ריבוע
// class Square extends Rectangle {
//   constructor(width: number) {
//     super(width, width);
//   }
// }
// 3. Shape - צורה
class Shape {
  getInfo(): string {
    return "This is a Shape";
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
  GetInfo(): string {
    return "This is a Rectangle";
  }
}

class ColoredRectangle extends Rectangle {
  color: string;

  constructor(width: number, height: number, color: string) {
    super(width, height);
    this.color = color;
  }
  getInfo(): string {
    return `This is a Rectangle in ${this.color}`;
  }
}
