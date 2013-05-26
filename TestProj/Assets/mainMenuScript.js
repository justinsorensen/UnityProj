

function OnGUI(){

	instructionText = "Instructions\nPress Left and Right Arrows(or A and D)\nPress Spacebar to fire";
	
	GUI.Label(Rect(10,10,400,200),instructionText);
	
	if(GUI.Button(Rect(10,60,200,50),"Start Game")) {
	
		Application.LoadLevel(1);
		
	}
	
}