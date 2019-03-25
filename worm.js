import GameInfo from './gameInfo.js'
export default class Worm extends GameInfo{ 
    constructor(){
        super()
        this.health = []
	    this.direction = 1
        this.arrow = ''
        this.speed = 1
    }
    init(){
        this.health = [[2,2],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3]]
        this.direction = 1
        this.arrow ='x'
        this.speed = 1
    }
    drawWorm(ctx){
        var list = this.health
        ctx.fillStyle = 'black'
        for(var i = 0; i < list.length; i++){
            ctx.moveTo(this.__GRIDWIDTH*list[i][0],this.__GRIDWIDTH*list[i][1]);
            ctx.lineTo(this.__GRIDWIDTH*list[i][0],this.__GRIDWIDTH*(list[i][1] + 1))
            ctx.lineTo(this.__GRIDWIDTH*(list[i][0] + 1),this.__GRIDWIDTH*(list[i][1] + 1))
            ctx.lineTo(this.__GRIDWIDTH*(list[i][0] + 1),this.__GRIDWIDTH*list[i][1])
            ctx.lineTo(this.__GRIDWIDTH*list[i][0],this.__GRIDWIDTH*list[i][1])
        } 
        ctx.fill()
    }
    move(){
         this.health.shift()
         var cur = this.health[this.health.length -1]
         switch(this.direction){
             case 1:
                 cur = [cur[0] + this.speed, cur[1]]
                 break
             case 2:
                 cur = [cur[0], cur[1] + this.speed]
                 break
             case -1:
                 cur = [cur[0] - this.speed, cur[1]]
                 break
             case -2:
                 cur = [cur[0], cur[1] - this.speed]
                 break
         }
         this.health.push(cur)
         return this.judge(cur)
    }
    judge(position){
             return position.some(v => v == 0 || v == 25 - 1) || this.health.slice(0, this.health.length - 1).some(v => {
                 return v[0] == position[0] && v[1] == position[1]
             })
     }
}