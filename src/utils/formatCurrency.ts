/**
 * 숫자를 한글 표기법으로 변환하는 함수
 * @param amount - 숫자 이적료
 * @returns 한국식 표기법으로 변환된 문자열
 */
export const formatCurrency = (amount: number | undefined): string => {
    if (amount === undefined || amount === 0) return '-';

    const units = ['', '만', '억', '조', '경'];
    const k = 10000;
    const result = [];

    let currentAmount = amount;

    for (let i = 0; i < units.length; i++) {
        const unitValue = currentAmount % k;
        if (unitValue > 0) {
            result.unshift(`${unitValue}${units[i]}`);
        }
        currentAmount = Math.floor(currentAmount / k);
        if (currentAmount === 0) break;
    }

    return result.join(' ');
};

/**
 * 숫자를 1000 단위로 콤마(,)를 추가하는 함수
 * @param number - 숫자 값
 * @returns 1000 단위로 콤마가 추가된 문자열
 */
export const numberWithCommas = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};