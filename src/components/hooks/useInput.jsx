//ELIMINAR
export const handleOnClick = (id) => {
    alert("Tarea Eliminada")

    localStorage.removeItem(id)
    window.location.reload();
}

