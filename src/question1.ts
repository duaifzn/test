export function addComma(num: string): string{
    if(!num.includes('.')){
        let temp = num.split('')
        let times = temp.length
        let ans = []
        for(let i=1; i<=times; i++){
            ans.unshift(temp.pop())
            if(i%3 == 0 && ans[0] != '-') ans.unshift(',') 
        }
        return ans.join('')
    }
    else{
        let front = num.slice(0, num.indexOf('.'))
        let end = num.slice(num.indexOf('.'))
    
        let temp = front.split('')
        let times = temp.length
        let ans = []
        for(let i=1; i<=times; i++){
            ans.unshift(temp.pop())
            if(i%3 == 0 && ans[0] != '-') ans.unshift(',') 
        }
        return ans.join('') + end
    }
}