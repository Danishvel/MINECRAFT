var canvas = new fabric.Canvas("myCanvas");

B_H = 30;
B_W = 30;
B_X = 10;
B_Y = 10;
P_X = 10;
P_Y = 10;

var player_Ob = "";
var Block_Ob = "";

function Player_Update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_Ob = Img;

        player_Ob.scaleToHeight(140);
        player_Ob.scaleToWidth(150);

        player_Ob.set({
            top:P_Y,
            left:P_X
        });
        canvas.add(player_Ob);
    });

}

function New_Update(new_img){
    fabric.Image.fromURL(new_img, function(Img){
        Block_Ob = Img;

        Block_Ob.scaleToHeight(B_H);
        Block_Ob.scaleToWidth(B_W);

        Block_Ob.set({
            top:B_Y,
            left:B_X
        });
        canvas.add(Block_Ob);
    });

}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
    
    var keyPressed = e.keyCode;

    if (keyPressed == "38") {
        
        Up();
        console.log("Up");
    }

    if (keyPressed == "40") {
        
        Down();
        console.log("Down");
    }

    if (keyPressed == "37") {
        
        Left();
        console.log("Left");
    }

    if (keyPressed == "39") {
        
        Right();
        console.log("Right");
    }

    if (keyPressed == "67") {
        
        New_Update("cloud.jpg");
        console.log("C");
    }

    if (keyPressed == "68") {
        
        New_Update("dark_green.png");
        console.log("D_G");
    }

    if (keyPressed == "71") {
        
        New_Update("ground.png");
        console.log("G");
    }

    if (keyPressed == "76") {
        
        New_Update("light_green.png");
        console.log("L_G");
    }

    if (keyPressed == "82") {
        
        New_Update("roof.jpg");
        console.log("r");
    }

    if (keyPressed == "84") {
        
        New_Update("trunk.jpg");
        console.log("t");
    }

    if (keyPressed == "85") {
        
        New_Update("unique.png");
        console.log("u");
    }

    if (keyPressed == "87") {
        
        New_Update("wall.jpg");
        console.log("w");
    }

    if (keyPressed == "89") {
        
        New_Update("yellow_wall.png");
        console.log("y");
    }


    if (e.shiftKey == true && keyPressed == "80") {
        B_H = B_H + 10;
        B_W = B_W + 10;
        document.getElementById("wid").innerHTML = B_W;
        document.getElementById("hei").innerHTML = B_H;
        console.log("P and Shift Pressed");
    }

    if (e.shiftKey == true && keyPressed == "77") {
        B_H = B_H - 10;
        B_W = B_W - 10;
        document.getElementById("wid").innerHTML = B_W;
        document.getElementById("hei").innerHTML = B_H;
        console.log("M and Shift Pressed");
    }
}

function Up() {
    if (P_Y >= 10) {
        P_Y = P_Y - B_W;
        console.log("Player X = "+P_X+" & Player Y = "+P_Y);
        canvas.remove(player_Ob);
        Player_Update();
    }
}

function Down() {
    if (P_Y <= 500) {
        P_Y = P_Y + B_W;
        console.log("Player X = "+P_X+" & Player Y = "+P_Y);
        canvas.remove(player_Ob);
        Player_Update();
    }
}

function Left() {
    if (P_X >= 10) {
        P_X = P_X - B_W;
        console.log("Player X = "+P_X+" & Player Y = "+P_Y);
        canvas.remove(player_Ob);
        Player_Update();
    }
}

function Right() {
    if (P_X <= 700) {
        P_X = P_X + B_W;
        console.log("Player X = "+P_X+" & Player Y = "+P_Y);
        canvas.remove(player_Ob);
        Player_Update();
    }
}