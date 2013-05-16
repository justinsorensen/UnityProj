//I followed the tutorial thanks to www.unityjumpstart.com
//pickup video 2 @ 19min

var playerSpeed: int;

var playerLives: int;

static var playerScore: int;

var bullet: Rigidbody;

function Update () {

// amount to move player
//use Input.GetAxis(" ") for controller and keyboard in puts
amtToMove = (playerSpeed * Input.GetAxis("Horizontal")) * Time.deltaTime;

//move/translate the player object
//Vector3 concept
transform.Translate(Vector3.right * amtToMove);


	if(Input.GetKeyDown("space")) {
	
		var tempBullet: Rigidbody;
		
		tempBullet = Instantiate(bullet, transform.position, transform.rotation);
	
	}


}


//Creates GUI for player information
function OnGUI(){


//		  Rect(float left, float top, float width, float height)
GUI.Label(Rect(10,10,200,50),"Score: " + playerScore);

GUI.Label(Rect(10,30,200,50),"Lives: " + playerLives);


}