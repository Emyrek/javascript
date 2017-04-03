var tab=[10,15,6,14,14,13,19,10,17,9];
var bool=3;

function affTab(tab,bool)
{
	if (typeof bool != "boolean")
	{
		alert("Error: bool is of type " + typeof bool);
	}
	var i=0;
	for(i=0;i<10;i++)
	{
		if(bool==true)
		{
			document.getElementById("aaa").innerHTML=document.write(tab[i] + " ");
		}
	
		else if(bool==false)
		{
			if(tab[i]<=15)
			{
				document.getElementById("aaa").innerHTML=document.write(tab[i] + " ");
			}
		}

		else
		{
			document.getElementById("aaa").innerHTML=document.write("ERREUR");
		}
	}


	i=0;
	while(i<10)
	{
		if(bool==true)
		{
			document.getElementById("aaa").innerHTML=document.write(tab[i] + " ");
		}
	
		else
		{
			if(tab[i]<15)
			{
				document.getElementById("aaa").innerHTML=document.write(tab[i] + " ");
			}
		}
		i++;
	}

}

function test()
{
	document.getElementById("aaa").innerHTML=document.write("42");
}

affTab(tab,bool);
