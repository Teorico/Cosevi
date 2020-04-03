   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'¿Cuándo se publicó el primer código de circulación en Costa Rica?', options:['1912','1920','1850','1976'],answer:2},

                          {q:'¿Con que fin se publicaron las Ley de tránsito 5930 y la Ley de Administración vial 6324? ?',options:['Con el fin de evitar y enfrentar la problemática del volumen de accidentes en la década de los 70´s.','Disminuir el tráfico vial','Regular los problemas viales','Con el fin de evitar y enfrentar la problemática del volumen de accidentes en la década de los 50´s'],answer:1},

                          {q:'¿Cuándo se publicó la Ley de tránsito 5930?',options:['12 de octubre de 1976',' 12 de octubre 1920','22 de abril de 1993','24 de mayo de 1979'],answer:1},

                          {q:'¿Cuándo circuló el primer carro en Costa Rica?',options:['1912','1944','1920','1922'],answer:1},

                          {q:' ¿En qué década se dio un crecimiento inesperado de vehículos que produjo demasiados accidentes?',options:[' En la década de los 70.',' En la década de los 80.',' En la década de los 60.','Ninguna de las anteriores'],answer:1},

                          {q:' ¿Cuándo fue publicada la Ley de administración vial 6324 en Costa Rica?',options:['24 de mayo de 1993','24 de mayo de 1979','12 de octubre 1920','12 de octubre de 1976'],answer:2},

                          {q:'¿En qué década se da un crecimiento explosivo de vehículos y una transformación de la ciudades y pueblos? ',options:['En la década de los 80´s','En la década de los 70','A inicios de los 90','A finales del 1920'],answer:1},

                          {q:'¿Cuál ley se crea debido al aumento de carros en la década de los 80? ',options:['Ley de tránsito por vías públicas terrestres 7331','Ley de tránsito 5930','Código de circulación','Ley de administración vial 6324'],answer:1},

                          {q:'¿Cuándo se publicó la Ley de tránsito por vías públicas terrestres 7331? ',options:['26 octubre 2012','24 de mayo de 1979','22 de abril de 1993','12 de octubre 1920'],answer:3},

                          {q:'¿Cuál ley sustituyó la Ley de tránsito por vías públicas terrestres 7331? ',options:['No sustituyó ninguna ley anterior','La ley 7331 sustituyó el código de circulación',' La ley 7331 sustituyó la Ley de tránsito 6324',' La ley 7331 sustituyó la Ley de tránsito 5930'],answer:4},

                          {q:'¿Cuál es la ley que nos rige actualmente? ',options:['La ley 7331','La ley de transito por vías publicas y seguridad vial 9078','Ley de administración vial 6324','Ley de tránsito 5930 '],answer:2},

                          {q:'¿Cuándo se publicó la Ley de Tránsito por Vías Públicas y seguridad vial 9078? ',options:['22 de abril de 1993','24 de mayo de 1979','26 octubre 2012','12 de octubre de 1976'],answer:3},

                        

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



