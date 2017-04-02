var tab=[10,15,6,14,14,13,19,10,17,9];
var bool=1;
//document.getElementById("aaa").innerHTML=document.write(Boolean(bool));

function affTab(tab,bool)
{
	var i=0;
			document.getElementById("aaa").innerHTML=document.write(Boolean(bool));
	for(i=0;i<10;i++)
	{
		if(Boolean(bool)=="true")
		{
			document.getElementById("aaa").innerHTML=document.write(tab[i] + " ");
		}
	
		else if(Boolean(bool)=="false")
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
			document.getElementById("aaa").innerHTML=document.write(Boolean(bool));
	}


	i=0;
	while(i<10)
	{
		if(Boolean(bool)=="true")
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
