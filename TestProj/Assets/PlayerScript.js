

var playerSpeed: int;

var playerLives: int;

static var playerScore: int;

var bullet: Rigidbody;

var explosion: Transform;

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
	
	//win condition
	if(playerScore >= 500) {
		print("You win!!!!");
		Application.LoadLevel(3);
		playerScore = 0;
	}
	
	//lose condition
	if(playerLives <=0) {
	
		print("GAME OVER!");
		Application.LoadLevel(2);
		playerScore = 0;
	}


}


//Creates GUI for player information
function OnGUI(){


	//		  Rect(float left, float top, float width, float height)
	GUI.Label(Rect(10,10,200,50),"Score: " + playerScore);
	
	GUI.Label(Rect(10,30,200,50),"Lives: " + playerLives);


}

function OnTriggerEnter(otherObject: Collider) {

	if(otherObject.gameObject.tag == "enemy") {
	
		otherObject.gameObject.transform.position.y = 7;
		otherObject.gameObject.transform.position.x = Random.Range(-6,6);
		
		var tempExplosion: Transform;
		
		tempExplosion = Instantiate(explosion,transform.position,transform.rotation);
	
		playerLives--;
		
	}

}