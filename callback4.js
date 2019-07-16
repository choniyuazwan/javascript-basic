let lemari = "masih kosong"

function naufal(mi) {
    lemari = mi
}

function gojek(mi, callback) {
    setTimeout(() => {
        callback(mi)
    }, 2000);
}

function kita(mi) {
    console.log(lemari)
    gojek(mi, naufal)
    
    setTimeout(() => {
        console.log('pulang')
        console.log(lemari)
    }, 3000); 
}

kita('mi sudah dibeli');