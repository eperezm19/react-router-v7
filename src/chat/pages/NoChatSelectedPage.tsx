const NoChatSelectedPage = () => {
  return (
    <div>
      <div className="h-svh flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2 max-w-sm text-center">
          <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10 text-muted-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Ningún chat seleccionado</h3>
          <p className="text-muted-foreground">
            Selecciona un chat de la lista de la izquierda para comenzar una conversación
          </p>
        </div>
      </div>
    </div>
  )
}

export default NoChatSelectedPage
