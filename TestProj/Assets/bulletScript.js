

var bulletSpeed:int;

var explosion: Transform;

function Update() {

// amount to move bullet
amtToMove = bulletSpeed * Time.deltaTime;

transform.Translate(Vector3.up * amtToMove);

	if(transform.position.y >= 6.5){
	
		Destroy(gameObject);
	
	}
}

function OnTriggerEnter(otherObject: Collider) {

//if bullet hits otherObject('enemy') then
	if(otherObject.gameObject.tag == 'enemy') {
	
		//increase score by 100
		playerScript.playerScore += 100;										
		
		//reset enemy to top of the screen	
		otherObject.gameObject.transform.position.y = 7;						
		//in a random x position between -6 and 6
		otherObject.gameObject.transform.position.x = Random.Range(-6, 6);
		
		var tempExplosion = Instantiate(explosion, transform.position, transform.rotation);		
		
		//get rid of bullet clone
		Destroy(gameObject);												
	}

}