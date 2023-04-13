import React from 'react'
import'./css/sobre.css'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    } from '@chakra-ui/react'
    
    import { Text } from '@chakra-ui/react'
    import { Box } from '@chakra-ui/react'
    import {  useColorModeValue} from '@chakra-ui/react'
const SobreNosotros = () => {
    const bg = useColorModeValue('white', 'white')
    const color = useColorModeValue('green', 'black')
    return (
    
        <div className='cont'>
            <Box h='100%' bg={bg}>
            <div className='cont-texto-1'>
            <Text as='b' color={color}>Sobre Nosotros</Text>
            <h3 >Mi lista de Tarea</h3>
            <hr />
            <p >
            La herramienta que ofrezco tiene como objetivo mejorar la organización del tiempo del usuario, lo que se traduce en un mayor rendimiento y productividad en el trabajo y en otros ámbitos de la vida diaria. Mi sistema es interactivo y cuenta con una interfaz agradable, lo que facilita la experiencia del usuario.
            <br />
            <br />
           
            </p>
        
    <Menu color={color}  >
        <MenuButton  color={color} >
        <Text color={color} as='b'> Caracteristicas que ofrece:</Text>
        </MenuButton>
        <MenuList>
            <MenuItem>Posibilidad de crear tareas ilimitadas.</MenuItem>
            <MenuItem>Capacidad para buscar tareas previamente realizadas.</MenuItem>
            <MenuItem>Función para tachar tareas ya completadas.</MenuItem>
            <MenuItem>Opción para eliminar tareas.</MenuItem>
            <MenuItem>Además, habrá más actualizaciones en el futuro.</MenuItem>
            <MenuItem>Este producto está desarrollado en JavaScript utilizando la biblioteca de React.</MenuItem>
            <MenuItem>Icon :React Icon</MenuItem>
    </MenuList>  
    </Menu>

        </div>

        </Box>
        </div> 
    )
    }

export default SobreNosotros