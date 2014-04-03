
var formatoptionsvar =  'format: <select name="encryptparam" onChange="setFormat(this.form)">'+
  '<option value="">default</option> <option value=".key">key</option>'+
  '<option value=".iv">iv</option> <option value=".salt">salt</option>'+
  '<option value=".ciphertext">ciphertext</option>'+
  '</select><br>';

var encryptparam = '';

function iWantFormat(form) {
  if(form.doformat.checked) {
    document.getElementById('formatdiv').innerHTML = formatoptionsvar;
  } else {
    document.getElementById('formatdiv').innerHTML = '';
    encryptparam = '';
  }
}

function setFormat(form){
  encryptparam = form.encryptparam.value;
}

function startResults (form) {
  var message = form.inputbox.value;
  var secret  = form.keyphrase.value;
  var encstatus = 'Please fill all the fields';
  var encrptalgorithm = form.encrptalgorithm.value;

  for (var i = 0; i < 2; i++) {
    if (form.encryption[i].checked) {
      encstatus = form.encryption[i].value;
      break;
    }
  }

  var encrypted = eval('CryptoJS.' + encrptalgorithm + '.encrypt(message, secret)');
  var decrypted = eval('CryptoJS.' + encrptalgorithm + '.decrypt(message, secret)');

  if (encstatus == 'enc'){
    form.resultsarea.value = eval('encrypted' + encryptparam);
  } else if (encstatus == 'dec'){
    form.resultsarea.value = decrypted.toString(CryptoJS.enc.Utf8);
  } else {
    alert (encstatus);
  }
}