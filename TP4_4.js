function add()
{
//	document.getElementById("test").innerHTML=document.getElementById("prenom").value + "\n" + document.getElementById("nom").value + "\n" + document.getElementById("numero").value + "\n" + document.getElementById("section").value;


	var paragraphe=document.createElement("p");
	var node1=document.createTextNode(document.getElementById("prenom").value)
	paragraphe.appendChild(node1);
	var node2=document.createTextNode(document.getElementById("nom").value)
	paragraphe.appendChild(node2);
	var node3=document.createTextNode(document.getElementById("numero").value)
	paragraphe.appendChild(node3);
	var node4=document.createTextNode(document.getElementById("section").value)
	paragraphe.appendChild(node4);
	var element=document.getElementById("modifDOM");
	element.appendChild(paragraphe);
	compte();
}

function compte()
{
	 var liste = document.getElementsByTagName("p");
	 document.getElementById("test").innerHTML = liste.length-1; 
}
