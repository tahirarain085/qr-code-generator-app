document.querySelector("#qr-generate").addEventListener('click',handleQRCode);

function handleQRCode(){
    const input = document.querySelector("#input").value;
    if(!input){
        console.log("Enter a Valid QR Code")
        return;
    }
    const code = document.querySelector("#code")
    new QRious({
        element: code,
        value : input,
    });
    code.style.display = "block"
    
}