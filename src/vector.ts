import { Tuple } from './tuple'


export class Vector extends Tuple{
    constructor(x: number, y: number, z: number){
        super(x,y,z,0.0)
    }

    dd(snd:Tuple): Tuple{
        let a = super.add(snd)
        if(Vector.equal(a.w,0))
           return new Vector(a.x,a.y,a.z)
        else
           return a
     }
}