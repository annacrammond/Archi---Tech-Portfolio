if (document.URL.includes("index.html")) {
    document.getElementById("archiButton").onclick = function () {
        location.href = "architecture.html";
    };

    document.getElementById("techButton").onclick = function () {
        location.href = "technology.html";
    };

    document.getElementById("creativeButton").onclick = function () {
        location.href = "creative.html";
    };
}

if (document.URL.includes("architecture.html")) {
    document.getElementById("home").onclick = function () {
        location.href = "index.html";
    };
    document.getElementById("libraryButton").onclick = function () {
        location.href = "archiProjects/library.html";
    };
    document.getElementById("hubButton").onclick = function () {
        location.href = "archiProjects/hub.html";
    };
    document.getElementById("housingButton").onclick = function () {
        location.href = "archiProjects/housing.html";
    };
    document.getElementById("hillButton").onclick = function () {
        location.href = "archiProjects/hill.html";
    };
}