function setup() {
    createCanvas(360, 450);
}

function draw() {
    textSize(25);
    fill(0);

    let month = new Date().getMonth();

    switch(month) {
        case 0:
            text('January', 120, 25);
            break;
        case 1:
            text('February', 120, 25);
            break;
        case 2:
            text('March', 120, 25);
            break;
        case 3:
            text('April', 120, 25);
            break;
        case 4:
            text('May', 120, 25);
            break;
        case 5:
            text('June', 120, 25);
            break;
        case 6:
            text('July', 120, 25);
            break;
        case 7:
            text('August', 120, 25);
            break;
        case 8:
            text('September', 120, 25);
            break;
        case 9:
            text('October', 120, 25);
            break;
        case 10:
            text('November', 120, 25);
            break;
        case 11:
            text('December', 120, 25);
    }

    text('S', 15, 75);
    text('M', 65, 75);
    text('T', 115, 75);
    text('W', 165, 75);
    text('T', 215, 75);
    text('F', 265, 75);
    text('S', 315, 75);

    let daysInMonth;

    switch(month) {
        case 0:
            daysInMonth = 31;
            break;
        case 1:
            if(new Date().getYear() % 4 == 0 || new Date().getYear() % 400 == 0) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
            break;
        case 2:
            daysInMonth = 31;
            break;
        case 3:
            daysInMonth = 30;
            break;
        case 4:
            daysInMonth = 31;
            break;
        case 5:
            daysInMonth = 30;
            break;
        case 6:
            daysInMonth = 31;
            break;
        case 7:
            daysInMonth = 31;
            break;
        case 8:
            daysInMonth = 30;
            break;
        case 9:
            daysInMonth = 31;
            break;
        case 10:
            daysInMonth = 30;
            break;
        case 11:
            daysInMonth = 31;
    }

    let firstDay = new Date().getDay();
    let currentDate = new Date().getDate();
    console.log(currentDate);

    for(i =0; i < currentDate; i++) {
        if(firstDay < 0){
            firstDay = 6;
        } else {
            firstDay--;
        }
    }

    let dateX = firstDay * 50;
    let dateY = 100;

    for(i = 0; i < daysInMonth; i++) {
        if(dateX == 350) {
            dateX = 0;
            dateY += 50;
        }

        if((i+1) != currentDate) {
            fill(230);
        } else {
            fill(253, 253, 115);
        }
        rect(dateX, dateY, 50, 50);

        fill(0);
        text((i+1).toString(), dateX+20, dateY+30);

        dateX += 50;
    }
}