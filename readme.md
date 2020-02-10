## Sobre o projeto

O projeto é um servidor simples que expõe um único endpoint GET `/:server/:env` que utiliza os parâmetros para buscar a configuração yml do serviço em questão.

Por exemplo, o serviço offer: `/offer/dev` iria realizar a busca do arquivo `offer-dev.yml` dentro da pasta configs, onde cada serviço possui uma pasta separada com seus arquivos de configuração.

Nessa requisição o servidor também realiza a leitura de um arquivo `common-.yml` onde é um arquivo com configurações comuns para N serviços.

A ideia é centralizar as configurações em um servidor a fim de facilitar a configuração de todos os serviços.


