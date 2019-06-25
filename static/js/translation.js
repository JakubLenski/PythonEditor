
//load initial language file.
languageStartup();

function languageStartup(){
<<<<<<< HEAD
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

=======
    var urlParams = new URLSearchParams(window.location.search);
    var langChoice = urlParams.get("lang") || "en";
    let langPath = "lang/" + langChoice + ".js";
    script(langPath, "lang");
};

//Moves the language dropdown box to an appropriate position in relation to the language button
>>>>>>> Improved query params, separate flag obj, changes for PR
function formatLangDropdown(){
    if($(".language_container").offset().left !== $("#command-language").offset().left){
        $(".language_container").css("top", $("#command-language").offset().top + $("#toolbox").height() + 10);
        $(".language_container").css("left", $("#command-language").offset().left);
    }
    if($(window).width() < 620){
        $(".language_container").css("top", $("#command-language").offset().top + $("#toolbox").height() + 10); 
    }
};

<<<<<<< HEAD
//dropdown menu on click handler
$("#command-language").on("click", function () {
    if ($(".language_container").is(":visible")) {
        $(".language_container").hide();
    }
    else {
=======

document.body.addEventListener('click',function(event) {
    // Close lang dropdown if the click isn't on a descendent of #command-language
    if($(".language_container").is(":visible") && $(event.target).closest('#command-language').length == 0){
        $(".language_container").hide();
    }
});


$("#command-language").on("click", function () {
    if($(".language_container").is(":visible")){
        $(".language_container").hide();
    }else{
>>>>>>> Improved query params, separate flag obj, changes for PR
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
    var buttons = language["translate"]["static-strings"]["buttons"];
    $(".roundbutton").each(function(object,value){
        let button_id = $(value).attr("id");
        $(value).attr("title",buttons[button_id]["title"]);
        $(value).children(":last").text(buttons[button_id]["label"]);
    });
    $(".zoomer").each((object,value) => {
        let button_id = $(value).attr("id");
        $(value).find("i").attr("title",buttons[button_id]["title"]);
    });
    $("#script-name-label").text(language["translate"]["static-strings"]["script-name"]["label"]);
    return true;
};
