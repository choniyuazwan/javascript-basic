let album = "belum ada"

function rekaman(data) {
    album = data
}

function toko(data, callback) {
    console.log(album)
    setTimeout(() => {
        callback(data)
        console.log(album)
    }, 5000);
}

function kita() {
    toko('sudah tersedia', rekaman)
}

kita();