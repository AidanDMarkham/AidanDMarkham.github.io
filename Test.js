var isExtended = false;
function ExtendSection(section) {
    if (!isExtended) {
        console.log("Extending Section" + section);
        document.getElementById("extendo").parentElement.classList.add("expanded");
        document.getElementById("extendo").parentElement.classList.remove("unexpanded");
    } else {
        console.log("unextended section");
        document.getElementById("extendo").parentElement.classList.add("unexpanded");
        document.getElementById("extendo").parentElement.classList.remove("expanded");
    }
    isExtended = !isExtended;
}
