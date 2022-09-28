import Resource from "./constants"
export const FormInitObjects=[
    {
        name: 'personal',
        label: 'Personal details',
        formLabel:'Fill personal details',
        isOpen: true,
        style: {
            width: '100%',
            height: '50px',
            backgroundColor: '#F9F9F9',
            color: Resource.colors.activeColor,
        },
        isVisible: true,
    },
    {
        name: 'address',
        label: 'Address details',
        formLabel:'Fill address details',
        isOpen: false,
        style: {
            width: '100%',
            height: '50px',
            backgroundColor: '#F9F9F9',
            color: Resource.colors.inActiveColor,
        },
        isVisible: true,
    },
    {
        name: 'parents',
        label: 'Parents details',
        formLabel:'Fill parents details',
        isOpen: false,
        style: {
            width: '100%',
            height: '50px',
            backgroundColor: '#F9F9F9',
            color: Resource.colors.inActiveColor,
        },
        isVisible: true,
    },
    {
        name: 'guardian',
        label: 'Guardian details',
        formLabel:'Fill guardian details',
        isOpen: false,
        style: {
            width: '100%',
            height: '50px',
            backgroundColor: '#F9F9F9',
            color: Resource.colors.inActiveColor,
        },
        isVisible: false,
    },

]