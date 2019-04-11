
//load initial language file.
languageStartup();

function languageStartup(){
    var url = window.location.href;
    var langChoice = url.split('#lang=')[1] || "en";
    createScriptTag(langChoice);
};


function createScriptTag(langChoice){
    var languageScript = document.createElement("script");
    languageScript.src = "static/js/" + langChoice + ".js";
    languageScript.id = "lang";
    document.getElementsByTagName("body")[0].appendChild(languageScript);
};

function formatLangDropdown(){
    if($(".language_container").offset().left !== $("#command-language").offset().left){
        $(".language_container").css("top", $("#command-language").offset().top + $("#toolbox").height() + 10);
        $(".language_container").css("left", $("#command-language").offset().left);
    }
    if($(window).width() < 620){
        $(".language_container").css("top", $("#command-language").offset().top + $("#toolbox").height() + 10); 
    }
};

//dropdown menu on click handler
$("#command-language").on("click", function () {
    if ($(".language_container").is(":visible")) {
        $(".language_container").hide();
    }
    else {
        formatLangDropdown();
        $(".language_container").show();
    }
});


window.addEventListener('resize', function(){
    if($(".language_container").is(":visible")){
        formatLangDropdown();
    }
});


$("#command-help").on("click",function(){
    if($(".language_container").is(":visible")){
        $(".language_container").hide();
    }
});


function loadLang(){
    translateEmbedStrings(language);
    return language;
}


function translateEmbedStrings(language){
    $(".roundbutton").each(function(object,value){
        var buttons = language["translate"]["buttons"];
        var button_id = $(value).attr("id");
        $(value).attr("title",buttons[button_id]["title"]);
        $(value).children(":last").text(buttons[button_id]["label"]);
    });
    return true;
};
