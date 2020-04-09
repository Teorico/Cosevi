   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[{q:'Todo costarricense puede trasladarse o permanecer en cualquier punto de la república o fuera de ella”, por lo que esto se define como derecho circular que se entiende como libertad de circulación. Para poder hacer efectivo este derecho debemos acatar la ley de tránsito.', options:['Artículo 130','Artículo 139','Artículo 1','Artículo 22'],answer:4},
                {q:'¿Cuántos  artículos tiene la ley de tránsito 9078?', options:['8','9','252','23'],answer:3},
                {q:'¿Quién puede cambiar una disposición del señalamiento de tránsito como por ejemplo;circular contra vía , habilitar el paso con el semáforo en rojo acorde  al Artículo 93 inciso a?', options:['MOPT','Oficiales de tránsito','Ministerio de Salud ','COSEVI'],answer:2},
                {q:'¿Cuántos  transitorios tiene la ley de tránsito 9078?', options:['8','10','252','23'],answer:4},
                {q:'Las multas más altas son las de tipo A: ', options:['Falso','Verdadero',' ',' '],answer:2},
                {q:'Las multas más bajas  son las de tipo E: ', options:['Falso ','Verdadero',' ',' '],answer:2},
                {q:'Según la Ley de tránsito 9078 se denomina infractor a la persona que: ', options:['Inclumpla una o más normas de la ley','Impone la multa o dicta una resolución administrativa o Judicial ','',''],answer:1},
                {q:'Según la Ley de tránsito 9078 se denomina Sancionador a la persona que: ', options:['Inclumpla una o más normas de la ley','Impone la multa o dicta una resolución administrativa o Judicial que impone una sanción relacionada con el tránsito','',''],answer:2},
                {q:'¿Cuánto porcentaje puede variar el monto de las multas de anualmente?', options:['30 %','5 %','12 %','14 %'],answer:4},
                {q:'¿Qué porcentaje de los montos que se recaudan en multas va dirigido al COSEVI?', options:['3 %','69 %','5 %','23 %'],answer:2},
                {q:'¿Qué porcentaje de los montos que se recaudan en multas va dirigido a PANI?', options:['3 %','69 %','5 %','23 %'],answer:4},
                {q:'¿Qué porcentaje de los montos que se recaudan en multas va dirigido a la Cruz Roja?', options:['3 %','69 %','5 %','23 %'],answer:3},
                {q:'¿Qué porcentaje de los montos que se recaudan en multas va dirigido a la Ministerio de Justicia?', options:['3 %','69 %','5 %','23 %'],answer:1},
                {q:'Para conductores novatos o profesionales ¿Cuáles son niveles de alcohol en sangre y aire aspirado respectivamente, para que considere un  delito la conducción bajo efectos del alcohol? ', options:['Más de 0,50g de alcohol por litro de sangre o 0,25mg en aire aspirado.','Más de 0,75g de alcohol en sangre o 38mg en aire aspirado','Más de 0,50mg de alcohol por litro de sangre o 0,25g en aire aspirado.','Más de 0,75mg de alcohol en sangre o 38g en aire aspirado'],answer:1},
                {q:'Para conductores comúnes ¿Cuáles son niveles de alcohol en sangre y aire aspirado respectivamente para que considere un delito la conducción bajo efectos del alcohol? ', options:['Más de 0,50g de alcohol por litro de sangre o 0,25mg en aire aspirado.','Más de 0,75g de alcohol en sangre o 38mg en aire aspirado','Más de 0,50mg de alcohol por litro de sangre o 0,25g en aire aspirado.','Más de 0,75mg de alcohol en sangre o 38g en aire aspirado'],answer:2},
                {q:'¿Es considerado delito conducir bajo efectos de drogas "tóxicas", estupefacientes, o psicotrópicas?', options:['Falso ','Verdadero','',''],answer:2},
                {q:'¿Es considerado delito conducir a partir de 150km/h?', options:['Falso ','Verdadero','',''],answer:2},
                {q:'¿Es considerado delito participar de "piques"o competencia de velocidad ilegales?', options:['Verdadero','Falso','',''],answer:1},
                {q:'¿Cada cuánto debe renovar la licencia un conductor que haya acumulado de 0 a 4 puntos y cúal es el costo del trámite respectivamente?', options:['4 años y el costo es de 100 % del precio trámite','3  años y el costo es de 100 % del precio trámite','6 años y el costo es de 50 % del precio trámite','6 años y el costo es de 100 % del precio trámite'],answer:3},
                {q:'¿Cada cuánto debe renovar la licencia un conductor que haya acumulado de 5 a 8 puntos y cúal es el costo del trámite repectivamente?', options:['4 años y el costo es de 100 % del precio trámite','3  años y el costo es de 100 % del precio trámite','7 años y el costo es de 50 % del precio trámite','7 años y el costo es de 100 % del precio trámite'],answer:1},
                {q:'¿Cada cuánto debe renovar la licencia un conductor que haya acumulado de 9 a 11 puntos y cúal es el costo del trámite respectivamente?', options:['4 años y el costo es de 100 % del precio trámite','3  años y el costo es de 100 % del precio trámite','8 años y el costo es de 50 % del precio trámite','8 años y el costo es de 100 % del precio trámite'],answer:2},
                {q:'¿Cuál es el periodo de suspención para el conductor novato que acumule 6 o más puntos en la licencia?', options:['1 año ','6 meses ','2 meses ','2 años'],answer:1},
                {q:'¿Cuál es el periodo de suspención para el conductor común o profesional que que acumule 12 o más puntos en la licencia?', options:['1 año ','6 meses ','2 meses ','3 años'],answer:1},
                {q:'¿Qué sucede si los conductores ya sean profesionales, comunes o novatos acumulan 5 puntos o más en la licencia?', options:['No puede circular por el periodo de un año','Se suspende la licencia por un periodo de 1 mes ','Deben realizar un curso de sensibilización y reeducación vial como requisito obligatorio para renovar la licencia de conducir','Debe pagar el 100  % del valor del trámite. '],answer:3},
                
                  
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Has concluido esta sección!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correcto";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Incorrecto";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score ;
                  rate.innerHTML=Math.round((this.score/this.questions.length)*100) ;

                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



