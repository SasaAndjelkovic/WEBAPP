//odlican fajl sa sve funckije u applikaciji

//Convert time to hours and minutes
export const calcTime = Time => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
};

//Convert a number to money formatting - ovu funckciju pogledati posle kursa
export const converMoney = money => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return formatter.format(money);
}