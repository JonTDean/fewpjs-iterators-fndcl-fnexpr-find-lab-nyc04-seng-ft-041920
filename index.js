const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(aoh){
  //Each property has a Year and a Result
  let x = aoh.find( game => isWin(game));

	if (x){
		return x.year
	}else{
		return undefined
	}
}

function isWin(game){
  if(game.result == "W"){
    return game.result
  }else{
    return undefined
  }
}