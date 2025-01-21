# MedicCont

## Importante: Deixei as crendenciais expostas somente para facilitar os testes.

## 💻 Pré-requisitos

- **Docker**
- **Yarn**

## 🚀 Instalando

Para instalar, siga estas etapas:

1. Clone o repositório do GitHub:

```
git@github.com:bermarques/mediccont-backend.git
```

2. Navegue até o diretório do projeto:

```
cd mediccont-backend
```

3. Instale as dependências

```
yarn
```

4. Roda o banco de dados usando o Docker:

```
docker-compose up -d
```

Caso você tenha o postgres instalado localmente, é possivel que haja conflitos. Nesse caso, é necessário fechar a instância local do banco do dados.

5. Rode a aplicação

```
yarn start:dev
```

6. Acesse a documentação

```
http://localhost:3000/api
```

## Documentação

Toda a documentação pode ser conferida através do Swagger, na rota http://localhost:3000/api

Exemplo de requisição para criação

```json
{
  "exercicio": 2024,
  "tipo": "O",
  "dataHoraCriacaoDeclaracao": "18/01/2025 17:09:28",
  "cpf": "000.000.000-00",
  "bens": [
    {
      "id": "1f5ac7b4-d5d8-11ef-b84e-13243ace87e7",
      "tipo": "BemDireito",
      "codigo": "01",
      "chaveBem": "00001",
      "grupoBem": "04",
      "inLei14754": "0",
      "bemDireitoDe": "T",
      "discriminacao": "INFORMADO POR CNPJ 00.360.305/0001-04",
      "dataAtualizacao": "2025-01-18T17:09:28.769091",
      "paisLocalizacao": "105",
      "artigo14Lei14754": false,
      "chaveGrupoCodigo": "0401",
      "negociadosEmBolsa": false,
      "artigos8e11Lei14754": false,
      "dadosComplementares": {
        "cnpj": "00.360.305/0001-04",
        "banco": "104",
        "conta": "000943928122",
        "agencia": "3880",
        "dvConta": "2",
        "tipoContaCaixa": "1"
      },
      "situacaoAnoCalendario": "175,84",
      "situacaoAnoCalendarioAnterior": "165,79"
    }
  ],
  "resumo": {
    "completa": {
      "deducoes": {
        "livroCaixa": "0,00",
        "dependentes": "0,00",
        "totalDeducoes": "412,00",
        "despesasMedicas": "412,00",
        "despesasInstrucao": "0,00",
        "limitePercentualECA": "0,03",
        "limitePercentualIdoso": "0,03",
        "limitePercentualGlobal": "0,06",
        "valorAtualDisponivelECA": "0,00",
        "valorTotalDisponivelECA": "0,00",
        "pensaoAlimenticiaJudicial": "0,00",
        "pensaoAlimenticiaJudicialRRA": "0,00",
        "limitePercentualExtraDesporto": "0,01",
        "contribuicaoPrevidenciaOficial": "0,00",
        "contribuicaoPrevidenciaOficialRRA": "0,00",
        "pensaoAlimenticiaEscrituraPublica": "0,00",
        "contribuicaoPrevidenciaComplementar": "0,00"
      },
      "impostoPagar": "0,00",
      "calculoImposto": {
        "impostoDevido": {
          "baseCalculo": "0,00",
          "impostoDevido": "0,00",
          "impostoDevidoI": "0,00",
          "aliquotaEfetiva": "0,00",
          "impostoDevidoII": "0,00",
          "deducaoIncentivo": "0,00",
          "impostoDevidoRRA": "0,00",
          "totalImpostoDevido": "0,00",
          "contribuicaoPatronal": "0,00"
        }
      },
      "impostoRestituir": "0,00"
    },
    "impostoPago": {
      "carneLeaoTitular": "0,00",
      "impostoRetidoRRA": "0,00",
      "totalImpostoPago": "0,00",
      "impostoComplementar": "0,00",
      "carneLeaoDependentes": "0,00",
      "impostoRetidoFonteTitular": "0,00",
      "impostoRetidoFonteDependentes": "0,00"
    },
    "simplificada": {
      "impostoPagar": "0,00",
      "calculoImposto": {
        "impostoDevido": {
          "baseCalculo": "0,00",
          "impostoDevido": "0,00",
          "aliquotaEfetiva": "0,00",
          "impostoDevidoRRA": "0,00",
          "totalImpostoDevido": "0,00",
          "descontoSimplificado": "0,00"
        }
      },
      "impostoRestituir": "0,00"
    },
    "outrasInformacoes": {
      "rendaVariavel": {
        "rendaVariavelImpostoLei": "0,00",
        "rendaVariavelImpostoPago": "0,00",
        "rendaVariavelImpostoDevido": "0,00"
      },
      "doacoesEleitorais": "0,00",
      "rendimentosIsentos": "0,00",
      "dividasOnusAnoCalendario": "0,00",
      "validacaoDependenteCod52": {
        "limiteInstrucao": "3.561,50",
        "limiteDependente": "2.275,08"
      },
      "bensDireitosAnoCalendario": "175,84",
      "depositosJudiciaisImposto": "0,00",
      "dividasOnusAnoCalendarioAnterior": "0,00",
      "bensDireitosAnoCalendarioAnterior": "14.165,79",
      "rendimentosSujeitosTributacaoExclusiva": "0,00",
      "rendimentosTributaveisExigibilidadeSuspensa": "0,00"
    },
    "rendimentosTributaveis": {
      "rraTitular": "0,00",
      "rraDependentes": "0,00",
      "recebidoPessoaFisicaTitular": "0,00",
      "totalRendimentosTributaveis": "0,00",
      "recebidoPessoaJuridicaTitular": "0,00",
      "recebidoPessoaFisicaDependentes": "0,00",
      "recebidoPessoaJuridicaDependentes": "0,00"
    },
    "opcaoTributacaoMaisVantajosa": "C"
  },
  "terceiros": [],
  "pagamentos": [
    {
      "id": "1f5aa0a0-d5d8-11ef-b84e-13243ace87e7",
      "tipo": "Pagamento",
      "codigo": "01",
      "valorEFPC": "0,00",
      "valorPago": "0,00",
      "dataAtualizacao": "2025-01-18T17:09:28.769083",
      "nomeBeneficiario": "RIDU ESCOLA DO FUTURO S.A.",
      "cpfCnpjBeneficiario": "35.224.825/0001-74",
      "despesaRealizadaCom": "T",
      "parcelaNaoDedutivel": "0,00"
    },
    {
      "id": "1f5ac7b2-d5d8-11ef-b84e-13243ace87e7",
      "tipo": "Pagamento",
      "codigo": "21",
      "valorEFPC": "0,00",
      "valorPago": "0,00",
      "dataAtualizacao": "2025-01-18T17:09:28.769088",
      "nomeBeneficiario": "FAGUNDES CLINICAS DE MEDICINA E ODONTOLOGIA EIRELI - EPP",
      "cpfCnpjBeneficiario": "28.749.328/0001-24",
      "despesaRealizadaCom": "T",
      "parcelaNaoDedutivel": "0,00"
    },
    {
      "id": "1f5ac7b1-d5d8-11ef-b84e-13243ace87e7",
      "tipo": "Pagamento",
      "codigo": "21",
      "valorEFPC": "0,00",
      "valorPago": "0,00",
      "dataAtualizacao": "2025-01-18T17:09:28.769089",
      "nomeBeneficiario": "IMAGENUS ODONTOLOGIA DIGITAL LTDA",
      "cpfCnpjBeneficiario": "10.936.034/0001-46",
      "despesaRealizadaCom": "T",
      "parcelaNaoDedutivel": "0,00"
    },
    {
      "id": "1f5ac7b0-d5d8-11ef-b84e-13243ace87e7",
      "tipo": "Pagamento",
      "codigo": "21",
      "valorEFPC": "0,00",
      "valorPago": "412,00",
      "dataAtualizacao": "2025-01-18T17:09:28.769089",
      "nomeBeneficiario": "LUNAV ANALISES CLINICAS LTDA",
      "cpfCnpjBeneficiario": "00.202.369/0001-87",
      "despesaRealizadaCom": "T",
      "parcelaNaoDedutivel": "0,00"
    }
  ],
  "indicadores": {
    "utilizouPGD": false,
    "utilizouWeb": true,
    "utilizouECAC": false,
    "ondeFoiIniciada": "11",
    "utilizouRascunho": false,
    "utilizouAplicativo": false,
    "possuiPendenciasErro": false,
    "utilizouPrePreenchida": true,
    "utilizouAssistidaPlanoSaude": false,
    "utilizouSalvarRecuperarOnline": false,
    "utilizouAssistidaFontePagadora": false
  },
  "rendimentos": [
    {
      "id": "1f5ac7b9-d5d8-11ef-b84e-13243ace87e7",
      "tipo": "RendimentoTribExclusiva",
      "valor": "0,00",
      "codigo": "06",
      "rendimentoDe": "T",
      "dataAtualizacao": "2025-01-18T17:09:28.769098",
      "nomeFontePagadora": "NU FINANCEIRA SA",
      "cpfCnpjFontePagadora": "30.680.829/0001-43"
    }
  ],
  "identificacao": {
    "nome": "BERNARDO TESTE",
    "exterior": false,
    "retornoPais": "0",
    "mudouEndereco": false,
    "possuiConjuge": false,
    "enderecoBrasil": {
      "cep": "96200-210",
      "email": "bernardoteste@gmail.COM",
      "bairro": "CENTRO",
      "numero": "339",
      "siglaUF": "RS",
      "logradouro": "GENERAL PORTINHO",
      "nomeMunicipio": "RIO GRANDE",
      "tipoLogradouro": "RUA",
      "codigoMunicipio": "8815"
    },
    "naturezaOcupacao": "01",
    "ocupacaoPrincipal": "212",
    "portadorDoencaGrave": false,
    "numeroReciboAnterior": "350385896937",
    "tituloEleitoral": ""
  },
  "rendaVariavel": [],
  "dataNascimento": "26/01/1997",
  "opcaoTributacao": "C",
  "informacoesNuvem": {},
  "dataDiaUtilRecibo": "01/06/2023",
  "informacoesBancarias": {
    "quotas": "1"
  },
  "contribuinteSelecionouOpcaoTributacao": false,
  "configuracao": {
    "naturezaOcupacao": {
      "opcaoIdadeNaturezaOcupacao": true
    },
    "interesseExterior": {
      "opcaoInteresseExterior": true
    }
  },
  "dadosAnteriores": {
    "enderecoBrasil": {
      "cep": "96200-210",
      "email": "bernardoteste@gmail.COM",
      "bairro": "CENTRO",
      "numero": "339",
      "siglaUF": "RS",
      "logradouro": "GENERAL PORTINHO",
      "nomeMunicipio": "RIO GRANDE",
      "tipoLogradouro": "RUA",
      "codigoMunicipio": "8815"
    },
    "exterior": false
  },
  "indicadorMalha": false,
  "cpfUltimoAcesso": "00000000000"
}
```
