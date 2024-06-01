const name = "Nguyễn văn Trường";
const age =  20;
const adđress = {
    // street : "Long Châu ",
    street : ["long châu"],
    city : " Hà Nội",
    run: function(){
        this.street.push("Phụng Châu");
        console.log(this.street);
    }

};
console.log(adđress.run());

const products1 = {
    name : " Trường",
    age : 20,
    address: " long chau"
};
const products2 = {...products1};
products2.name = "Truog1"
console.log(products1);