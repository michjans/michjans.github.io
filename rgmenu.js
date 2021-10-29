
var menuItems = [
    { "en" : "Home",       "nl" : "Home",        "link" : "index" },
    { "en" : "Download",   "nl" : "Download",    "link" : "download" },
    { "en" : "Tutorials",  "nl" : "Tutorials",   "link" : "tutorials" },
    { "en" : "News",       "nl" : "Nieuws",      "link" : "news" },
    { "en" : "Links",      "nl" : "Links",       "link" : "links" },
    { "en" : "Background", "nl" : "Achtergrond", "link" : "background" },
    { "en" : "Planning",   "nl" : "Planning",    "link" : "planning" }
];

function addMenuItem(current, name, link)
{
    var newItem = document.createElement("li");
    
    if (current == name)
    {
        //Current page, don't create a link
        newItem.innerHTML = name;
    }
    else
    {
        var menuLink = document.createElement("a");
        menuLink.setAttribute("href", link);
        menuLink.innerHTML = name;
        newItem.appendChild(menuLink);
    }

    var list = document.getElementById("rgMenu");
    list.appendChild(newItem);
}

function generateMenu(current, lang, linkPathPrefix)
{
    if (typeof(lang)==='undefined') lang = "en";
    if (typeof(linkPathPrefix)==='undefined') linkPathPrefix = "";
    var linkLang = null;
    if (lang == "en")
    {
        //For english pages we don't have a postfix for the links
        linkPostfix = "";
    }
    else
    {
        linkPostfix = "_" + lang;
    }

    menuItems.forEach(function (item, index) {
        addMenuItem(current, item[lang], linkPathPrefix + item["link"]+linkPostfix+".html");
    });
}
