

function OnGUI() {

	if(GUI.Button(Rect(10,10,300,50), "You Lost. Press to Play Again.")) {
	
		Application.LoadLevel(0);
		
	}

}