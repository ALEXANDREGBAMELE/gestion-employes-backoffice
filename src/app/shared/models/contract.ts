export interface Contract {
    id: number;                     // Identifiant unique du contrat
    employeeId: number;            // Identifiant de l'employé
    employeeName: string;           // Nom de l'employé
    position: string;               // Poste occupé
    startDate: string;              // Date de début
    endDate: string;                // Date de fin (peut être null si le contrat est toujours actif)
    salary: number;                 // Salaire
    status: 'active' | 'inactive';  // Statut du contrat
    department: string;             // Département
}
