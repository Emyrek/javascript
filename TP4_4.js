function add()
{
//	document.getElementById("test").innerHTML=document.getElementById("prenom").value + "\n" + document.getElementById("nom").value + "\n" + document.getElementById("numero").value + "\n" + document.getElementById("section").value;


	var paragraphe=document.createElement("p");
	var node=document.createTextNode("Vous vous appelez " + document.getElementById("prenom").value + " " + document.getElementById("nom").value + ", votre numéro étudiant est " + document.getElementById("numero").value + ", et vous êtes en " + document.getElementById("section").value );
	paragraphe.appendChild(node);
	var element=document.getElementById("modifDOM");
	element.appendChild(paragraphe);

}

