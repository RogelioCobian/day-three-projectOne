import { Component, OnInit } from '@angular/core';

class Point {
  x: number;
  y: number;
  constructor(xNum: number, yNum: number ) {
    this.x = xNum;
    this.y = yNum;
  }
  add(newPoint: Point) {
    return newPoint = new Point( newPoint.x + this.x, newPoint.y + this.y );
  }
}

class Point3D extends Point {
  z: number;

  constructor(xNum: number, yNum: number, zNum: number) {
    super(xNum, yNum);

    // Super already refers to previously set values so the following comment below is a note
    // this.x = xNum;
    // this.y = yNum;
    this.z = zNum;

  }

  add(new3DPoint: Point3D) {
    return new3DPoint = new Point3D( new3DPoint.x + this.x, new3DPoint.y + this.y, new3DPoint.z + this.z );
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    console.log('Hi');
    this.addStuff();
  }

  addStuff() {
    const p1 = new Point(3, 5);
    const p2 = new Point(3, 5);
    console.log(p1.x, p2.y);
    const p3 = p1.add(p2);

    console.log(p3);

    const p3D1 = new Point3D(4, 7, 88);
    const p3D2 = new Point3D(8, 3, 34);
    const p3D3 = p3D1.add(p3D2);
    console.log(p3D3);
  }

}
