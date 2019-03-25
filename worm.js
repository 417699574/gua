export default class worm{
    constructor(){
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
}