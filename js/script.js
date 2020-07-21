function showAllMenu() {
    $.getJSON('data/sakana.json', function (data) {
        // console.log(data);
        let menu = data.menu;
        // console.log(menu);
        // method untuk melakukan looping terhadap object
        $.each(menu, function (i, data) {
            // menampilkan index
            // console.log(i);
            // menampilkan data
            // console.log(data);

            $('#list-menu').append('<div class="col-md col-sm"><div class="card mb-4" style="width: 18rem;"><img src="img/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' +
                data.komposisi + '</p><p class="text-warning h4">' + data.kandungan + '</p><p class="text-muted">Rp. ' + data.harga + '</p><a href="#" class="btn btn-primary float-right">Buy Now</a></div></div></div>')
        });
    });
}

showAllMenu();

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let category = $(this).html();
    // console.log(category);
    $('h1').html(category);

    if (category == 'All Menu') {
        $('#list-menu').empty();
        showAllMenu();
        return;
    }

    $.getJSON('data/sakana.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            // toLowerCase() memaksa semua tulisan menjadi huruf kecil
            if (data.kandungan == category) {
                content += '<div class="col-md col-sm text-center"><div class="card mb-4" style="width: 18rem;"><img src="img/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' +
                    data.komposisi + '</p><p class="text-warning h4">' + data.kandungan + '</p><p class="text-muted">Rp. ' + data.harga + '</p><a href="#" class="btn btn-primary float-right">Buy Now</a></div></div></div>'
            }
        });
        // untuk menimpa isinya
        $('#list-menu').html(content);
    })
});