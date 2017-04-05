function add()
{
//	document.getElementById("test").innerHTML=document.getElementById("prenom").value + "\n" + document.getElementById("nom").value + "\n" + document.getElementById("numero").value + "\n" + document.getElementById("section").value;


	var paragraphe1=document.createElement("p");
	var node1=document.createTextNode(document.getElementById("prenom").value)
	paragraphe1.appendChild(node1);
	var element=document.getElementById("modifDOM");
	element.appendChild(paragraphe1);

	var paragraphe2=document.createElement("p");
	var node2=document.createTextNode(document.getElementById("nom").value)
	paragraphe.appendChild(node2);
	element=document.getElementById("modifDOM");
	element.appendChild(paragraphe2);

	var paragraphe3=document.createElement("p");
	var node3=document.createTextNode(document.getElementById("numero").value)
	paragraphe.appendChild(node3);
	element=document.getElementById("modifDOM");
	element.appendChild(paragraphe3);

	var paragraphe4=document.createElement("p");
	var node4=document.createTextNode(document.getElementById("section").value)
	paragraphe.appendChild(node4);
	element=document.getElementById("modifDOM");
	element.appendChild(paragraphe4);

}

function compte()
{
	 var liste = document.getElementsByTagName("p");
	 document.getElementById("test").innerHTML = liste.length; 
}

add();

compte();

