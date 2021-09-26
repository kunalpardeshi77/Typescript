const no1 = document.getElementById("no1")! as HTMLInputElement;
const no2 = document.getElementById("no2")! as HTMLInputElement;
const btn = document.getElementsByTagName("button")[0];

const add = (a: number, b: number ) => {   
    console.log(a + b);
};

btn.addEventListener("click", () => {
    add(+no1.value, +no2.value);
});