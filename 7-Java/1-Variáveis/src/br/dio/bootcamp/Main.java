package br.dio.bootcamp;

public class Main {

	public static void main(String[ ] args) {
		int i;
		//int i;  //provoca erro ao compilar
		int I;
		//int 1a; //provoca erro ao compilar
		int _1a; //evitar
		int $1a; //evitar
		
		i = 5;
		I = 10;
		_1a = 20;
		$1a = 7;
		
		final int J = 10;
		//J = 15;  //constantes nunca se alteram
		int asasd54as4;		
		//int asasd 54as4; //provoca erro de compilar
		int asasd_54as4;
		//int asasd%54as4; //provoca erro de compilar

		asasd54as4 = 100;
		asasd_54as4 = 10;
		
		int quantidadeProduto = 50;
		//int QuantidadeProduto; //evitar
		final int NUMERO_TENTATIVAS = 5;
		//final int numeroTentativas = 5; //evitar
		int QUANTIDADE_OPCOES = 25; //evitar
		//int qtdProd; //evitar
		
		System.out.println(i);
		System.out.println(I);
		System.out.println(_1a);
		System.out.println($1a);
		
		System.out.println(J);
		System.out.println(asasd54as4);
		System.out.println(asasd_54as4);
		
		System.out.println(quantidadeProduto);
		System.out.println(NUMERO_TENTATIVAS);
		System.out.println(QUANTIDADE_OPCOES);
	}

}
