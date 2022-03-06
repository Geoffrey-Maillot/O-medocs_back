// On récupère 'dotenv' et on le configure. Il nous permet de charger les variables d'environnement du fichier '.env'
require('dotenv').config();
// On récupère 'express' qui est un framework pour faciliter le codage en Node.js
const express = require('express');
// On récupère le package cors qui nous donne un middleware permettant d'activer le CORS avec plusieurs options à utiliser si besoin
const cors = require('cors');
// J'importe le middleware sanitizer
const bodySanitizer = require('./middlewares/body-sanitizer');

// On importe le dossier 'routers'
const router = require('./routers');

// On déclenche Express qui, en plus, crée notre serveur HTTP
const app = express();

// On utilise le package cors qui active le CORS pour permettre à un domaine extérieur (côté front) d'accéder aux ressources 
// du domaine utilisé par cette API
app.use(cors({
    // Permet à l'URL donné de pouvoir accéder à l'API
    origin: '*'
}));

// On utilise un middleware intégré qui analyse les requêtes entrantes sous format JSON
app.use(express.json());

// a chaque requete si le body contient quelque chose on le nettoie
app.use(bodySanitizer);

// On demande à Express d'utiliser le routeur que l'on a configuré dans le dossier 'routers'
app.use('/api', router);

// Je demande dans mon application à récupérer une variable d'environnement pour déterminer quel port utiliser pour le serveur HTTP.
// Si on ne me donne aucune variable PORT dans l'environnement alors je prend le port 3000 
app.listen(process.env.PORT || 3000, () => {
    console.log('CORS-enabled server running on :', process.env.PORT);
});
