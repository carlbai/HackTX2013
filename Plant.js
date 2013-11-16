#pragma strict

//Plant class
public class Plant extends MonoBehaviour{

	public var quantity:int;
	public var type;
	public var duration;
	public var income;
	
	public function Plant(type, quantity : int, duration : int, income : int)
	{
		this.type = type;
		this.quantity = quantity;
		this.duration = duration;
		this.income = income;
	}
}

