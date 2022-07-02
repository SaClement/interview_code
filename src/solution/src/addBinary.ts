/**
 * 二进制的求和
 * @param {string} binaryA 二进制A
 * @param {string} binaryB 二进制B
 */
export function addBinary (binaryA_, binaryB_) {
    const binaryA = "Ob" + binaryA_;
    const binaryB = "Ob" + binaryB_;
    let sum = BigInt(binaryA) + BigInt(binaryB);
    return sum.toString(2)
}