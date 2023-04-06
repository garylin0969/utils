const concatUnique = <T>(arr: T[], brr: T[]): T[] => {
    const setConcatArray: Set<T> = new Set(arr.concat(brr));
    const uniqueArray: T[] = Array.from(setConcatArray);
    return uniqueArray;
};

const arrayUtils: {
    concatUnique: <T>(arr: T[], brr: T[]) => T[];
} = {
    concatUnique,
};

export default arrayUtils;
