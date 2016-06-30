var url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&profile=classic&search="
$(document).ready(function(){
    $("button").click(function() {
        var searchItem = "";

        $("#searchResult").css("display", "none");
        searchItem = $("input:text").val()
        if (searchItem != "") {
            $.getJSON(url + searchItem + "&callback=?", function(json) {
                var html = "";
                for (var i = 0; i < 10; i++) {
                    html += "<a href=\"" + json[3][i] + "\"><div class=\"panel panel-default\">";
                    html += "\n\t<div class=\"panel-heading\">";
                    html += "\n\t\t<h3 class=\"panel-title\">" + json[1][i] + "</h3>";
                    html += "\n\t</div>"
                    html += "\n\t<div class=\"panel-body\">" + json[2][i] + "</div>";
                    html += "</div></a>";
                }
                $("#searchResult").html(html);
            });
        }

        $("#searchResult").fadeIn("slow");

    });

});
