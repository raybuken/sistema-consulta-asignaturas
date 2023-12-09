import { Accordion} from '@chakra-ui/react';
import AccordionGroupItem from './AccordionGroupItem';

function AccordionMenu({isLogged}) {

    const dropdownLinks = [
        {
            groupName: "Usuario",
            items: [
                {
                    name: "Ver usuarios",
                    path: "/user"
                },
                {
                    name: "Crear Usuario",
                    path: "/user/create"
                }
            ]
        },
        {
            groupName: "Departamento",
            items: [
                {
                    name: "Ver Departamentos",
                    path: "/department"
                },
                {
                    name: "Crear Departamento",
                    path: "/department/create"
                }
            ]
        },
        {
            groupName: "Despacho",
            items: [
                {
                    name: "Ver Despachos",
                    path: "/dispatch"
                },
                {
                    name: "Crear Despacho",
                    path: "/dispatch/create"
                }
            ]
        },
        {
            groupName: "Area de conocimiento",
            items: [
                {
                    name: "Ver Areas de conocimiento",
                    path: "/knowledgearea"
                },
                {
                    name: "Crear Area de conocimiento",
                    path: "/knowledgearea/create"
                }
            ]
        },
        {
            groupName: "Maestros",
            items: [
                {
                    name: "Ver docentes",
                    path: "/teacher"
                },
                {
                    name: "Crear docente",
                    path: "/teacher/create"
                }
            ]
        },
        {
            groupName: "Aulas",
            items: [
                {
                    name: "Ver aulas",
                    path: "/classroom"
                },
                {
                    name: "Crear Aula",
                    path: "/classroom/create"
                }
            ]
        },
        {
            groupName: "Carreras",
            items: [
                {
                    name: "Ver carreras",
                    path: "/career"
                },
                {
                    name: "Crear Carrera",
                    path: "/career/create"
                }
            ]
        },
        {
            groupName: "Pensum",
            items: [
                {
                    name: "Ver pensums",
                    path: "/pensum"
                },
                {
                    name: "Crear Pensum",
                    path: "/pensum/create"
                }
            ]
        },
        {
            groupName: "Materias",
            items: [
                {
                    name: "Ver asignaturas",
                    path: "/subject"
                },
                {
                    name: "Crear Asignatura",
                    path: "/subject/create"
                }
            ]
        },
        {
            groupName: "Periodo",
            items: [
                {
                    name: "Ver periodos",
                    path: "/period"
                },
                {
                    name: "Crear Periodo",
                    path: "/period/create"
                }
            ]
        },
        {
            groupName: "Calendario",
            items: [
                {
                    name: "Ver Calendarios",
                    path: "/calendar/period"
                },
                {
                    name: "Crear calendario",
                    path: "/calendar/period/create"
                }
            ]
        },
        {
            groupName: "Configuraciones",
            path: "/settings"
        },
    ];

    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            { dropdownLinks.map((group, index) => <AccordionGroupItem groupItem={group} key={index} />) }
        </Accordion>
    )
}

export default AccordionMenu