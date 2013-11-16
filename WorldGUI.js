#pragma strict
	
static var PlantArray = new Array(Plant);
static var seed;
static var picked : boolean;

function Start () {
	var peach = Plant("peach", 5, 2, 100);
	PlantArray[0] = peach;

	var apple = Plant("apple", 0, 3, 200);
	PlantArray[1] = apple;	

	var honeydew = Plant("honeydew", 1, 4, 300);
	PlantArray[2] = honeydew;	
	
	var watermelon = Plant("watermelon", 1, 5, 400);
	PlantArray[3] = watermelon;	

	var strawberry = Plant("strawberry", 1, 6, 500);
	PlantArray[4] = strawberry;	
	
	var pomegranate = Plant("pomegranate", 1, 7, 600);
	PlantArray[5] = pomegranate;			
	//Debug.Log(PlantArray[0].testing());
	
	picked = false;
}

function Update () {

}

function OnGUI(){
	var coinNumberName = PlayerCounter.coinCounter;
	var coinName = coinNumberName.ToString();
	GUI.Label(Rect(10, 10, 50, 25), coinName);

	var count = 0;
	for(var i = 0; i < PlantArray.length; i++)
	{
		var plant0 : Plant = PlantArray[i];
		//Debug.Log(plant0.type);
		var type = plant0.type.ToString();
		var quantity = plant0.quantity.ToString();
		if(plant0.quantity > 0)
		{
			if(GUI.Button(Rect((Screen.width - 100), count * 20, 100, 20),type + " " + quantity))
			{
				seed = plant0;
				picked = true;
				Debug.Log(plant0.type);
			}
			count ++;
		}
	}
}
