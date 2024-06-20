const jenisKonversi = document.getElementById('jenis-konversi');
const inputAngka = document.getElementById('input-angka');
const hasilKonversi = document.getElementById('hasil-konversi'); 
const kalkulasi = document.getElementById('kalkulasi');

function konversi() { 
  hitungKonversi(); 
  tampilHitung();
}

// Fungsi menghitung konversi
function hitungKonversi() {
    const selectedOption = jenisKonversi.value;
    const suhu = parseFloat(inputAngka.value);

    let hasil;
    switch(selectedOption) {
      case 'celsius-to-fahrenheit':
        hasil = suhu * 9/5 + 32;
        break;
      case 'fahrenheit-to-celsius':
        hasil = suhu * 9/5 - 32;
        break;
    }

    if (hasil) {
        hasilKonversi.value = hasil.toFixed(2);
    } else {
      hasilKonversi.value = "";
    }
  }

  // fungsi menampilkan rumus dari hasil konversi
  function tampilHitung() {
    const selectedOption = jenisKonversi.value;
    const suhu = inputAngka.value;
    let calcText;

    switch(selectedOption) {
      case 'celsius-to-fahrenheit':
        calcText = suhu +" * (9/5) + 32 = " + hasilKonversi.value;
        break;
      case 'fahrenheit-to-celsius':
        calcText = suhu +" * (9/5) - 32 = " + hasilKonversi.value;
        break;
    }

    if (hasilKonversi.value === "") {
      kalkulasi.value = "";
    } else {
      kalkulasi.value = calcText;
    }
    
}

// Fungsi untuk membalikkan jenis konversi
function reverse() {
  const selectedOption = jenisKonversi.value;
  let reversedOption;

  switch(selectedOption) {
    case 'celsius-to-fahrenheit':
      reversedOption = 'fahrenheit-to-celsius';
      break;
    case 'fahrenheit-to-celsius':
      reversedOption = 'celsius-to-fahrenheit';
      break;
  }

    jenisKonversi.value = reversedOption;
    hitungKonversi(); 
    tampilHitung();   
}

// fungsi menghapus 
function reset() {
    inputAngka.value = "";
    hasilKonversi.value = "";
    kalkulasi.value = "";
}




