
# fizicarena
fizicarena are trebui sa fie un site in care sunt catalogate probleme de fizica pentru persoane care vor sa le lucreze si sa le aiba in acelasi loc.

### Legal:
I do not own anything in the files folder. I just store them there because I couldn't find them anywhere on the internet, on a website owned by the problems' composers.

### Inspiratie:
* [IPhO Problems and Solutions](https://physprob.com)
* [infoarena](https://infoarena.ro)
* [FizicaNet](http://fizica.com)
  
### Cum functioneaza
In folderul **data**, fiecare concurs are un fisier JSON in care sunt stocate toate datele problemelor. In contests.json sunt stocate toate datele meta despre fiecare concurs si ce concursuri exista.

In folderul **files** sunt toate fisierele pdf care nu au linkuri externe si pe care a trebuit sa le downloadez manual.

In folderul **source** am pus tot codul de javascript ca sa functioneze site-ul. Ideea este ca pentru fiecare concurs (adica pt fiecare fisier json) exista un template, adica un fisier html cu cateva adaugari de sintaxa. Exista taguri speciale care incep cu \$ si asa poate inlocui continutul dinamic, folosind datele dintr-un obiect javascript.
| Ce scrie      | Cu ce se inlocuieste  |
| ------------- | --------------------- |
| \$property | Inlocuieste cu valoarea 'property' din obiect |
| \$:array ... \$:array | Multiplica ce este intre taguri pentru fiecare element din vectorul array. Ce este in interior este procesat folosind elementul de vector ca nou obiect de baza. |
| \$?property ... \$?property | Daca valoare 'property' din obiect nu este nula, atunci va aparea ce este taguri |
| \$!property ... \$!property | Opusul la chestia de mai sus |
| \$property=value ... \$property=value | Daca proprietatea 'property' din obiect are valoare 'value', atunci apare ce este intre taguri |


In folderul **templates** se afla toate templaturile facute cu sintaxa de mai sus.
Folderele **style**, **images** doar infrumuseteaza site-ul.
