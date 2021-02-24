function bulb(value){
    let pic;
    
    if(value == 0){
        pic = "w.jpg";
    }else if(value == 1){
        pic = "r.jpg";
    }
    document.getElementById('bulb').src = pic;
}

function bulb1(value1){
    let pic1;
    
    if(value1 == 0){
        pic1 = "y.jpg";
    }else if(value1 == 1){
        pic1 = "g.jpg";
    }
    document.getElementById('bulb').src = pic1;
}

function bulb2(value2){
    let pic2;
    
    if(value2 == 0){
        pic2 = "go.jpg";
    }else if(value2 == 1){
        pic2 = "o.jpg";
    }
    document.getElementById('bulb').src = pic2;
}

function bulb3(value3){
    let pic3;
    
    if(value3 == 0){
        pic3 = "bl.jpg";
    }else if(value3 == 1){
        pic3 = "p.jpg";
    }
    document.getElementById('bulb').src = pic3;
}
