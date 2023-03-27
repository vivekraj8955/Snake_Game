let inputDir={x:0,y:0};
let speed=5;
let lastPaintTime =0;
let score=0;
let snakeArr=[
    {x:13,y:15}
]

food={x:6,y:7};

function main(ctime)
{
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed)
    return;
    lastPaintTime=ctime;
    
    gameEngine();
}


function isCollide(sarr)
{
    for(let i=1;i<snakeArr.length;i++)
    {
        if(snakeArr[i].x==snakeArr[0].x&&(snakeArr[i].y==snakeArr[0].y))
        return true;
    }
        if(snakeArr[0].x>=18||snakeArr[0].x<=0)
        return true;
        if(snakeArr[0].y>=18||snakeArr[0].y<=0)
        return true;
    return false;
}

function gameEngine(){
    // update snake
    if(isCollide(snakeArr)){
        inputDir={x:0,y:0};
        alert('game over');
        snakeArr=[{x:13,y:13}];
        score=0;
    }

//    if food eaten

if(snakeArr[0].y==food.y&&snakeArr[0].x==food.x){
    snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y});
    let a=2;
    let b=16;
    food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    console.log(food.x,food,y);
}

// moving the snake
for(let i=snakeArr.length-2;i>=0;i--)
{
    snakeArr[i+1]={...snakeArr[i]};
}

snakeArr[0].x+=inputDir.x;
snakeArr[0].y+=inputDir.y;


board.innerHTML="";
snakeArr.forEach((e,index)=>{
    snakeElement=document.createElement('div');
    snakeElement.style.gridRowStart=e.y;
    snakeElement.style.gridColumnStart=e.x;

    if(index==0)
    snakeElement.classList.add('head');
    else
    snakeElement.classList.add('snake');

    board.appendChild(snakeElement);
})

// displey the food

    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}

// main logic start here
window.requestAnimationFrame(main);

window.addEventListener('keydown',e=>{
    // start the game
    inputDir={x:0,y:0}
    switch(e.key){
        case "ArrowUp":
        inputDir.x=0;
        inputDir.y=-1;
        break;

        case "ArrowDown":
        inputDir.x=0;
        inputDir.y=1;
        break;

        case "ArrowLeft":
        inputDir.x=-1;
        inputDir.y=0;
        break;

        case "ArrowRight":
        inputDir.x=1;
        inputDir.y=0;
        break;

        default:
            break;
    }

});