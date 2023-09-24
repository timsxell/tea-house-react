#TEA HOUSE - NWD projekat
*** sajt [uživo](tea-house-react.vercel.app)*** 

[TOC]

## Tehnlogije korišćene
- React
> JS biblioteka za pravljenje UI koja se kompajluje u JS
- Next 
> React frejmvork za server-side komponente, routing, bundlinig  i optimizaciju. U sebi sadrži i Webpack
- Redux
> Stejt menadžer za upravljanje stanjem komponenata (npr. stanje u korpi)
- Redux Toolkit (RTK) query
> Za optimizovano preuzimanje podataka sa servera
- ESLint
> Za proveru validnosti koda 
- NodeJS
> Runtime za JS na strani servera

Za potrebe sajta je takođe bio napravljen mini [server](https://github.com/timsxell/server_teaHouse) na NodeJS koji sadrži podatke o proizvodima i šalje ih preko GET rekvestova. Server je takođe [hostovan](https://europe-west3-tea-house-server.cloudfunctions.net/function-1/api/items) koristeći Google Cloud Functions

## Pokretanje lokalno
Rad sajta mozete pogledati [uživo](tea-house-react.vercel.app), a izvorni kod se nalazi u ovom repozitorijumu [(/src)](https://github.com/timsxell/tea-house-react/tree/main/src), ali takođe možete čitav projekat kompajlovati i pokrenuti kod sebe na kompjuteru lokalno:
### Predekspozicije 
Da bi se projekat pokrenuo lokalno potrebno je da na kompjuteru imate:
- [git](https://github.com/git-guides/install-git)
- [node](https://nodejs.org/en/download)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 

### Klonirati git projekat 
```
git clone https://github.com/timsxell/tea-house-react.git
```
### Ući u kloniranu direktoriju
```
cd tea-house-react
```
### Instalirati zavisnosti projekta
```
npm i
```
### Pokrenuti projekat
Mozete ili pokrenuti development verziju gde će se svaka izmena u kodu odmah odraziti na sajtu:
```
npm run dev
```
Ili pokrenuti build production verzije gde će se čitav kod kompajlovati u običan HTML, CSS i JS unutar foldera .next/
```
npm run build
npm run start
```
> Sajt će biti pokrenut na localhost:3000


