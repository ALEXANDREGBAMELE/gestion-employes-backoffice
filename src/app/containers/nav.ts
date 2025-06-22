export interface INavData {
    /** Le titre de l'élément de navigation affiché dans le menu */
    title?: string;

    /** L'icône associée à l'élément (optionnel) */
    icon?: string;

    /** Le chemin de la route associée à l'élément */
    url?: string;

    /** Indique si l'élément est actif ou sélectionné (optionnel) */
    active?: boolean;

    /** Indique si l'élément doit être masqué dans le menu (optionnel) */
    hidden?: boolean;

    /** Indique si l'élément est désactivé (optionnel) */
    disabled?: boolean;
    isOpening?: boolean;
    isOpen?: boolean;
    /** Sous-éléments de navigation (optionnel) */
    children?: INavData[];

    /** Indique si l'élément a un badge ou une notification (optionnel) */
    badge?: {
        /** Le nombre à afficher dans le badge */
        count: number;
        /** Une classe CSS pour styliser le badge (optionnel) */
        class?: string;
    };

    /** Spécifie une méthode de clic personnalisée (optionnel) */
    onClick?: () => void;

}


// export const navData: INavData[] = [
//     {
//         title: 'Dashboard',
//         icon: 'ri-dashboard-horizontal-line',
//         url: '/dashboard',
//         active: true,
//     },
//     {
//         title: 'Administration',
//         icon: 'ri-dashboard-horizontal-line',
//         active: true,
//         children: [
//             {
//                 title: 'Direction générale',
//                 url: '/users/add',
//             },
//             {
//                 title: 'Département RH',
//                 // url: '/users/add',
//                 children: [
//                     {
//                         title: "Employé",
//                         url: '/employee',
//                     },
//                     {
//                         title: "Contract",
//                         // url: '/contract',
//                         children: [
//                             {
//                                 title: "Liste des contracts",
//                                 url: '/contract/list',
//                             },
//                             {
//                                 title: "Type de contracts",
//                                 url: 'contract/type',
//                             },
//                             {
//                                 title: "Clause de contracts",
//                                 url: 'contract/clause',
//                             }
//                         ]
//                     },

//                 ]
//             },
//             {
//                 title: 'Département informatique',
//                 url: '/users/add',
//             },
//             {
//                 title: 'Département finance',
//                 url: '/users/add',
//             },
//         ]
//     },
//     {
//         title: 'Utilisateurs',
//         icon: 'ri-user-add-line',
//         isOpen: false,

//         url: '/users/list',
//         // badge: { count: 5, class: 'bg-red-500 text-white' },


//     },
//     {
//         title: 'Settings',
//         icon: 'ri-settings-4-line',
//         // url: '/settings',
//         disabled: false, // Cet élément est désactivé
//         children: [
//             {
//                 title: 'Entreprise',
//                 url: '/parametre'
//             },
//             {
//                 title: 'Département',
//                 url: '/department'
//             },
//             {
//                 title: 'Type de contract',
//                 url: '/contract-type'
//             },
//             {
//                 title: 'Profile',
//                 url: '/profile'
//             }
//         ]
//     },
//     {
//         title: 'Custom Action',
//         icon: 'fas fa-star',
//         url: '/custom',
//         disabled: true,

//         onClick: () => {
//             console.log('Custom action triggered!');
//         },

//     },

// ];


export const navData: INavData[] = [
    // DASHBORD
    {
        title: 'Dashboard',
        icon: 'ri-dashboard-horizontal-line',
        url: '/dashboard',
        active: true,
    },
    // EMPLOYE
    {
        title: 'Employé',
        icon: 'ri-user-line',
        children: [
            { title: 'Accueil', url: '/employee/dashboard' },
            { title: 'Mon profil', url: '/employee/profile' },
            { title: 'Mes fiches de paie', url: '/employee/payslips' },
            { title: 'Mes congés', url: '/employee/leaves' },
            { title: 'Mes formations', url: '/employee/trainings' },
        ]
    },

    // MANAGER
    {
        title: 'Manager',
        icon: 'ri-team-line',
        children: [
            { title: 'Accueil Manager', url: '/manager/dashboard' },
            { title: 'Mon équipe', url: '/manager/team' },
            { title: 'Liste des membres', url: '/manager/team/members' },
            { title: 'Valider congés', url: '/manager/leaves/validate' },
            { title: 'Feedbacks collaborateurs', url: '/manager/feedback' },
            { title: 'Performance équipe', url: '/manager/performance' },
        ]
    },

    // RH
    {
        title: 'RH',
        icon: 'ri-briefcase-4-line',
        children: [
            { title: 'Accueil RH', url: '/rh/dashboard' },
            {
                title: 'Employés',
                url: '/rh/employees'
            },
            {
                title: 'Recrutement',
                children: [
                    { title: 'Offres en cours', url: '/rh/recruitment/offers' },
                    { title: 'Candidats', url: '/rh/recruitment/candidates' },
                ]
            },
            {
                title: 'Contrats',
                children: [
                    { title: 'Liste des Contrats', url: '/rh/contracts' },
                    { title: 'Types de Contrats', url: '/rh/contracts/types' },
                    { title: 'Clauses de Contrats', url: '/rh/contracts/clauses' },
                ],
            },
            { title: 'Rapports RH', url: '/rh/reports' },
        ]
    },

    // ADMIN
    {
        title: 'Admin',
        icon: 'ri-shield-user-line',
        children: [
            { title: 'Accueil Admin', url: '/admin/dashboard' },
            {
                title: 'Utilisateurs',
                url: '/admin/users/list'

            },
            { title: 'Gestion des rôles', url: '/admin/users/roles' },
            {
                title: 'Départements',
                url: '/admin/departments'

            },
            {
                title: 'Paramètres Généraux',
                children: [
                    { title: 'Configurations', url: '/admin/settings/configurations' },
                    { title: 'Sécurité', url: '/admin/settings/security' },
                ]
            }
        ]
    }
];


