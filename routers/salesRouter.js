// Récupère Express
const express = require('express');
// On récupère un module qui nous apporte un middleware de validation des JSON Web Tokens
const jwt = require('express-jwt');

// Importe le controller qui gère l'inventaire d'un vendeur
const salesController = require('../controllers/salesController');

// On déclare le middleware jwt configuré avec le secret qui encode les tokens et l'algorithme à utiliser pour décoder les tokens générés
const authMiddleware = jwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ['HS256'] });

// Permet de créer des nouveaux gestionnaires de routes pour manipuler les requêtes
const router = express.Router();

// Route pour modifier l'email de l'utilisateur
router.get('/sales/:user_id', authMiddleware, salesController.getSales);
// Route pour modifier le numéro de téléphone de l'utilisateur
router.patch('/status/:orderId', authMiddleware, salesController.editOrderStatus);

// Export la constante 'router'
module.exports = router; 