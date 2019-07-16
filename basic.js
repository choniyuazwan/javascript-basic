let variabel = '';
variabel = 1 + 'text';

function cetak() {
    console.log('print')
}

async function cetak() {
    console.log('mulai')
    await setTimeout(cetak, 3000);
    console.log('selesai')
}

console.log('mulai')
setTimeout(cetak, 3000);
console.log('selesai')

cetak()
