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


export const navData: INavData[] = [
    {
        title: 'Dashboard',
        icon: 'ri-dashboard-horizontal-line',
        url: '/dashboard',
        active: true,
    },
    {
        title: 'Users',
        icon: 'ri-user-add-line',
        isOpen: false,
        children: [
            {
                title: 'Add User',
                url: '/users/add',
            },
            {
                title: 'List Users',
                url: '/users/list',
                badge: { count: 5, class: 'bg-red-500 text-white' }, // Badge pour les notifications
            },
        ],
    },
    {
        title: 'Settings',
        icon: 'fas fa-cog',
        url: '/settings',
        disabled: true, // Cet élément est désactivé
    },
    {
        title: 'Custom Action',
        icon: 'fas fa-star',
        url: '/custom',

        onClick: () => {
            console.log('Custom action triggered!');
        },

    },

];

