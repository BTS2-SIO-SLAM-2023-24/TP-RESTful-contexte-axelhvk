// Création de la route Employe
import express from "express";
import EmployeController from "../controllers/employeController";
// Import du contrôleur AnimalController
const router = express.Router();
// Définition des routes pour les opérations CRUD sur les animaux en utilisant les fonctions du contrôleur
router.post('/', EmployeController.createEmploye);
router.get('/', EmployeController.readAllEmploye);
router.get('/:employeId', EmployeController.readEmploye);
router.put('/:employeId', EmployeController.updateEmploye);
router.delete('/:employeId', EmployeController.deleteEmploye);

export default router;// Export du routeur pour être utilisé dans l'application principale

