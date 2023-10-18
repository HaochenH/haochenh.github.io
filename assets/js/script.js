function googleTranslateElementInit() {
    var browserLang =
        window.navigator.language || window.navigator.userLanguage;
    if (!browserLang.startsWith("en")) {
        new google.translate.TranslateElement(
            {
                pageLanguage: "en",
                includedLanguages:
                    "zh-TW,zh-CN,ja,fr,de,ru,es,pt,hi,ms,th,tl,vi,ko",
                autoDisplay: false,
            },
            "google_translate_element"
        );
    } else {
        // Hide the Translate button
        document.getElementById("google_translate_element").style.display =
            "none";
    }
}

function triggerTranslation() {
    var translateButton = document.querySelector(".goog-te-combo");
    if (translateButton) {
        translateButton.dispatchEvent(new Event("change"));
    }
}

// window.addEventListener("load", function () {
//     googleTranslateElementInit();
//     setTimeout(function () {
//         triggerTranslation();
//         triggerTranslation();
//     }, 1500);
// });
