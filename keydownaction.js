
var registerMoveListener = (e) => {
		console.log('keydown')
		switch(e.keyCode){
			case 37:
				log('arrow_left')
				Oworm.changeDirection(-1)
				break;
			case 38:
				log('arrow_top')
				Oworm.changeDirection(-2)
				break;
			case 39:
				log('arrow_right')
				Oworm.changeDirection(1)
				break;
			case 40:
				log('arrow_down')
				Oworm.changeDirection(2)
				break;
			
		}
}
var registerControlListener = (e) => {
	switch(e.keyCode){
		case 32:
			console.log(isStop)
			if(isStop){
				goOnGame()
			}else{
				stopGame()
			}
			break;
	}
}
var registerMoveAction = () => {
	document.addEventListener('keydown', registerMoveListener, false)
}
var registerControlAction = () => {
	document.addEventListener('keydown', registerControlListener, false)
}
var deleteMoveAction = () => {
	document.removeEventListener('keydown', registerMoveListener, false)
}
var deleteControlAction = () => {
	document.removeEventListener('keydown', registerControlListener, false)
}

var actionmap = {
	R_MOVE:registerMoveAction,
	R_CONTROL:registerControlAction,
	D_MOVE:deleteMoveAction,
	D_CONTROL:deleteControlAction,
}
var handleAction = (event) => {
	actionmap[event]()
}