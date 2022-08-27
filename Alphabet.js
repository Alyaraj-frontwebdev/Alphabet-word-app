function result(){
    let text = document.getElementById('txt').value; 
    let result = document.getElementById('result');
    let image = document.getElementById('img');
    let other_image = image.getElementsByTagName('img')[0];
    const images = [
        "https://i.pinimg.com/originals/ea/c9/96/eac9960a545ec495d88ce0554b9dd51a.png",
        "https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png",
        "https://pngimg.com/uploads/cat/cat_PNG50497.png",
        "https://pngimg.com/uploads/dog/dog_PNG50348.png",
        "https://www.freepnglogos.com/uploads/elephant-png/black-elephant-png-transparent-image-14.png",
        "https://pngimg.com/uploads/fish/fish_PNG25105.png",
        "https://pngimg.com/uploads/giraffe/giraffe_PNG13518.png",
        "https://www.pngall.com/wp-content/uploads/2017/05/Topper-Hat-Download-PNG.png",
        "https://www.freeiconspng.com/thumbs/ice-png/ice-png-0.png",
        "https://i.pinimg.com/originals/60/e1/15/60e115d664c18597a656ddbd4b9cbadb.png",
        "https://freepngimg.com/thumb/makar_sankranti/96452-makar-sankranti-kite-line-sport-for-happy-getaways.png",
        "https://pngimg.com/uploads/lion/lion_PNG23271.png",
        "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/29162/cerillos-clipart-md.png",
        "https://pngimg.com/uploads/nest/nest_PNG65.png",
        "https://pngimg.com/uploads/onion/onion_PNG99190.png",
        "https://static.vecteezy.com/system/resources/previews/001/204/729/original/pencil-png.png",
        "https://www.pngmart.com/files/4/Queen-PNG-Image.png",
        "https://upload.wikimedia.org/wikipedia/commons/7/74/202101_Rat.png",
        "https://static.wixstatic.com/media/2cd43b_ef1d4b6318774f04a159879a4664063b~mv2.png/v1/fill/w_320,h_179,q_90/2cd43b_ef1d4b6318774f04a159879a4664063b~mv2.png",
        "https://pngimg.com/uploads/tiger/tiger_PNG23230.png",
        "https://pngimg.com/uploads/umbrella/umbrella_PNG69144.png",
        "https://pics.clipartpng.com/midle/Passenger_Van_PNG_Clip_Art-2981.png",
        "https://static.wixstatic.com/media/2cd43b_70674f11a01e43f19366ee72aee4b8bb~mv2.png/v1/fill/w_320,h_507,q_90/2cd43b_70674f11a01e43f19366ee72aee4b8bb~mv2.png",
        "https://www.pngall.com/wp-content/uploads/2016/06/Xylophone-PNG-Clipart.png",
        "https://www.pngmart.com/files/8/Yacht-PNG-HD-Quality.png",
        "https://pngimg.com/uploads/zebra/zebra_PNG8966.png"
    ];
    switch(text){
        case "A":
            result.innerHTML = "A for <strong>Apple</strong>";
            other_image.src = images[0];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "B":
            result.innerHTML = "B for <strong>Ball</strong>";
            other_image.src = images[1];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "C":
            result.innerHTML = "C for <strong>Cat</strong>";
            other_image.src = images[2];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "D":
            result.innerHTML = "D for <strong>Dog</strong>";
            other_image.src = images[3];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "E":
            result.innerHTML = "E for <strong>Elephant</strong>";
            other_image.src = images[4];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "F":
            result.innerHTML = "F for <strong>Fish</strong>";
            other_image.src = images[5];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "G":
            result.innerHTML = "G for <strong>Giraffe</strong>";
            other_image.src = images[6];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "H":
            result.innerHTML = "H for <strong>Hat</strong>";
            other_image.src = images[7];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "I":
            result.innerHTML = "I for <strong>Ice</strong>";
            other_image.src = images[8];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "J":
            result.innerHTML = "J for <strong>Jug</strong>";
            other_image.src = images[9];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "K":
            result.innerHTML = "K for <strong>Kite</strong>";
            other_image.src = images[10];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "L":
            result.innerHTML = "L for <strong>Lion</strong>";
            other_image.src = images[11];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "M":
            result.innerHTML = "M for <strong>Matchbox</strong>";
            other_image.src = images[12];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "N":
            result.innerHTML = "N for <strong>Nest</strong>";
            other_image.src = images[13];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "O":
            result.innerHTML = "O for <strong>Onion</strong>";
            other_image.src = images[14];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "P":
            result.innerHTML = "P for <strong>Pencil</strong>";
            other_image.src = images[15];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "Q":
            result.innerHTML = "Q for <strong>Queen</strong>";
            other_image.src = images[16];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "R":
            result.innerHTML = "R for <strong>Rat</strong>";
            other_image.src = images[17];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "S":
            result.innerHTML = "S for <strong>Satellite</strong>";
            other_image.src = images[18];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "T":
            result.innerHTML = "T for <strong>Tiger</strong>";
            other_image.src = images[19];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "U":
            result.innerHTML = "U for <strong>Umbrella</strong>";
            other_image.src = images[20];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "V":
            result.innerHTML = "V for <strong>Van</strong>";
            other_image.src = images[21];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "W":
            result.innerHTML = "W for <strong>Watch</strong>";
            other_image.src = images[22];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "X":
            result.innerHTML = "X for <strong>Xylophone</strong>";
            other_image.src = images[23];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "Y":
            result.innerHTML = "Y for <strong>Yacht</strong>";
            other_image.src = images[24];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
        case "Z":
            result.innerHTML = "Z for <strong>Zebra</strong>";
            other_image.src = images[25];
            image.getElementsByTagName('img')[1].style.display = "none";
            break;
    }
}