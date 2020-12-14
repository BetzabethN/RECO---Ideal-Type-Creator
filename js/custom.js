// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

// to check that only two pictures are selected
function ValidatePetSelection()  
{  
    var checkboxes = document.getElementsByName("pic_selection");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems > 2)  
    {  
        alert("사진 2장만 선택하세요!");  
        return false;  
    }  
}  