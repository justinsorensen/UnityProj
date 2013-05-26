

var enemySpeed: int;

function Update () {

	amtToMove = enemySpeed * Time.deltaTime;
	
	transform.Translate(Vector3.down * amtToMove);
	
	if(transform.position.y <= -6.5){
		
		//move enemy back to the top of the screen
		transform.position.y = 7;
		
		//randomly place enemy between the x values of -6 and 6
		transform.position.x = Random.Range(-6, 6);
	}
}