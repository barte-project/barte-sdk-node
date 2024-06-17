# BarteSDK para Node

Bem-vindo ao BarteSDK para Node, a solução oficial para integração com as APIs de pagamento da Barte, projetada para simplificar e acelerar o desenvolvimento de suas aplicações . Com nosso SDK, você pode facilmente integrar funcionalidades de pagamento, assinaturas, e gestão de compradores em sua aplicação.

## Recursos do SDK

O BarteSDK fornece métodos convenientes para interagir com as seguintes APIs:

- **API de Planos**: Facilita o gerenciamento dos planos cadastrados no seu checkout.
- **API de Pedidos**: Permite gerenciar os pedidos cadastrados no seu sistema.
- **API de Compradores**: Auxilia na gestão dos compradores cadastrados.
- **API de Cobranças**: Fornece ferramentas para o gerenciamento das cobranças.
- **API de Assinaturas**: Facilita a criação e gestão de assinaturas.

## Vantagens do BarteSDK

O BarteSDK foi desenvolvido pensando na eficiência e na otimização do tempo de desenvolvimento, oferecendo uma série de vantagens que vão além da simples integração com nossas APIs. Embora seu uso não seja obrigatório, recomendamos fortemente que você o adote para aproveitar os seguintes benefícios:

- **Mais Eficiência e Redução de Custos**: Implementar nosso SDK significa reduzir custos operacionais e de desenvolvimento. Ele já está pronto para uso e totalmente homologado pela Barte, garantindo que você esteja sempre alinhado com as melhores práticas e padrões do mercado.

- **Instalação Otimizada**: Facilitamos a instalação com nossa solução plug-and-play, que se integra perfeitamente a sistemas de gestão de pacotes como Composer, Gradle, Maven e NPM. Isso agiliza significativamente a integração do SDK ao seu projeto, economizando tempo valioso de desenvolvimento.

- **Construção de Requisições Simplificada**: Simplifique a construção de suas requisições com nossa interface intuitiva. O SDK foi projetado para minimizar a complexidade, otimizar o desenvolvimento e garantir uma implementação eficaz e livre de erros.

- **Segurança de Dados**: A segurança é uma prioridade absoluta no BarteSDK. Utilizamos as melhores práticas e padrões de segurança para proteger todas as informações transmitidas, garantindo a integridade e confidencialidade dos dados dos seus clientes.

Adotar o BarteSDK não é apenas uma questão de conveniência; é uma decisão estratégica que fortalece a segurança, reduz custos e aumenta a eficiência do desenvolvimento de software na sua organização.


## Como Começar

Para começar a usar o BarteSDK, siga os passos abaixo:

1. **INSTALAÇÃO**


   Instale o SDK via pip:

   ```bash
   npm install bartesdk

2. **QUICKSTART**

Todos os requests feitos utilizando o bartesdk devem incluir alguns parâmetros comuns para garantir a autenticação e a especificação do ambiente e versão da API. Esses parâmetros são essenciais para a comunicação adequada com os serviços da Barte.

- `apiKey`: Chave de API gerada no Portal do Seller em Configurações -> Integração -> Chaves API. Esta chave é utilizada para autenticar as requisições e garantir que apenas usuários autorizados possam acessar os recursos da API.

- `env`: Especifica em qual ambiente o request deverá ser feito. Os valores possíveis são: "prd" ou "sandbox".

- `api_version`: Versão da API que está sendo utilizada. Atualmente, as versões disponíveis são v1 e v2.

### Exemplo de Requisição:

   ```node
const Barte = require('bartesdk');

// Defina sua chave de API gerada no Portal do Seller
const apiKey = 'your-api-token';

// Crie uma instância da classe Barte especificando o ambiente e a versão da API
const BarteSDK = new Barte({
  apiKey: apiKey,
  env: "sandbox",  // ou "prd" para produção
  version: "v2"    // especificar a versão da API
});

// Função assíncrona para fazer um request para um módulo e método específicos
async function main() {
  try {
    // Faça um request para um módulo e método específicos
    const response = await BarteSDK.{modulo}.{metodo}({
      x: 'y'
    });

    // Imprima a resposta do request
    console.log(response);
  } catch (error) {
    // Trate qualquer erro que ocorrer
    console.error('Error:', error);
  }
}

