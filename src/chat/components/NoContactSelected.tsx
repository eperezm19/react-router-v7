const NoContactSelected = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-muted-foreground">
          Seleccione un cliente
        </h2>
        <p className="text-sm text-muted-foreground mt-2">
          Por favor, seleccione un cliente de la lista para iniciar una conversación
        </p>
      </div>
    </div>
  )
}

export default NoContactSelected
