import React, { useState } from 'react';
import './AgendaCultural.css'; 

function AgendaCultural() {
  const [eventos, setEventos] = useState([
    { id: 1, nome: "Show de Jazz", gratuito: true },
    { id: 2, nome: "Peça de Teatro", gratuito: false },
    { id: 3, nome: "Oficina de Pintura", gratuito: true }
  ]);

  const temEventoGratuito = eventos.some(evento => evento.gratuito);

  return (
    <div className="quadro-cultural">
      <h1>Agenda Cultural</h1>

      <p className="aviso-eventos">
        {temEventoGratuito
          ? "Aproveite os eventos gratuitos disponíveis!"
          : "Todos os eventos são pagos no momento."
        }
      </p>

      <ul className="catalogo-eventos">
        {eventos.map(evento => (
          <li key={evento.id} className="cartao-evento">
            
            <span className="titulo-evento">{evento.nome}</span>
            
            <span className={`etiqueta-preco ${evento.gratuito ? 'etiqueta-gratis' : 'etiqueta-pago'}`}>
              {evento.gratuito ? 'Gratuito' : 'Pago'}
            </span>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgendaCultural;