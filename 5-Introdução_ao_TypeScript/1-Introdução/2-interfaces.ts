// Interfaces

interface IAnimal1 {
  nome: string;
  tipo: "Terrestre" | "Aquático";
  executarRugido(alturaEmDecibeis): void;
}

interface IFelinos1 extends IAnimal1 {
  visaoNoturna: boolean;
}

const animal1: IAnimal1 = {
  nome: "Elefante",
  tipo: "Terrestre",
  executarRugido: (alturaEmDecibeis) => `${alturaEmDecibeis}dB`,
};

animal1.executarRugido(26);

const felino1: IFelinos1 = {
  nome: "Leão",
  tipo: "Terrestre",
  visaoNoturna: true,
  executarRugido: (alturaEmDecibeis) => `${alturaEmDecibeis}dB`,
};
