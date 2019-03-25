constructor(){
		this.actionmap = {
			R_MOVE:registerMoveAction,
			R_CONTROL:registerControlAction,
			D_MOVE:deleteMoveAction,
			D_CONTROL:deleteControlAction,
		}
	}
	registerMoveListener(e, Oworm) {
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
	registerControlListener(e, gameInfo) {
		switch(e.keyCode){
			case 32:
				console.log(gameInfo.isStop)
				if(gameInfo.isStop){
					gameInfo.goOnGame()
				}else{
					gameInfo.stopGame()
				}
				break;
		}
	}
	registerMoveAction() {
		document.addEventListener('keydown', this.registerMoveListener, false)
	}
	registerControlAction() {
		document.addEventListener('keydown', this.registerControlListener, false)
	}
	deleteMoveAction() {
		document.removeEventListener('keydown', this.registerMoveListener, false)
	}
	deleteControlAction() {
		document.removeEventListener('keydown', this.registerControlListener, false)
	}
	handleAction(event) {
		this.actionmap[event]()
	}