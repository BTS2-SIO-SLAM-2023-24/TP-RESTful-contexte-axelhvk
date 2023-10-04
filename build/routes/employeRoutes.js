"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Création de la route Employe
const express_1 = __importDefault(require("express"));
const employeController_1 = __importDefault(require("../controllers/employeController"));
// Import du contrôleur AnimalController
const router = express_1.default.Router();
// Définition des routes pour les opérations CRUD sur les animaux en utilisant les fonctions du contrôleur
router.post('/', employeController_1.default.createEmploye);
router.get('/', employeController_1.default.readAllEmploye);
router.get('/:employeId', employeController_1.default.readEmploye);
router.put('/:employeId', employeController_1.default.updateEmploye);
router.delete('/:employeId', employeController_1.default.deleteEmploye);
exports.default = router; // Export du routeur pour être utilisé dans l'application principale
