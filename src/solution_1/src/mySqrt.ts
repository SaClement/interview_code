/**
 * x的算术平方根
 * @param {number} sqrt 
 */
export function mySqrt(sqrt: number) {
    if(sqrt === 0) {
        return 0
    }

    let sqrtO = sqrt;
    while (true) {
        // 牛顿迭代函数
        let sqrtI = 0.5 * (sqrtO + sqrt / sqrtO)
        if(Math.abs(sqrtO - sqrtI) < 1e-7) {
            break;
        }
        sqrtO = sqrtI;
    }
    return Math.floor(sqrtO)
}