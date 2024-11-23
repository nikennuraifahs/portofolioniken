const button = document.getElementById('myButton');

if (button) {
    button.addEventListener('click', () => {
        alert('Halo, ini adalah pesan dari JavaScript sederhana!');
    });
} else {
    console.error('Elemen dengan ID "myButton" tidak ditemukan!');
}
