import './style.css';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';

const form = document.getElementById('idForm');
const cardSection = document.getElementById('cardSection');
const downloadBtn = document.getElementById('downloadBtn');
let photoUrl = '';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    id: document.getElementById('id').value
  };

  // Update ID card display
  document.getElementById('displayName').textContent = formData.name;
  document.getElementById('displayRole').textContent = formData.role;
  document.getElementById('displayEmail').textContent = formData.email;
  document.getElementById('displayPhone').textContent = formData.phone;
  document.getElementById('displayId').textContent = `ID: ${formData.id}`;

  // Generate QR Code
  const qrCodeData = JSON.stringify(formData);
  const qrCodeContainer = document.getElementById('qrCode');
  qrCodeContainer.innerHTML = '';
  
  // Create a canvas element first
  const canvas = document.createElement('canvas');
  qrCodeContainer.appendChild(canvas);
  
  // Generate QR code on the canvas
  await QRCode.toCanvas(canvas, qrCodeData, {
    width: 150,
    margin: 1,
    color: {
      dark: '#333333',
      light: '#ffffff'
    }
  });

  downloadBtn.style.display = 'block';
});

// Handle photo upload
document.getElementById('photo').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      photoUrl = e.target.result;
      document.getElementById('displayPhoto').src = photoUrl;
    };
    reader.readAsDataURL(file);
  }
});

// Handle ID card download
downloadBtn.addEventListener('click', () => {
  const idCard = document.getElementById('idCard');
  html2canvas(idCard).then(canvas => {
    const link = document.createElement('a');
    link.download = 'id-card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});