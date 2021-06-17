export function increment(num: number): number{
    return num + 1;
}
export function pip(num: number, ...callbacks): number{
    let ans = num
    callbacks.forEach(callback =>{
        ans = callback(ans)
    })
    return ans
}
