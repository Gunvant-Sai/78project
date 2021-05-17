var images =
["Yessssss.jpg",
"Yes.jpg",
"Save a copti.jpg"];

var names = ["Gunvant Sai B.V Reddy","Goutami jampala","B.V Raghavendra Reddy"];

var i = 0;

function update()
{
    i++;
    var nameofthenextfamilymemberarray = 2
    if(i > nameofthenextfamilymemberarray )
    {
        i = 0;
    }
    var updateImage = images[i];
    var updateName = names[i];
    document.getElementById("family_member_image").src = updateImage;
    document.getElementById("family_member_name").innerHTML = updateName;
}