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
// class Shape {
//   getInfo(): string {
//     return "This is a Shape";
//   }
// }

// class Rectangle extends Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }
//   getArea(): number{
//     return this.height * this.width;
//   }
//   GetInfo(): string{
//     return "This is a Rectangle";
//   }
// }

// class ColoredRectangle extends Rectangle {
//   color: string;

//   constructor(width: number, height: number, color: string) {
//     super(width, height);
//     this.color = color;
//   }
//   getInfo(): string{
//     return `This is a Rectangle in ${this.color}`;
//   }
// }
// 4. Method Chaining
// class Rectangle extends Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }
//   getArea(): number {
//     return this.height * this.width;
//   }
//   GetInfo(): string {
//     return "This is a Rectangle";
//   }
//   setScale(number: number): this {
//     this.height *= number;
//     this.width *= number;
//     return this;
//   }
//   static getNewRectangle(
//     rectangle1: Rectangle,
//     rectangle2: Rectangle
//   ): Rectangle {
//     let newRectangle = new Rectangle(
//       rectangle1.width + rectangle2.width,
//       rectangle1.height + rectangle2.height
//     );
//     return newRectangle;
//   }
// }

// let rectangle = new Rectangle(5, 5);
// console.log(rectangle.setScale(2).setScale(2).getArea());
// 5. Shape with draw method
class Shape {
  getDraw(): void {
    console.log("drawing a shape");
  }
}
class Triangle extends Shape {
  getDraw(): void {
    console.log("drawing a Triangle");
  }
}

class Circle extends Shape {
  getDraw(): void {
    console.log("drawing a Circle");
  }
}

class Square extends Shape {
  getDraw(): void {
    console.log("drawing a Square");
  }
}

function renderShapes(array: Shape[]): void {
  array.forEach((obj) => obj.getDraw());
}
