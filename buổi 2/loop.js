const app = ["Trường","Trang","trung"];
const products = document.querySelectorAll("#app");
let result="";
app.forEach((item) => {
    result += `${item}`;
});
products.innerHtml= result;