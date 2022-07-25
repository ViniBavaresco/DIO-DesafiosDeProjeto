//Types

interface IAnimal {
  nome: string;
  tipo: "Terrestre" | "Aquático";
  domestico: boolean;
}

interface IFelinos extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: "pequeno" | "médio" | "grande";
}

type IDomestico = IFelinos | ICanino;

const animal2: IDomestico = {
  nome: "cachorro",
  tipo: "Terrestre",
  porte: "pequeno",
  domestico: true,
};
