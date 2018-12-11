let accessKey = "ffba005d9db8428be8dcad8f3e7778b102e2b20287c8b29230129d48ad8c52fc";

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    displayImages(JSON.parse(this.responseText));
  }
};
xmlhttp.open('GET', `https://api.unsplash.com/photos?order_by=latest&page=1&client_id=${accessKey}`);
xmlhttp.send();

let displayImages = (images) => {
    let z = 0;
    console.log(images);
    let innerContent = "";
    // images.forEach(image => {
    //     innerContent += `<a href="${image.links.download}"><img src=${image.urls.small} alt="${image.description}"></a>`;
    // });
    for (let x = 0; x < 5; x++){
        innerContent += "<div class='column'>";
        for (let i = 0; i < 2; i++){
            innerContent += `<a href="${images[z].links.download}"><img src=${images[z].urls.small} alt="${images[z].description}"></a>`;
            z++;
        }
        innerContent += "</div>";
    }

    document.querySelector(".row").innerHTML += innerContent;
}


