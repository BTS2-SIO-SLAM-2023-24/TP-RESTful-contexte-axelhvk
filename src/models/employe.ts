

import mongoose, { Document,Schema} from "mongoose";
// Modèle pour l'employé
export interface IEmploye {
    nom: string;
    prenom: string;
}
export interface IEmployeModel extends IEmploye, Document {}
// Schéma pour l'employé
const EmployeSchema: Schema = new Schema(
    {
        nom: { type: String, required: true },
        prenom: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default mongoose.model<IEmployeModel>('Employe', EmployeSchema);
