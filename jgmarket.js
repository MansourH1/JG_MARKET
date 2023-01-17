let images = ["watch.jpg", "pink.jpg","white.jpg","watch7.jpg","whiteWatch.jpg"];
function changeP1(ref) {
        let x = ref.options[ref.selectedIndex];//options bta3tina <option>....</option> bs selectedIndex 
        // bt3tina ayya ra2m option n3amalla select like arrays 0 or 1 etc....
        let val = x.textContent; //bta3tina chou fi jouwweta
        let img = document.getElementById("img");
        if (val == "Black") {
                img.src = images[0];
        }else if (val == "Pink") {
                img.src = images[1];
}else if(val=="White"){
                img.src = images[2];}
}
function changeP2(photo){
let y=photo.options[photo.selectedIndex];
let valeur=y.textContent;
let img2=document.getElementById("img2");
if(valeur=="Black"){
        img2.src=images[3];
}else if(valeur=="White"){
        img2.src=images[4];
}
}