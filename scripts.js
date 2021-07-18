function saveImage() {
	empName = document.getElementById('empName').value;
	arRadio = document.getElementById('arRadio').checked;
	enRadio = document.getElementById('enRadio').checked;
	let lang = arRadio?"ar":"en";
	imageURL = location.protocol + '//' + location.host +"/card.php?lang=" + lang + "&name=" + empName;
	const link = document.createElement('a');
	link.href = imageURL;
	link.download = 'card';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function changeName() {
	document.getElementById('empCardName').innerText = document.getElementById('empName').value;
}

function setAr() {
	document.getElementById('cardAr').hidden = false;
	document.getElementById('cardEn').hidden = true;
	document.getElementById('cardTextAr').hidden = false;
	document.getElementById('cardTextEn').hidden = true;
	// document.getElementById('cardTitleAr').hidden = false;
	// document.getElementById('cardTitleEn').hidden = true;
	document.getElementById('empNameLabel').innerText = "الاسم";
	document.getElementById('empName').placeholder = "اسمك";
	document.getElementById('downloadBtn').innerText = "تنزيل";
}

function setEn() {
	document.getElementById('cardAr').hidden = true;
	document.getElementById('cardEn').hidden = false;
	document.getElementById('cardTextAr').hidden = true;
	document.getElementById('cardTextEn').hidden = false;
	// document.getElementById('cardTitleAr').hidden = true;
	// document.getElementById('cardTitleEn').hidden = false;
	document.getElementById('empNameLabel').innerText = "Name";
	document.getElementById('empName').placeholder = "Your name";
	document.getElementById('downloadBtn').innerText = "Download";
}