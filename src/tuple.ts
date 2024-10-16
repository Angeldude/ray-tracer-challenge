interface valid_point {
    isPoint: () => boolean
}

interface valid_vector {
    isVector: () => boolean
}

export class Tuple implements valid_point, valid_vector {
    x: number
    y: number
    z: number
    w: number
    static EPSILON = 0.00001
    
    constructor(x: number, y: number, z:number, w:number){
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }

    static equal(a: number, b: number){
        return (Math.abs(a-b) < this.EPSILON)
    }

    isPoint(){
        return Tuple.equal(this.w, 1.0)
    }
    
    isVector(){
        return !this.isPoint()
    }
}