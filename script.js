function conexionAT (cAtD,cAtE) {
  var cAT
  if (cAtD===true) {
    cAT="Delta"
  }
  else {
    cAT="Estrella"
  }
  return cAT;
}

function conexionBT (cBtD,cBtE) {
  var cBT
  if (cBtD===true) {
    cBT="Delta"
  }
  else {
    cBT="Estrella"
  }
  return cBT;
}

function financial(x,y) {
  return Number.parseFloat(x).toFixed(y);
}

function i (kVA,vLinea){
  return (kVA*1000)/(vLinea*Math.sqrt(3));
}


function vfase (vLinea,conexion){
  if (conexion==="Delta") {
    return (vLinea);
  } else {
    return (vLinea/Math.sqrt(3));
  }
}

function ifase (iLinea,conexion){
  if (conexion==="Delta") {
    return (iLinea/Math.sqrt(3));
  } else {
    return (iLinea);
  }
}





function calculos(){
  var kVA= document.getElementById("kVA").value;
  var vlAt=document.getElementById("vlAt").value;
  var vlBt=document.getElementById("vlBt").value;
  var cAtD=document.getElementById("cAtD").checked;
  var cAtE=document.getElementById("cAtE").checked;
  var cBtD=document.getElementById("cBtD").checked;
  var cBtE=document.getElementById("cBtE").checked;
  var cAT= conexionAT(cAtD,cAtE);
  var cBT= conexionBT(cBtD,cBtE);
  console.log(cAT);
  console.log(cBT);

  kVA=parseFloat(kVA).toFixed(2);
  vlAt=parseFloat(vlAt).toFixed(2);
  vlBt=parseFloat(vlBt).toFixed(2);

  var iAT=i(kVA,vlAt);
  var iBT=i(kVA,vlBt);
  var vfAt=vfase(vlAt,cAT);
  var vfBt=vfase(vlBt,cBT);
  var ifAt=ifase(iAT,cAT);
  var ifBt=ifase(iBT,cBT);


  console.log("El Voltaje de linea de AT:" + financial(vlAt,0) + " V" );
  console.log("El Voltaje de fase de AT:" + financial(vfAt,0) + " V" );
  console.log("El Voltaje de linea de BT:" + financial(vlBt,0) + " V" );
  console.log("El Voltaje de fase de BT:" + financial(vfBt,0) + " V" );


  console.log("La Corriente de linea de AT es:" + financial(iAT,2) + " A" );
  console.log("La Corriente de fase de AT es:" + financial(ifAt,2) + " A" );
  console.log("La Corriente de linea de BT es:" + financial(iBT,2) + " A" );
  console.log("La Corriente de fase de BT es:" + financial(ifBt,2) + " A" );


  document.getElementById("rConexionAT").innerHTML ="Conexión de AT: " + "<strong>" + cAT + "</strong>" +"";
  document.getElementById("rVlAt").innerHTML ="Voltaje de Linea AT: " + "<strong>" + financial(vlAt,0) + "</strong>" +" V";
  document.getElementById("rVfAt").innerHTML ="Voltaje de fase AT: " + "<strong>" + financial(vfAt,0) + "</strong>" +" V";
  document.getElementById("rIlAt").innerHTML ="Corriente de linea AT: " + "<strong>" + financial(iAT,2) + "</strong>" +" A";
  document.getElementById("rIfAt").innerHTML ="Corriente de fase AT: " + "<strong>" + financial(ifAt,2) + "</strong>" +" A";

  document.getElementById("rConexionBT").innerHTML ="<br/>Conexión de BT: " + "<strong>" + cBT + "</strong>" +"";
  document.getElementById("rVlBt").innerHTML ="Voltaje de Linea BT: " + "<strong>" + financial(vlBt,0) + "</strong>" +" V";
  document.getElementById("rVfBt").innerHTML ="Voltaje de fase BT: " + "<strong>" + financial(vfBt,0) + "</strong>" +" V";
  document.getElementById("rIlBt").innerHTML ="Corriente de linea BT: " + "<strong>" + financial(iBT,2) + "</strong>" +" A";
  document.getElementById("rIfBt").innerHTML ="Corriente de fase BT: " + "<strong>" + financial(ifBt,2) + "</strong>" +" A";


}




//var form = document.getElementById("Submit")
//form.addEventListener("click", calculos,false);
