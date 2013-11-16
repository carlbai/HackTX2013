#pragma strict
var hit : RaycastHit;
var planted : boolean = false;
var readytocollect : boolean = false;
var time = 0;
var money = 0;

var startTime:int;
var timer1:int;


var SeedlingImg : Transform;
var tempSeedling = GameObject.Instantiate(SeedlingImg);

var PeachImg : Transform;
var tempPeach = GameObject.Instantiate(PeachImg);

var AppleImg : Transform;
var tempApple = GameObject.Instantiate(AppleImg);

var HoneydewImg : Transform;
var tempHoneydew = GameObject.Instantiate(HoneydewImg);

var WatermelonImg : Transform;
var tempWatermelon = GameObject.Instantiate(WatermelonImg);

var StrawberryImg : Transform;
var tempStrawberry = GameObject.Instantiate(StrawberryImg);

var PomegranateImg : Transform;
var tempPomegranate = GameObject.Instantiate(PomegranateImg);


var planttype;
     
function Update () {

	//var seedling = GameObject.Instantiate(Stuff);
	
	if(Input.GetMouseButtonDown(0) && collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit,Mathf.Infinity) 
		&& readytocollect == true && planted == false) {
		Debug.Log("testingtesting");
		readytocollect = false;
		
		
		
		
		if(planttype.Equals("peach"))
		{
			Destroy(tempPeach.gameObject);
		}
		
		if(planttype.Equals("apple"))
		{
			Destroy(tempApple.gameObject);
		}
		
		if(planttype.Equals("honeydew"))
		{
			Destroy(tempHoneydew.gameObject);
		}
		
		if(planttype.Equals("watermelon"))
		{
			Destroy(tempWatermelon.gameObject);
		}						

		if(planttype.Equals("strawberry"))
		{
			Destroy(tempStrawberry.gameObject);
		}		

		if(planttype.Equals("pomegranate"))
		{
			Destroy(tempPomegranate.gameObject);
		}	
		
		
		
		
		
    	
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
			planttype = plant0.type;
			Debug.Log(plant0.type);
			planted = true;
			startTime = Time.time; //time starter
			var temp = GameObject.Instantiate(SeedlingImg);
			temp.transform.position = Vector3 (transform.position.x, 1, 0);
			tempSeedling = temp;
			//Debug.Log(transform.position.x + " " + transform.position.y);
		}

	}
	
	timer1 = Time.time;  //Set time
 
	
	if(planted == true && timer1 > startTime + time)
	{
		Debug.Log("Testing");
		planted = false;
		readytocollect = true;
		
		
		Destroy(tempSeedling.gameObject);
		if(planttype.Equals("peach"))
		{
			Debug.Log(planttype);
			var temp1 = GameObject.Instantiate(PeachImg);
			temp1.transform.position = Vector3 (transform.position.x, 1.5, 0);
			tempPeach = temp1;
		}
		
		if(planttype.Equals("apple"))
		{
			Debug.Log(planttype);
			var temp2 = GameObject.Instantiate(AppleImg);
			temp2.transform.position = Vector3 (transform.position.x, 1.5, 0);
			tempApple = temp2;
		}
		
		if(planttype.Equals("honeydew"))
		{
			Debug.Log(planttype);
			var temp3 = GameObject.Instantiate(HoneydewImg);
			temp3.transform.position = Vector3 (transform.position.x, 1.5, 0);
			tempHoneydew = temp3;
		}
		
		if(planttype.Equals("watermelon"))
		{
			Debug.Log(planttype);
			var temp4 = GameObject.Instantiate(WatermelonImg);
			temp4.transform.position = Vector3 (transform.position.x, 1.5, 0);
			tempWatermelon = temp4;
		}						

		if(planttype.Equals("strawberry"))
		{
			Debug.Log(planttype);
			var temp5 = GameObject.Instantiate(StrawberryImg);
			temp5.transform.position = Vector3 (transform.position.x, 1.5, 0);
			tempStrawberry = temp5;
		}		

		if(planttype.Equals("pomegranate"))
		{
			Debug.Log(planttype);
			var temp6 = GameObject.Instantiate(PomegranateImg);
			temp6.transform.position = Vector3 (transform.position.x, 1.5, 0);
			tempPomegranate = temp6;
		}		
	}
}