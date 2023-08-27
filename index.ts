// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}
//  2. Square - ריבוע
class Square extends Rectangle {
  constructor(width: number) {
    super(width, width);
  }
}
// 3. Shape - צורה

// 4. Method Chaining

// 5. Shape with draw method
