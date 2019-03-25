const __WIDTH = 500, __HEIGHT = 500, __GRIDNUM = 25, __FPS = 4, __SPEED = __WIDTH / __GRIDNUM;

export default class GameInfo {
    constructor(){
        this.__WIDTH = 500
        this.__HEIGHT = 500
        this.__GRIDNUM = 25
        this.__FPS = 4
        this.__SPEED = __WIDTH / __GRIDNUM
        this.__GRIDWIDTH = __WIDTH / __GRIDNUM
    }
     initGame(mycanvas, ctx){
        mycanvas.setAttribute('width', __WIDTH)
        mycanvas.setAttribute('height', __HEIGHT)
        this.drawBg(ctx)
     }
     drawBg(ctx){
        ctx.beginPath();
        for(var i = 1; i < __GRIDNUM; i++){
            ctx.moveTo(this.__GRIDWIDTH * i,0)
            ctx.lineTo(this.__GRIDWIDTH * i, __WIDTH);
            ctx.stroke()
            ctx.moveTo(0, this.__GRIDWIDTH * i);
            ctx.lineTo(this.__WIDTH, this.__GRIDWIDTH * i);
            ctx.stroke()
        }		
    }
   

}