import { Tuple } from '../tuple';
import { Point } from '../point';
import { Vector } from '../vector';

describe('a point is a tuple', () => {
    const result: Tuple = new Tuple(4.3, -4.2, 3.1, 1.0);
    it('should have x be 4.3', () => {
        expect(result.x).toEqual(4.3);
    });

    it('should have y be -4.2', () => {
        expect(result.y).toEqual(-4.2);
    });

    it('should have z be 3.1', () => {
        expect(result.z).toEqual(3.1);
    });

    it('should create a valid point', () => {
        expect(result.isPoint()).toBe(true)
    });

    it('should not be a valid vector', () => {
        expect(result.isVector()).toBe(false)
    });
});

describe('a vector is a tuple', () => {
    const result: Tuple = new Vector(4.3, -4.2, 3.1)
    it('should create a valid vector', () => {
        expect(result.isVector()).toBe(true)
    });
});

describe('adding two tuples', () => {
    null;
});
