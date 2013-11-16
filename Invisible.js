#pragma strict
renderer.enabled = false;

var change : boolean = false;
function Start () {

}

function Update () {
	
	if(change)
	{
		renderer.enabled = true;
	}
}

static function changeRender(isPlanted){
	//change = true;
}