# Título

Cada parágrafo de texto em markdown é separado e espaçado automaticamente. Cada interpretador de markdown aplicará um estilo próprio ao texto (tamanhos, cores, corpo tipográfico, etc.), mas respeitará os princípios de marcação.

Um paragrafo separando este texto inicial do subtítulo.

## Subtítulo

Outro parágrafo separando o subtítulo de uma marcação de heading de terceiro nível (sub-subtítulo?).

### Sub-subtítulo?

Agora outro parágrafo com texto normal separando o sub-subtítulo do apêndice.

#### Apêndice

Este parágrafo separa aquilo que vêm em baixo do quarto nível de heading, e uma imagem inserida no texto.

Imagens são incluídas assim:

![Wolfram Mathematica](https://omnifolio.vercel.app/omnifiles/win_mathematica21.png)

Aqui está um link simples: Website do prof. [Guilherme Ranoya](https://www.ranoya.com).

*Trecho escrito em oblíquo*, seguido do **Trecho escrito em negrito**, seguido do ***Trecho em negrito e oblíquo***.


Este parágrafo separa elementos de marcação de texto de blocos do tipo "quote":

> Estes são textos incluídos em um bloco
> O bloco fica indentado em relação ao parágrafo
>> Alguns blocos dentro de blocos também são possíveis
>> É possível incluir múltiplos níveis
>>> Mas nem todos os interpretadores de Markdown irão apresentá-los

Aqui separamos os elementos de bloco de códigos de programação que utilizam tipografia monoespaçada:


```javascript

let x = 10;
console.log(x);

```

Outro parágrafo para separa os elementos de código de programação para tabelas:

| Cabeçalho 1  | Cabeçalho 2 | Cabeçalho 3 | Cabeçalho 4  |
| ------- | ------ | ------ | ------------ |
| Dado 1   | Dado 2   | Dado 3   | Dado 4   |
| Dado 5   | Dado 6   | Dado 7   | Não precisa ter o mesmo espaço |
| Última linha | Dado 8    | Dado 9   | Dado 10     |

Estes são os elementos principais do **Markdown**.

Notas de rodapé<sup>1</sup>.

Markdown possui uma estrutura sintática para notas de rodapé, mas nem todas as ferramentas capazes de exibir markdown tem este formato implementado. A sintaxe correta para criar uma nota de rodapé seria [^n] (onde n é o número da nota). O publicador Booklines aceita este formato, mas são poucos os visualizadores que o fazem. Para resolver a questão, utilize a marcação HTML para texto superposto: \<sup>n\<\\sup>.









