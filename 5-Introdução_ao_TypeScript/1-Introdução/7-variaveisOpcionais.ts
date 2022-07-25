//Utilização do caracter "?" para variáveis opcionais

interface IUsuario {
    id: string;
    email: string;
    cargo?: "funcionário" | "gerente" | "coordenador" | "supervisor";
  }
  
  function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
      // redirecionar(usuario.cargo);
    }
    // redirecionar para a área de usuário
  }