export const changeRupiah = (price) => {
    if (price === "") {
        return ""
    }
    price = price.toString().split("").reverse().join("");
    let result = "";
    for (let i = 0; i < price.length; i+=3) {
        if (i+3 < price.length) {
            result += price.substring(i, i+3) + ".";
        }
        else {
            result += price.substring(i, i+3);
        }
    }
    return "Rp. " + result.split("").reverse().join("");
}
