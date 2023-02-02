let secretNum = Math.ceil(Math.random() * 100 + 1);



while(true){
    let predictNum = prompt('Nhap con so du doan: ');
    console.log("So du doan: " + predictNum);
    if(secretNum == predictNum){
        console.log('Dung');
        break;
    }else{
        if(predictNum < secretNum){
            alert("So du doan nho hon so bi mat");
        }else{
            alert("So du doan lon hon so bi mat");
        }
    }
}
