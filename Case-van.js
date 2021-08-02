//khai báo biến của tấm ván
let paddle = {
    width: 80,
    height: 10,
    x: 0,
    y: canvas.height - 10,
    speed: 10,
    isLeft: false,
    isRight: false
}



//  vẽvánđỡbóng
function drawpaddle()
{
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height)
    ctx.fillStyle = getRandomColor()
    ctx.fill()
    ctx.closePath()
}



//logic chuyển động của tấm ván
function logicpaddle()
{
    if (paddle.isLeft) {
        paddle.x -= paddle.speed
    }
    else if(paddle.isRight)
    {
        paddle.x += paddle.speed
    }
    if (paddle.x < 0) {
        paddle.x = 0
    }
    else if(paddle.x > canvas.width - paddle.width)
    {
        paddle.x = canvas.width - paddle.width
    }
}