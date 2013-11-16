#pragma strict
var hit : RaycastHit;
var planted : boolean = false;
var readytocollect : boolean = false;
var time = 0;
var money = 0;

var startTime:int;
var timer1:int;


var Stuff : Transform;
var temp = GameObject.Instantiate(Stuff);


var Harvest : Transform;
var tempHarvest = GameObject.Instantiate(Harvest);



/*
function OnGUI () {
	if(readytocollect == true)
	{
		if (GUI.Button(Rect(200,200,200,30),"Please collect the coins"))
	 	{
	    	readytocollect = false;
	    	Destroy(temp.gameObject);
	    	PlayerCounter.addCoin(money);
	    	Debug.Log("You have " + PlayerCounter.coinCounter + " coins");
	    }
	}
}*/
     
     
function Update () {

	//var seedling = GameObject.Instantiate(Stuff);
	
	if(Input.GetMouseButtonDown(0) && collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit,Mathf.Infinity) 
		&& readytocollect == true && planted == false) {
		Debug.Log("testingtesting");
		readytocollect = false;
    	Destroy(tempHarvest.gameObject);
    	PlayerCounter.addCoin(money);
    	Debug.Log("You have " + PlayerCounter.coinCounter + " coins");
	}
			
	else if(Input.GetMouseButtonDown(0) && collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit,Mathf.Infinity) 
			&& readytocollect == false && planted == false) {
		Debug.Log("Hello");



		if(WorldGUI.picked)
		{
			var plant0 : Plant = WorldGUI.seed;
			plant0.quantity --;
			
			if(plant0.quantity <= 0)
			{
				WorldGUI.picked = false;
			}
					
			time = plant0.duration;
			money = plant0.income;
			Debug.Log(plant0.type);
			planted = true;
			startTime = Time.time; //time starter
			var seedling = GameObject.Instantiate(Stuff);
			seedling.transform.position = Vector3 (transform.position.x, 1, 0);
			temp = seedling;
			//Debug.Log(transform.position.x + " " + transform.position.y);
		}

	}
	
	timer1 = Time.time;  //Set time
 
	
	if(planted == true && timer1 > startTime + time)
	{
		Debug.Log("Testing");
		planted = false;
		readytocollect = true;
		
		
		Destroy(temp.gameObject);
		
		var grown = GameObject.Instantiate(Harvest);
		grown.transform.position = Vector3 (transform.position.x, 1.5, 0);
		tempHarvest = grown;
	}
}