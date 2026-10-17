// JavaScript Logic (script.js)
let qrInstance = null;

function generateQRCode(text, darkColor = '#000000', lightColor = '#ffffff') {
  const container = document.getElementById('qrcode');
  container.innerHTML = ''; // Clear previous QR

  qrInstance = new QRCode(container, {
    text: text,
    width: 200,
    height: 200,
    colorDark: darkColor,
    colorLight: lightColor,
    correctLevel: QRCode.CorrectLevel.H
  });
}

function downloadQR(format) {
  const img = document.querySelector('#qrcode img');
  const canvas = document.querySelector('#qrcode canvas');
  
  let dataUrl = '';
  if (canvas) {
    dataUrl = canvas.toDataURL(`image/${format}`);
  } else if (img) {
    dataUrl = img.src;
  }

  const link = document.createElement('a');
  link.download = `qrcode.${format}`;
  link.href = dataUrl;
  link.click();
}
