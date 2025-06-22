export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
    position: string; // Poste occupé
    department: string; // Département
    salary: number;
    hireDate: Date; // Date d'embauche
    status: 'active' | 'inactive' | 'on-leave'; // Statut de l'employé
    profilePictureUrl?: string; // URL de la photo de profil
}
