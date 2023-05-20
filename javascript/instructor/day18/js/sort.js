export const mysort=(arr)=>{
    return arr.sort();
}

export const numberSortASC=(arr)=>{
    return arr.sort((a,b)=>a-b);
}

export const numberSortDESC=(arr)=>{
    return arr.sort((a,b)=>b-a);
}


export const stringSortASC=(arr)=>{
    return arr.sort((a,b)=>a.localeCompare(b));
}
export const stringSortDESC=(arr)=>{
    return arr.sort((a,b)=>b.localeCompare(a));
}
export const randomMix=(arr)=>{
    return arr.sort(()=>Math.random()-0.5);
}