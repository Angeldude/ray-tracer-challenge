import { Tuple } from './tuple'

export class Point extends Tuple {
   constructor(x: number, y: number, z:number){
    super(x,y,z,1.0)
   }

   add(snd:Tuple): Tuple{
      let a = super.add(snd)
      if(Point.equal(a.w,1))
         return new Point(a.x,a.y,a.z)
      else
         return a
   }
}