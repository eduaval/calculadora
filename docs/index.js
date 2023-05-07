const display = document.querySelector('.display')
digito = ''
aux = 0
resultado=0;
contador=0;
sum=0;
rest=0;
multi=0;
div=0;







const set_numero = (num) => {
    if(contador == 1){

        contador = 2;

    }
    if(digito.length == 16){
        return
    }
    digito += num
    display.innerHTML = digito
    aux = parseFloat(document.querySelector(".display").innerHTML);
}

const operacion = () => {
    if(sum){
        suma()
    } if(rest){
        resta();
    }if(multi){
        multiplicar();
    } if(div){
        division();
    }
   
    
}     

const suma = () => {
    
    if(contador == 2){

        if(rest || multi || div){
            operacion();
        }

        resultado = resultado + aux;
        aux = 0
        contador = 1; 
        digito="";
        document.querySelector(".display").innerHTML=resultado;
        document.querySelector(".display2").innerHTML=resultado+"+";
            
    }else{
        if(contador==1){
            aux = resultado;  
        }

        resultado = aux;
        aux = 0;
        contador  = 1;
        digito="";
        document.querySelector(".display2").innerHTML=resultado+"+";
        }
        console.log(resultado)
        sum=1;
        rest=0;
        multi=0;
        div=0;
}

const resta = () => {
    if(contador == 2){
        if(sum || multi || div){
            operacion();
        }

        resultado = resultado - aux;
        aux = 0
        contador = 1; 
        digito="";
        document.querySelector(".display").innerHTML=resultado;
        document.querySelector(".display2").innerHTML=resultado+"-";
        
    }else{
        if(contador==1){
            aux = resultado;
        }

        resultado = aux;
        aux = 0;
        contador  = 1;
        digito="";
        document.querySelector(".display2").innerHTML=resultado+"-";

    }
    sum=0;
    rest=1;
    multi=0;
    div=0
}

const multiplicar = () => {
    
    if(contador == 2){

        if(sum || rest || div){
            operacion();
        }
        if(sum || rest || div && aux == 0){
            aux = 1;
        }
            resultado = resultado * aux;
            aux = 0
            contador = 1; 
            digito="";
            document.querySelector(".display").innerHTML=resultado;
            document.querySelector(".display2").innerHTML=resultado+"*";
        
    }else{
        if(contador==1){
            aux = resultado;  
        }

        resultado = aux;
        aux = 0;
        contador  = 1;
        digito="";
        document.querySelector(".display2").innerHTML=resultado+"*";

    }
    sum=0;
    rest=0;
    multi=1;
    div=0;
}

const division = () => {
    if(contador == 2){

        if(sum || rest || multi){
            operacion();
        }
        if(sum || rest || multi && aux == 0){
            aux=1;

        }
        if(aux == 0){

            document.querySelector(".display").innerHTML="no se puede dividir entre cero";
            document.querySelector(".display2").innerHTML="";
            digito = "";
            aux = 0;
            resultado = 0;
            contador = 0;
            sum=0;
            rest=0;
            multi=0;
            div=0;
            exit();

        }
         
            resultado = resultado / aux;
            aux = 0
            contador = 1; 
            digito="";
            document.querySelector(".display").innerHTML=resultado;
            document.querySelector(".display2").innerHTML=resultado+"/";
         
        
        
    }else{
        if(contador==1){
            aux = resultado;  
        }
        

        resultado = aux;
        aux = 0;
        contador  = 1;
        digito="";
        document.querySelector(".display2").innerHTML=resultado+"/";
    }
sum=0;
rest=0;
multi=0;
div=1;
}

const reset = () =>{
    digito="";
    aux=0;
    resultado=0;
    contador=0;
    sum=0;
    rest=0;
    multi=0;
    div=0;
    document.querySelector(".display").innerHTML=0;
    document.querySelector(".display2").innerHTML="";
}

const resul = () => {
    if(sum || rest || multi || div){
        operacion();
        document.querySelector(".display").innerHTML=resultado;
        document.querySelector(".display2").innerHTML=resultado+"=";
    }else{
        document.querySelector(".display").innerHTML=aux;
        document.querySelector(".display2").innerHTML=aux+"=";

    }

}