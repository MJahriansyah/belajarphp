

var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpeg'],
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpeg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpeg']
]

function itemData(arr) {
    var data = ""
    for (var i = 0; i < arr.length; i++) {
        data +=
            "<div class='col-md-4  mb-4'> " +
            "<div class='card m-2 h-100 w-100'  >" +
            "<div class='card-body'>" +
            "<img src='public/img/" + arr[i][4] + "' class='card-img-top' style='height:160px;' alt='...'>" +
            "<h5 class='card-title' id='itemName'>" + arr[i][1] + "</h5>" +
            "<p class='card-text' id = 'itemDesc' > " + arr[i][3] + "</p >" +
            "<p class='card-text'>Rp. " + arr[i][2] + "</p>" +
            "<a a href = '#' class='btn btn-primary addCart' id = 'addCart '  onclick='add()' > Tambahkan ke keranjang</a >" +
            "</div >" +
            "</div>" +
            "</div>"

    }
    return data
}
function tampildata() {
    var tampil = itemData(items)
    document.getElementById("listBarang").innerHTML = "<div class='row'>" + tampil + "</div>"

}
tampildata()



var form = document.getElementById("formItem");
form.addEventListener("submit", function (e) {
    e.preventDefault()
    var input = document.getElementById("keyword").value

    var tampil = ""



    if (input) {
        var data = [input.toLowerCase()]
        for (var i = 0; i < items.length; i++) {
            if (items[i][1].toLowerCase().match(data)) {
                tampil += "<div class='col-md-4  mb-4'> " +
                    "<div class='card m-2 h-100 w-100'  >" +
                    "<div class='card-body'>" +
                    "<img src='public/img/" + items[i][4] + "' class='card-img-top' style='height:160px;' alt='...'>" +
                    "<h5 class='card-title' id='itemName'>" + items[i][1] + "</h5>" +
                    "<p class='card-text' id = 'itemDesc' > " + items[i][3] + "</p >" +
                    "<p class='card-text'>Rp. " + items[i][2] + "</p>" +
                    "<a href = '#' class='btn btn-primary addCart' id = 'addCart'  onclick='add()'> Tambahkan ke keranjang</a >" +
                    "</div >" +
                    "</div>" +
                    "</div>"

            }



        }


        document.getElementById("listBarang").innerHTML = "<div class='row'>" + tampil + "</div>"

    } else {
        tampildata()
    }
})
count = 0
function add() {
    count += 1;
    document.getElementById("cart").innerHTML = "<i class='fas fa-shopping-cart'></i>(" + count + ")"
};
