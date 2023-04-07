const judgeObjectArray = <T>(arr: T[]): boolean => {
    return arr.length > 0 && typeof arr[0] === 'object';
};

//=============================================================================================//
const concatUnique = <T>(arr: T[], brr: T[]): T[] => {
    const setConcatArray: Set<T> = new Set(arr.concat(brr));
    const uniqueArray: T[] = Array.from(setConcatArray);
    return uniqueArray;
};

const minReducer = (arr: (number | Record<string, any>)[], key?: string): number => {
    const isObjectArray: boolean = judgeObjectArray(arr);
    const min: number = arr.reduce((accumulator: number, current: number | Record<string, any>) => {
        if (isObjectArray && key && typeof current === 'object' && typeof current[key] === 'number') {
            return accumulator > current[key] ? current[key] : accumulator;
        }
        if (typeof current === 'number') {
            return accumulator > current ? current : accumulator;
        }
        return accumulator;
    }, 0) as number;
    return min;
};

const maxReducer = (arr: (number | Record<string, any>)[], key?: string): number => {
    const isObjectArray: boolean = judgeObjectArray(arr);
    const max: number = arr.reduce((accumulator: number, current: number | Record<string, any>) => {
        if (isObjectArray && key && typeof current === 'object' && typeof current[key] === 'number') {
            return accumulator > current[key] ? accumulator : current[key];
        }
        if (typeof current === 'number') {
            return accumulator > current ? accumulator : current;
        }
        return accumulator;
    }, 0) as number;
    return max;
};

const summationReducer = (arr: (number | Record<string, any>)[], key?: string): number => {
    const isObjectArray: boolean = judgeObjectArray(arr);
    const summation: number = arr.reduce((accumulator: number, current: number | Record<string, any>) => {
        if (isObjectArray && key && typeof current === 'object' && typeof current[key] === 'number') {
            return accumulator + current[key];
        }
        if (typeof current === 'number') {
            return accumulator + current;
        }
        return accumulator;
    }, 0) as number;
    return summation;
};

const arrayUtils: {
    concatUnique: <T>(arr: T[], brr: T[]) => T[];
    minReducer: (arr: (number | Record<string, any>)[], key?: string) => number;
    maxReducer: (arr: (number | Record<string, any>)[], key?: string) => number;
    summationReducer: (arr: (number | Record<string, any>)[], key?: string) => number;
} = {
    concatUnique,
    minReducer,
    maxReducer,
    summationReducer,
};

export default arrayUtils;
