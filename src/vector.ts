import { Tuple } from './tuple'


export class Vector extends Tuple{
    constructor(x: number, y: number, z: number){
        super(x,y,z,0.0)
    }
}