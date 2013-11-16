#pragma strict
var hit : RaycastHit;
var planted : boolean = false;
var readytocollect : boolean = false;

var startTime:int;
var timer1:int;

function OnGUI () {
	if(readytocollect == true)
	{
		if (GUI.Button(Rect(200,200,200,30),"Please collect the coins"))
	 	{
	    	readytocollect = false;
	    	//PlayerCounter.coinCounter += 100;
	    	PlayerCounter.addCoin(100);
	    	Debug.Log("You have " + PlayerCounter.coinCounter + " coins");
	    }
	}
}
     
     
function Update () {
	if(Input.GetMouseButtonDown(0) && collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit,Mathf.Infinity) 
			&& readytocollect == false && planted == false) {
		Debug.Log("Hello");


		if(WorldGUI.picked)
		{
		
			var plant0 : Plant = WorldGUI.seed;
			plant0.quantity --;
			Debug.Log(plant0.type);
			planted = true;
			startTime = Time.time; //time starter
		}

	}
	
	timer1 = Time.time;  //Set time
 
	
	if(planted == true && timer1 > startTime + 5)
	{
		Debug.Log("Testing");
		planted = false;
		readytocollect = true;
	}
}