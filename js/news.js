function show_overview(div) {
    var overview = document.getElementById("overview");

    var h1_text = div.querySelector("h1").textContent;
    var p_text = div.querySelector("p").textContent;
    var news_image = div.parentNode.querySelector(".news_img img").src;
    var key_content = div.parentNode.querySelector(".key_content").textContent;

    var overview_title = overview.querySelector("#overview_title");
    var overview_subtitle = overview.querySelector("#overview_subtitle");
    var overview_img = overview.querySelector("#overview_img");
    var overview_content = overview.querySelector("#overview_content");

    if (overview.style.display === "none") {
        overview.style.display = "flex";
        overview_title.textContent = h1_text;
        overview_subtitle.textContent = p_text;
        overview_img.src = news_image;
        overview_content.textContent = key_content;

        var newsDiv = div.parentNode;
        var newsDivRect = newsDiv.getBoundingClientRect();
        var newsDivTop = newsDivRect.top + window.pageYOffset;
        var newsDivLeft = newsDivRect.left + window.pageXOffset;
        var newsDivWidth = newsDivRect.width;

        overview.style.top = newsDivTop + newsDiv.offsetHeight + "px";
        overview.style.left = newsDivLeft + "px";
        overview.style.width = newsDivWidth + "px";
    } 
    
    else {
        overview.style.display = "none";
    }
}

function goArticle(th) {
    window.location.href = `articles.html?th=${th}`;
}