var bulletSpeed:int;


function Update() {

// amount to move bullet
amtToMove = bulletSpeed * Time.deltaTime;

transform.Translate(Vector3.up * amtToMove);

	if(transform.position.y >= 6.5){
	
		Destroy(gameObject);
	
	}
}

function OnTriggerEnter(otherObject: Collider) {

	if(otherObject.gameObject.tag == 'enemy') {
		playerScript.playerScore += 100;
	}

}