# Script teradatagit.sh


## Prérequis
Le flow Git utilisé dans le cadre de ce Repo transverse est différent de l'usage classique.
Il est donc important d'avoir pris connaissance du <a href="https://training-dot-lmfr-ddp-dcp-prd.appspot.com/codelabs/how-to-work-with-Git-on-teradata-project/"> CodeLab </a> pour comprendre les mécanismes qui sont employés.


## Objectif
En automatisant les opérations écrites dans le CodeLab, le script teradatagit.sh facilite et accélère les opérations de rebase et push de votre branche feature sur les branches develop, integration et master.


## Usage
Avant de commencer :
- Assurez-vous que les branches develop, integration et master sont bien alignées. Dans le cas contraire, contactez un référent Git.
- Assurez-vous aussi d'avoir créé votre branche feature en local depuis la master (nommée ici <feat/ma-branche>)  et l'avoir poussée sur Github (Cette branche feature servira de référence).

Puis :
- Sur votre poste local, vous pouvez vous placer sur n'importe quelle branche, le script fera les checkouts adéquats. 
 - Ouvrir GitBash dans le dossier contenant le script


- Pour pousser vos modifications sur la branche develop, saisissez la commande suivante dans GitBash :

```sh
sh teradatagit.sh push feat/ma-branche develop
```

En cas d'erreur ou d'incohérence détectée sur les branches, le script s'arrêtera et ne pushera pas vers Github.
Dans le cas contraire, il vous invitera à confirmer le Push, auquel cas tapez 'Y'.

Vérifiez sur Gitlab que le pipeline de CI/CD s'est bien lancé et qu'il a réussi.

- Pour pousser vos modifications sur la branche intégration, de même, saisissez la commande :

```sh
sh teradatagit.sh push feat/ma-branche integration
```

Vérifiez sur Gitlab que le pipeline a réussi.

- Enfin, pour pousser vos modifications sur la branche master :

```sh
sh teradatagit.sh push feat/ma-branche master
```

Vérifiez sur Gitlab que le pipeline a réussi.
Pensez à supprimer votre branche feature en suivant les commandes décrites dans le CodeLab.

