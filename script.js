function qrCodeGenerator(){
    const inputField = document.querySelector("input");
    const qrCodeContainer = document.querySelector(".qr");
    const qrCodeImage = document.getElementById("imgText");
    const generateButton = document.querySelector("button");

    generateButton.addEventListener("click",()=>{
        let inputValue = inputField.value;
        if(!inputValue) return; //if the input field is empty, return from here
        generateButton.innerText = "Generating QR Code...";
        //API - https://goqr.me/api/doc/create-qr-code/
        qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrCodeImage.onload = ()=>{
            qrCodeContainer.style.display = "block";
            generateButton.innerText = "Generate QR Code";
        }
    });
}
qrCodeGenerator();