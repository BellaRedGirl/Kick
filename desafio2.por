//TRIO - Isabella Mendes de Carvalho, Rafael Mendonça Almeida, Sara Helem Nascimento

programa {
    //definicao de variaveis 

  real num1, num2, resultado
  caracter op 
  caracter volte

    //repetição escreva 
   funcao repete(){
   se (volte =='s') {
    inicio()
    }
   se (volte == 'n') {
     op = '>'
    }
   }

  funcao inicio() { 
  
  //entrada 

  escreva ("--------------------------------------------------------------\n") 
  escreva ("Digite um número: ") 
  leia (num1) 
  escreva ("Digite outro número: ") 
  leia (num2) 
   escreva ("--------------------------------------------------------------\n") 
  
  escreva ("Para selecionar a operação matemática que deseja, escreva:\n") 
  escreva ("--------------------------------------------------------------\n") 
  escreva (" > = sair \n + = adição \n - = subtração \n x = multiplicação \n : = divisão: \n") 
  escreva ("--------------------------------------------------------------\n") 
  escreva ("Opção: ") 
  leia (op)


limpa() 

  //processamento 

 se (op != '>') {
  enquanto (op != '+' ou "-" ou "x" ou ":") {
    escreva ("A opção digitada não está de acordo com nosso menu. Escolha uma opção valida! \n")
    leia(op)
  } 

limpa ()

  se (op == '+') {

    resultado = (num1)+(num2) 

    escreva ("--------------------------------------------------------------\n")  
    escreva ("A soma é igual a: "+resultado+"\n") 
    
    escreva ("--------------------------------------------------------------\n") 
    escreva ("Você deseja continuar calculando conosco? Digite 's' para 'sim' ou 'n' para 'não': ")
    leia (volte)

limpa()

    repete()

  }
    
  senao se (op == '-') {
 
    resultado = (num1)-(num2) 

    escreva ("--------------------------------------------------------------\n") 
    escreva ("A subtração é igual a: "+resultado+"\n") 
     
    escreva ("--------------------------------------------------------------\n") 
    escreva ("Você deseja continuar calculando conosco? Digite 's' para 'sim' ou 'n' para 'não': ")
    leia (volte)

limpa()

    repete()

  }
     
  senao se (op == 'x') { 
     
    resultado = (num1)*(num2) 

    escreva ("--------------------------------------------------------------\n")  
    escreva("A multiplicação é igual a: "+resultado+"\n") 
     
    escreva ("--------------------------------------------------------------\n") 
    escreva ("Você deseja continuar calculando conosco? Digite 's' para 'sim' ou 'n' para 'não': ")
    leia (volte)

limpa()

    repete()

  }
    
  senao se (op == ':') { 

     resultado = (num1)/(num2) 

     escreva ("--------------------------------------------------------------\n") 
     escreva ("A divisão é igual a: "+resultado+"\n")
     
     escreva ("--------------------------------------------------------------\n") 
     escreva ("Você deseja continuar calculando conosco? Digite 's' para 'sim' ou 'n' para 'não': ")
     leia (volte)

limpa()

     repete()

  }
} 
  //saída  
    
  escreva ("Finalizamos, bons cálculos!")
 }
}
