# Fluxo de desenvolvimento

Detalhamento das etapas do desenvolvimento

Iremos utilizar o Git Flow que é um modelo de ramificação Git que ajuda a gerenciar o desenvolvimento de software de forma eficiente. Aqui está uma explicação simples para juniores:

## Principais Ramificações (Branches)

1. main: Esta é a linha de produção. Contém o código mais estável e pronto para ser lançado. Qualquer versão lançada para os usuários finais sai desta branch.

2. develop: Esta é a branch de desenvolvimento onde as funcionalidades são integradas. Quando novas funcionalidades estão prontas e testadas, elas são mescladas aqui.

## Tipos de Ramificações de Suporte

1. feature: Para desenvolver novas funcionalidades. Cada nova funcionalidade tem sua própria branch criada a partir de develop. Depois que a funcionalidade está completa, a branch feature é mesclada de volta em develop.

- Criação: git checkout develop e git checkout -b feature/nome-da-feature
- Conclusão: git checkout develop e git merge feature/nome-da-feature seguido de git branch -d feature/nome-da-feature

2. release: Para preparar uma nova versão de produção. Quando o develop está pronto para um lançamento, uma branch release é criada a partir de develop. Aqui, fazemos testes finais e correções de bugs. Quando tudo está pronto, a branch release é mesclada tanto em main quanto em develop.

- Criação: git checkout develop e git checkout -b release/nome-da-release
- Conclusão: git checkout main e git merge release/nome-da-release seguido de git checkout develop e git merge release/nome-da-release e git branch -d release/nome-da-release

3. hotfix: Para correções urgentes em produção. Criada a partir de main quando há um bug crítico que precisa ser resolvido imediatamente. Depois de corrigido, a branch hotfix é mesclada tanto em main quanto em develop.

- Criação: git checkout main e git checkout -b hotfix/nome-do-hotfix
- Conclusão: git checkout main e git merge hotfix/nome-do-hotfix seguido de git checkout develop e git merge hotfix/nome-do-hotfix e git branch -d hotfix/nome-do-hotfix

## Resumo do Processo

1. Crie uma branch feature para novas funcionalidades a partir de develop.
2. Complete e teste a funcionalidade na branch feature e abra um Pull Request (PR) para a develop.
3. Quando pronto para um lançamento, crie uma branch release a partir de develop.
4. Realize testes e ajustes finais na branch release e depois mescle em main e develop.
5. Para correções urgentes, crie uma branch hotfix a partir de main, faça a correção e mescle em main e develop.
6. Este fluxo ajuda a organizar e controlar o desenvolvimento de software, garantindo que o código de produção permaneça estável e que novas funcionalidades e correções sejam integradas de maneira controlada.

Este fluxo ajuda a organizar e controlar o desenvolvimento de software, garantindo que o código de produção permaneça estável e que novas funcionalidades e correções sejam integradas de maneira controlada.