// Chame a função principal
main();
```

3. **MÓDULOS**


### `buyers`

Gerencie os perfis dos compradores registrados no seu sistema de maneira eficiente. Este módulo permite criar novos registros, listar os existentes, atualizar informações e excluir dados conforme necessário. Facilita a administração completa dos perfis, assegurando que as informações estejam sempre atualizadas e acessíveis.

### `charges`

Gerencie as cobranças registradas no seu sistema, permitindo a criação, listagem, atualização, estorno e cancelamento de cobranças de forma eficiente e segura.

### `plans`

Gerencia os planos de pagamento cadastrados no seu sistema de checkout. Com este módulo, você pode criar novos planos, listar todos os planos cadastrados, atualizar detalhes de planos existentes e excluir planos conforme necessário. Ideal para administrar diversos tipos de planos de assinatura ou pagamento recorrente, garantindo flexibilidade e controle total sobre as opções de pagamento oferecidas aos seus clientes.
####

### `orders`

O módulo de Orders permite gerenciar pedidos registrados no seu sistema de maneira eficiente e flexível. Com ele, é possível criar novos pedidos, listar pedidos existentes, atualizar detalhes de pedidos específicos e obter informações detalhadas sobre pedidos individuais. Ele foi projetado para ser robusto e adaptável, aceitando uma ampla variedade de parâmetros que facilitam a integração e a manutenção do sistema.
####

### `subscription`

O módulo de Subscriptions permite gerenciar assinaturas no seu sistema de maneira eficiente e flexível. Com ele, você pode criar novas assinaturas, listar assinaturas existentes, atualizar detalhes de assinaturas específicas, cancelar assinaturas e obter informações detalhadas sobre assinaturas individuais. A API é projetada para ser robusta e adaptável, aceitando uma ampla variedade de parâmetros que facilitam a integração e a manutenção do sistema.
####

4. **MÉTODOS**

### `create`

Este método permite a criação de novos registros no sistema. Pode ser utilizado para adicionar novos itens, como compradores, pedidos, planos, assinaturas, entre outros. Os parâmetros necessários para a criação são passados dinamicamente, permitindo flexibilidade e fácil adaptação às mudanças no backend.

   ```JavaScript
  async function main() {
    try {
      const response = await BarteSDK.{modulo}.create({
        campo1: "valor1",
        campo2: "valor2",
      });
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  }
```

### `update`

Este método permite a atualização de registros existentes no sistema. Pode ser utilizado para modificar informações de itens como compradores, pedidos, planos, assinaturas, etc. Os parâmetros necessários para a atualização são passados dinamicamente, permitindo flexibilidade e fácil adaptação às mudanças no backend.

   ```JavaScript
async function main() {
  try {
    const uuid = 'your-uuid'; 

    const response = await BarteSDK.{modulo}.update(uuid, {
      campo1: "valor1",
      campo2: "valor2",
    });
    console.log('Status Code:', response.status);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### `get`

Este método permite a obtenção de uma lista de registros do sistema. Pode ser utilizado para listar itens como compradores, pedidos, planos, assinaturas, etc. Os parâmetros de consulta são passados dinamicamente, permitindo a filtragem e busca conforme necessário.

   ```JavaScript
async function main() {
  try {
    // Faça um request para obter recursos
    const response = await BarteSDK.{modulo}.get({
      campo1: "valor1",
      campo2: "valor2",
    });

    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### `getByUuid`

Este método permite a obtenção de informações detalhadas de um registro específico no sistema. Pode ser utilizado para buscar detalhes de itens como compradores, pedidos, planos, assinaturas, etc. O UUID do registro é passado como parâmetro.

   ```JavaScript
async function main() {
  try {
    const uuid = 'b406dac0-a70e-47be-aecc-b1131b6307c0';
    const modulo = await BarteSDK.{modulo}.getByUuid(uuid);
    console.log('modulo by UUID:', modulo);
  } catch (error) {
    console.error('Error:', error);
  }
}
   ```

### `cancel`

Este método permite a exclusão de registros no sistema. Pode ser utilizado para remover itens como compradores, pedidos, planos, assinaturas, etc. O UUID do registro a ser excluído é passado como parâmetro.

   ```JavaScript
async function main() {
  try {
    const uuid = 'b406dac0-a70e-47be-aecc-b1131b6307c0';
    const canceledSubscription = await BarteSDK.subscriptions.cancel(uuid);
    console.log('Canceled Subscription:', canceledSubscription);
  } catch (error) {
    console.error('Error:', error);
  }
}
```