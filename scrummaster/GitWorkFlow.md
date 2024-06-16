1. Fork o Repositorio

2. Clonar o repositório do seu próprio GitHub
   git clone git@github.com:duccini/equipe02.git

3. Entrar na pasta 'equipe02' e configurar upstream
   git remote add upstream https://github.com/codigocerto/equipe02.git

4. # Sincronizar com develop

   git fetch upstream
   git checkout develop
   git merge upstream/develop
   git push origin develop

5. Excluir uma branch
   git branch -D <nome-branch>
