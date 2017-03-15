/*Javascript
Kevin Blanco Villegas
DAW 1a*/
  
var formElement=null;
var numeroSecreto=null;
var respuestaSelect=null;
var respuestaSelect2=null;
var respuestaSelect3=null;
var respuestaSelect31=null;
var respuestaSelect4=null;
var respuestaSelect41=null;
var respuestaSelect42=null;
var respuestaSelect43=null;
var respuestasCheckbox = [];
var respuestasCheck = [];
var respuestasRadio = [];
var respuestasRadio2 = [];
var nota = 0;

var titulo="";
window.onload=function(){
	
	formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
	 inicializar();
   corregirTexto();
	 corregirTexto2();
	 corregirCheckbox();
	 corregirCheckbox2();
	 corregirSelect();
	 corregirSelect2();
	 corregirRadio();
	 corregirRadio2();
	 corregirSelect3();
	 corregirSelect4();
	 mostrar();
    presentarNota();
   return false;
 }

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  gestionarXml(this);
 }
}
/*ruta de documento xml para que lo cargue porque tiene que estar en un servidor*/
xhttp.open("GET", "https://rawgit.com/kevinblancovillegas/cuestionario_final/master/preguntas_grupo_d.xml", true);
xhttp.send();

function gestionarXml(dadesXml){
var xmlDoc = dadesXml.responseXML;
  titulo= xmlDoc.getElementById('jklm_001').getElementsByTagName('title')[0].innerHTML;
  ponerTitulo(titulo);
  respuesta=xmlDoc.getElementsByTagName('answer')[0].innerHTML;
  titulo=titulo;
  
 var xmlDoc = dadesXml.responseXML;
  titulo= xmlDoc.getElementById('jklm_002').getElementsByTagName('title')[0].innerHTML;
  ponerTitulo1(titulo);
  respuesta2=xmlDoc.getElementsByTagName('answer')[1].innerHTML;
  titulo=titulo; 

   var tituloCheckbox = xmlDoc.getElementById('jklm_003').getElementsByTagName("title")[0].innerHTML;
 var opcionesCheckbox = [];

 var nopt = xmlDoc.getElementById("jklm_003").getElementsByTagName('option').length;
 for (i = 0; i < nopt; i++) { 
    opcionesCheckbox[i]=xmlDoc.getElementById("jklm_003").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);
 var nres = xmlDoc.getElementById("jklm_003").getElementsByTagName("answer").length;
 for (i = 0; i < nres; i++) { 
   respuestasCheckbox[i]=xmlDoc.getElementById("jklm_003").getElementsByTagName("answer")[i].innerHTML;
 }
    var tituloCheck = xmlDoc.getElementById('jklm_004').getElementsByTagName("title")[0].innerHTML;
 var opcionesCheck = [];
 var nop = xmlDoc.getElementById("jklm_004").getElementsByTagName('option').length;
 for (i = 0; i < nop; i++) { 
     opcionesCheck[i]=xmlDoc.getElementById("jklm_004").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosCheckHtml(tituloCheck,opcionesCheck);
 var nres1 = xmlDoc.getElementById("jklm_004").getElementsByTagName('answer').length;
 for (i = 0; i < nres1; i++) { 
  respuestasCheck[i]=xmlDoc.getElementById("jklm_004").getElementsByTagName("answer")[i].innerHTML;
 }
 
  var tituloSelect=xmlDoc.getElementById('jklm_005').getElementsByTagName("title")[0].innerHTML;
 var opcionesSelect = [];
 var nopt = xmlDoc.getElementById("jklm_005").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelect[i] = xmlDoc.getElementById("jklm_005").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtml(tituloSelect,opcionesSelect);
 respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);
 
   var tituloSelectx=xmlDoc.getElementById('jklm_006').getElementsByTagName("title")[0].innerHTML;
 var opcionesSelectx = [];
 var nopt = xmlDoc.getElementById("jklm_006").getElementsByTagName('option').length;
  for (i = 0; i < nopt; i++) { 
    opcionesSelectx[i] = xmlDoc.getElementById("jklm_006").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosSelectHtmlx(tituloSelectx,opcionesSelectx);
 respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[5].innerHTML);

     var tituloRadio = xmlDoc.getElementById('jklm_007').getElementsByTagName("title")[0].innerHTML;
 var opcionesRadio = [];
 var noR = xmlDoc.getElementById("jklm_007").getElementsByTagName('option').length;
 for (i = 0; i < noR; i++) { 
     opcionesRadio[i]=xmlDoc.getElementById("jklm_007").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosRadioHtml(tituloRadio,opcionesRadio);
 var nresrad = xmlDoc.getElementById("jklm_007").getElementsByTagName('answer').length;
 for (i = 0; i < nresrad; i++) { 
  respuestasRadio[i]=xmlDoc.getElementById("jklm_007").getElementsByTagName("answer")[i].innerHTML;
 }

    var tituloRadio1 = xmlDoc.getElementById('jklm_008').getElementsByTagName("title")[0].innerHTML;
 var opcionesRadio1 = [];
 var noF = xmlDoc.getElementById("jklm_008").getElementsByTagName('option').length;
 for (i = 0; i < noF; i++) { 
     opcionesRadio1[i]=xmlDoc.getElementById("jklm_008").getElementsByTagName('option')[i].innerHTML;
 }  
 ponerDatosRadio1Html(tituloRadio1,opcionesRadio1);
 var nresrad = xmlDoc.getElementById("jklm_008").getElementsByTagName('answer').length;
 for (i = 0; i < nresrad; i++) { 
  respuestasRadio2[i]=xmlDoc.getElementById("jklm_008").getElementsByTagName("answer")[i].innerHTML;
 }
 
   var tituloMultiple=xmlDoc.getElementById('jklm_009').getElementsByTagName("title")[0].innerHTML;
 var opcionesMultiple = [];
 var noM = xmlDoc.getElementById("jklm_009").getElementsByTagName('option').length;
  for (i = 0; i < noM; i++) { 
    opcionesMultiple[i] = xmlDoc.getElementById("jklm_009").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultipleHtml(tituloMultiple,opcionesMultiple);
 respuestaSelect3=parseInt(xmlDoc.getElementsByTagName("answer")[8].innerHTML);
 respuestaSelect31=parseInt(xmlDoc.getElementsByTagName("answer")[9].innerHTML);
 
    var tituloMultiple=xmlDoc.getElementById('jklm_010').getElementsByTagName("title")[0].innerHTML;
 var opcionesMultiple = [];
 var noM1 = xmlDoc.getElementById("jklm_010").getElementsByTagName('option').length;
  for (i = 0; i < noM1; i++) { 
    opcionesMultiple[i] = xmlDoc.getElementById("jklm_010").getElementsByTagName('option')[i].innerHTML;
 }
 ponerDatosMultiple1Html(tituloMultiple,opcionesMultiple);
 respuestaSelect4=parseInt(xmlDoc.getElementsByTagName("answer")[10].innerHTML);
 respuestaSelect41=parseInt(xmlDoc.getElementsByTagName("answer")[11].innerHTML);


  function ponerTitulo(t){
	 document.getElementsByTagName('h3')[0].innerHTML=t;
  }
   function ponerTitulo1(t){
  }
  
  function ponerDatosCheckboxHtml(t,opt){
 var checkboxContainer=document.getElementById('divcheck1');
 document.getElementById('jklm_003').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color_"+i);
    input.type="checkbox";
    input.name="color";
    input.id="color_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}

  function ponerDatosCheckHtml(ti,opti){
 var checkContainer=document.getElementById('divcheck2');
 document.getElementById('jklm_004').innerHTML = ti;
 for (i = 0; i < opti.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opti[i];
    label.setAttribute("for", "color2_"+i);
    input.type="checkbox";
    input.name="color2";
    input.id="color2_"+i;;    
    checkContainer.appendChild(input);
    checkContainer.appendChild(label);
 }  
}


function ponerDatosSelectHtml(tu,optu){
  document.getElementById("jklm_005").innerHTML=tu;
  var select = document.getElementsByTagName("select")[0];
  for (i = 0; i < optu.length; i++) { 
    var option = document.createElement("option");
    option.text = optu[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

function ponerDatosSelectHtmlx(tx,optx){
  document.getElementById("jklm_006").innerHTML=tx;
  var select = document.getElementsByTagName("select")[1];
  for (i = 0; i < optx.length; i++) { 
    var option = document.createElement("option");
    option.text = optx[i];
    option.value=i+1;
    select.options.add(option);
 }  
}

  function ponerDatosRadioHtml(t,opt){
 var checkboxContainer=document.getElementById('divradio1');
 document.getElementById('jklm_007').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color3_"+i);
    input.type="radio";
    input.name="color3";
    input.id="color3_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}
  function ponerDatosRadio1Html(t,opt){
 var checkboxContainer=document.getElementById('divradio2');
 document.getElementById('jklm_008').innerHTML = t;
 for (i = 0; i < opt.length; i++) { 
    var input = document.createElement("input");
    var label = document.createElement("label");
    label.innerHTML=opt[i];
    label.setAttribute("for", "color4_"+i);
    input.type="radio";
    input.name="color4";
    input.id="color4_"+i;;    
    checkboxContainer.appendChild(input);
    checkboxContainer.appendChild(label);
 }  
}

function ponerDatosMultipleHtml(tu,optu){
  document.getElementById("jklm_009").innerHTML=tu;
  var multiple = document.getElementsByTagName("select")[2];
  for (i = 0; i < optu.length; i++) { 
    var option = document.createElement("option");
    option.text = optu[i];
    option.value=i+1;
    multiple.options.add(option);
 }  
}

function ponerDatosMultiple1Html(tu,optu){
  document.getElementById("jklm_010").innerHTML=tu;
  var multiple = document.getElementsByTagName("select")[3];
  for (i = 0; i < optu.length; i++) { 
    var option = document.createElement("option");
    option.text = optu[i];
    option.value=i+1;
    multiple.options.add(option);
 }  
}


function darRespuestaHtml(r){
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota(){
   darRespuestaHtml("Nota: "+nota+" puntos sobre 10");
}

function inicializar(){
   document.getElementById('resultadosDiv').innerHTML = "";
   nota=0.0;
}

function corregirTexto(){

  var s=formElement.elements[0].value;     
  if (s==respuesta) {
   darRespuestaHtml("1.- Respuesta correcta");
   nota +=1;
  }
  else {
	  darRespuestaHtml("1.- Respuesta incorrecta");
  }
}

function corregirTexto2(){
  var s=formElement.elements[1].value;     
  if (s==respuesta2) {
   darRespuestaHtml("2.- Respuesta correcta");
   nota +=1;
  }
  else {
	  darRespuestaHtml("2.- Respuesta incorrecta");
  }
}

function corregirCheckbox(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color.length; i++) {  
   if (f.color[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheckbox.length; j++) {
     if (i==respuestasCheckbox[j]) escorrecta[i]=true;
    }

    if (escorrecta[i]) {
     nota +=1 
     darRespuestaHtml("3.- Respuesta correcta");    
    } else {
     darRespuestaHtml("3.- Respuesta Incorrecta");
    }   
   } 
  }
}

function corregirCheckbox2(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color2.length; i++) {  
   if (f.color2[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasCheck.length; j++) {
     if (i==respuestasCheck[j]) escorrecta[i]=true;
    }
    if (escorrecta[i]) {
     nota +=1 
     darRespuestaHtml("4.- Respuesta correcta");    
    } else {
     darRespuestaHtml("4.- Respuesta Incorrecta");
    }   
   } 
  }
}

function corregirSelect(){
  var sel = formElement.elements[13];  
  if (sel.selectedIndex==respuestaSelect) { 
   darRespuestaHtml("5.- respuesta correcta");
   nota +=1;
  }
  else darRespuestaHtml("5.- respuesta incorrecta");
}

function corregirSelect2(){
  var sel = formElement.elements[14];  
  if (sel.selectedIndex==respuestaSelect2) { 
   darRespuestaHtml("6.- respuesta correcta");
   nota +=1;
  }
  else darRespuestaHtml("6.- respuesta incorrecta");
}


function corregirRadio(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color3.length; i++) {  
   if (f.color3[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasRadio.length; j++) {
     if (i==respuestasRadio[j]) escorrecta[i]=true;
    }
    if (escorrecta[i]) {
     nota +=1 
     darRespuestaHtml("7.- respuesta correcta");    
    } else {
     darRespuestaHtml("7.- respuesta incorrecta");
    }   
   } 
  }
}

function corregirRadio2(){
  var f=formElement;
  var escorrecta = [];
  for (i = 0; i < f.color4.length; i++) {  
   if (f.color4[i].checked) {
    escorrecta[i]=false;     
    for (j = 0; j < respuestasRadio2.length; j++) {
     if (i==respuestasRadio2[j]) escorrecta[i]=true;
    }
    if (escorrecta[i]) {
     nota +=1 
     darRespuestaHtml("8.- respuesta correcta");    
    } else {
     darRespuestaHtml("8.- respuesta incorrecta");
    }   
   } 
  }
}

function corregirSelect3(){
  var sel = formElement.elements[23];  
  if (sel.selectedIndex==respuestaSelect3&&respuestaSelect31) { 
   darRespuestaHtml("9.- respuesta correcta");
   nota +=1;
  }
  else darRespuestaHtml("9.- respuesta incorrecta");
}

function corregirSelect4(){
  var sel = formElement.elements[24];  
  if (sel.selectedIndex==respuestaSelect4&&respuestaSelect41&&respuestaSelect42&&respuestaSelect43) { 
    darRespuestaHtml("10.- respuesta correcta");
    nota +=1;
  }
  else darRespuestaHtml("10.- respuesta incorrecta");
}
}

function mostrar(){
  document.getElementById('resultadosDiv').style.display = 'block';}
}