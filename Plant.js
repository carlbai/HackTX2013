#pragma strict
public class Plant extends MonoBehaviour{

	public var quantity:int;
	public var type;
	public var timer;
	public var income;
	
	public function Plant(type, quantity : int)
	{
		this.type = type;
		this.quantity = quantity;
		this.timer = timer;
		this.income = income;
	}
}

/*
static var peach = new Plant();
peach.name = "peach";
peach.quantity = 5;


static var ListPlants= new Array();
ListPlants[0] = peach;

*/


/*
function Start () {

}

function Update () {
	Debug.Log(peach.name + " has " + peach.quantity);
}*/